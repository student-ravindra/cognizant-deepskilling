import { TestBed } from '@angular/core/testing';

import {
  HttpTestingController,
  provideHttpClientTesting
} from '@angular/common/http/testing';

import {
  provideHttpClient
} from '@angular/common/http';

import { CourseService } from './course';

describe('CourseService', () => {

  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses = [
    {
      id: 1,
      name: 'Java',
      code: 'J101',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: false
    },
    {
      id: 2,
      name: 'Angular',
      code: 'A101',
      credits: 3,
      gradeStatus: 'pending',
      enrolled: false
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CourseService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get courses', () => {

    service.getCourses().subscribe(courses => {
      expect(courses.length).toBe(2);
    });

    const req = httpMock.expectOne(
      'http://localhost:3000/courses'
    );

    expect(req.request.method).toBe('GET');

    req.flush(mockCourses);
  });

it('should handle server error', () => {

  service.getCourses().subscribe({

    next: () => {
      throw new Error('Expected error');
    },

    error: (error) => {
      expect(error.message)
        .toContain('Failed to load courses');
    }

  });

  const req1 = httpMock.expectOne(
    'http://localhost:3000/courses'
  );

  req1.flush('Server Error', {
    status: 500,
    statusText: 'Internal Server Error'
  });

  const req2 = httpMock.expectOne(
    'http://localhost:3000/courses'
  );

  req2.flush('Server Error', {
    status: 500,
    statusText: 'Internal Server Error'
  });

  const req3 = httpMock.expectOne(
    'http://localhost:3000/courses'
  );

  req3.flush('Server Error', {
    status: 500,
    statusText: 'Internal Server Error'
  });

});
});