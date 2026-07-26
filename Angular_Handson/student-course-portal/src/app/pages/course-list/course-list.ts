import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses: Course[] = [];

  selectedCourseId: number | null = null;


  constructor(private courseService: CourseService) {}


  ngOnInit(): void {

    this.isLoading = true;

    setTimeout(() => {

      this.courses = this.courseService.getCourses();
      this.isLoading = false;

    }, 1500);

  }


  onEnroll(courseId: number): void {

    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;

  }


  // trackBy improves performance by preventing Angular from recreating
  // unchanged DOM elements when the course list changes.
  trackByCourseId(index: number, course: Course): number {

    return course.id;

  }

}