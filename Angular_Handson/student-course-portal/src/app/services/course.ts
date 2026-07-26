import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, throwError, tap, retry } from 'rxjs';
import { Course } from '../models/course';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}


 getCourses(): Observable<Course[]> {

  return this.http.get<Course[]>(this.apiUrl)
    .pipe(

      retry(2),

      tap(courses => {
        console.log('Courses loaded:', courses.length);
      }),

      map(courses =>
        courses.filter(course => course.credits > 0)
      ),

      catchError(err => {

        console.error('Error loading courses after retries:', err);

        return throwError(() =>
          new Error('Failed to load courses. Please try again.')
        );

      })

    );

}


  getCourseById(id: number): Observable<Course> {

    return this.http.get<Course>(`${this.apiUrl}/${id}`);

  }


  createCourse(course: Omit<Course, 'id'>): Observable<Course> {

    return this.http.post<Course>(
      this.apiUrl,
      course
    );

  }


  updateCourse(id: number, course: Course): Observable<Course> {

    return this.http.put<Course>(
      `${this.apiUrl}/${id}`,
      course
    );

  }


  deleteCourse(id: number): Observable<void> {

    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );

  }

}