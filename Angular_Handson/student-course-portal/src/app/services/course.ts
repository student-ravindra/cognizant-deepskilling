import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  private courses: Course[] = [
    {
      id: 1,
      name: 'Angular Fundamentals',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: true
    },
    {
      id: 2,
      name: 'TypeScript Basics',
      code: 'TS102',
      credits: 3,
      gradeStatus: 'failed',
      enrolled: true
    },
    {
      id: 3,
      name: 'Web Development',
      code: 'WEB103',
      credits: 4,
      gradeStatus: 'pending',
      enrolled: true
    },
    {
      id: 4,
      name: 'Database Systems',
      code: 'DB104',
      credits: 3,
      gradeStatus: 'passed',
      enrolled: true
    },
    {
      id: 5,
      name: 'Software Engineering',
      code: 'SE105',
      credits: 4,
      gradeStatus: 'pending',
      enrolled: true
    }
  ];


  getCourses(): Course[] {
    return this.courses;
  }


  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }


  addCourse(course: Course): void {
    this.courses.push(course);
  }

}