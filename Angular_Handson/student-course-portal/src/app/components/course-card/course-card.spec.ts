import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';

import { CourseCardComponent } from './course-card';

describe('CourseCardComponent', () => {

  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  const mockCourse = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed',
    enrolled: false
  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CourseCardComponent],
      providers: [
        provideMockStore({
          initialState: {
            enrollment: {
              enrolledCourseIds: []
            }
          }
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;

    component.course = mockCourse;

    fixture.detectChanges();
    await fixture.whenStable();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course name', () => {

    const heading =
      fixture.debugElement.query(By.css('h3'));

    expect(
      heading.nativeElement.textContent
    ).toContain('Data Structures');

  });

  it('should emit enrollRequested event', () => {

    let emittedId: number | undefined;

    component.enrollRequested.subscribe(id => {
      emittedId = id;
    });

    component.toggleEnrollment([]);

    expect(emittedId).toBe(1);

  });

  it('should call ngOnChanges', () => {

    expect(() => {

      component.ngOnChanges({
        course: new SimpleChange(
          null,
          mockCourse,
          true
        )
      });

    }).not.toThrow();

  });

  it('should toggle details section', () => {

    expect(component.isExpanded).toBeFalsy();

    component.toggleDetails();

    expect(component.isExpanded).toBeTruthy();

  });

});