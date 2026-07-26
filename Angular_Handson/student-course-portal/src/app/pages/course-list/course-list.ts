import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses = [
    { id: 1, name: 'Angular Fundamentals', code: 'ANG101', credits: 4, gradeStatus: 'passed', enrolled: true },
    { id: 2, name: 'TypeScript Basics', code: 'TS102', credits: 3, gradeStatus: 'failed', enrolled: false },
    { id: 3, name: 'Web Development', code: 'WEB103', credits: 4, gradeStatus: 'pending', enrolled: true },
    { id: 4, name: 'Database Systems', code: 'DB104', credits: 3, gradeStatus: 'passed', enrolled: false },
    { id: 5, name: 'Software Engineering', code: 'SE105', credits: 4, gradeStatus: 'pending', enrolled: true }
  ];

  selectedCourseId: number | null = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  // trackBy improves performance by reusing existing DOM elements.
  trackByCourseId(index: number, course: any): number {
    return course.id;
  }
}