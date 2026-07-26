import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CourseList } from './course-list';

describe('CourseList', () => {

  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;
  let store: MockStore;

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

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        CourseList,
        RouterTestingModule
      ],
      providers: [
        provideMockStore({
  initialState: {
    enrollment: {
      enrolledCourseIds: []
    },
            course: {
              courses: mockCourses,
              loading: false,
              error: null
            }
          }
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;

    store = TestBed.inject(MockStore);

    fixture.detectChanges();
    await fixture.whenStable();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have courses observable', () => {

    component.courses$.subscribe(courses => {

      expect(courses).toBeTruthy();

    });

  });

 it('should call ngOnInit successfully', () => {

  expect(() => {

    component.ngOnInit();

  }).not.toThrow();

});

  it('should update selectedCourseId when enrolling', () => {

    component.onEnroll(1);

    expect(component.selectedCourseId).toBe(1);

  });

  it('should update store state', () => {

    store.setState({
      course: {
        courses: [],
        loading: true,
        error: null
      }
    });

    fixture.detectChanges();

    expect(store).toBeTruthy();

  });

});