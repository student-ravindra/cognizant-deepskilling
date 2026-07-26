import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnrollmentState } from './enrollment.reducer';
import { selectAllCourses } from '../course/course.selectors';

export const selectEnrollmentState =
  createFeatureSelector<EnrollmentState>('enrollment');

export const selectEnrolledCourseIds =
  createSelector(
    selectEnrollmentState,
    (state: EnrollmentState | undefined) =>
      state?.enrolledCourseIds ?? []
  );

export const selectEnrolledCourses =
  createSelector(
    selectAllCourses,
    selectEnrolledCourseIds,
    (courses, enrolledIds) =>
      courses.filter(course =>
        enrolledIds.includes(course.id)
      )
  );
  export const selectEnrolledIds = selectEnrolledCourseIds;