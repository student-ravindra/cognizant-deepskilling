import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from './course';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private enrolledCourseIds: number[] = [];

  private enrolledCoursesSubject =
    new BehaviorSubject<number[]>([]);

  enrolledCourses$ =
    this.enrolledCoursesSubject.asObservable();


  constructor(
    private courseService: CourseService,
    private http: HttpClient
  ) {}


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


  getEnrolledCourses(): Observable<Course[]> {

    return this.http.get<Course[]>('http://localhost:3000/courses')
      .pipe(
        map((courses: Course[]) =>
          courses.filter((course: Course) =>
            this.enrolledCourseIds.includes(course.id)
          )
        )
      );

  }
  getStudentsByCourse(courseId: number): Observable<any[]> {

  return this.http.get<any[]>(
    `http://localhost:3000/students?courseId=${courseId}`
  );

}

}
