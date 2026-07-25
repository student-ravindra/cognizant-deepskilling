import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  courses = [
  { id: 1, name: 'Angular Fundamentals', code: 'ANG101', credits: 4 },
  { id: 2, name: 'TypeScript Basics', code: 'TS102', credits: 3 },
  { id: 3, name: 'Web Development', code: 'WEB103', credits: 4 },
  { id: 4, name: 'Database Systems', code: 'DB104', credits: 3 },
  { id: 5, name: 'Software Engineering', code: 'SE105', credits: 4 }
];

selectedCourseId: number | null = null;

onEnroll(courseId: number): void {
  console.log('Enrolling in course: ' + courseId);
  this.selectedCourseId = courseId;
}
}