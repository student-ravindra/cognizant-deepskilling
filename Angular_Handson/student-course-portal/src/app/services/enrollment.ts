import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from './course';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private enrolledCourseIds: number[] = [];

  private enrolledCoursesSubject =
    new BehaviorSubject<number[]>([]);

  enrolledCourses$ =
    this.enrolledCoursesSubject.asObservable();


  constructor(private courseService: CourseService) {}


  enroll(courseId: number): void {

    if (!this.enrolledCourseIds.includes(courseId)) {

      this.enrolledCourseIds.push(courseId);

      this.enrolledCoursesSubject.next(
        this.enrolledCourseIds
      );

    }

  }


  unenroll(courseId: number): void {

    this.enrolledCourseIds =
      this.enrolledCourseIds.filter(id => id !== courseId);

    this.enrolledCoursesSubject.next(
      this.enrolledCourseIds
    );

  }


  isEnrolled(courseId: number): boolean {

    return this.enrolledCourseIds.includes(courseId);

  }


  getEnrolledCourses(): Course[] {

    return this.enrolledCourseIds
      .map(id => this.courseService.getCourseById(id))
      .filter((course): course is Course => course !== undefined);

  }

}