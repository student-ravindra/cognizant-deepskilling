import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent, FormsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses: Course[] = [];
  searchTerm = '';
  errorMessage = '';

  selectedCourseId: number | null = null;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.searchTerm = this.route.snapshot.queryParamMap.get('search') || '';

    this.isLoading = true;

    setTimeout(() => {
      this.courseService.getCourses()
  .subscribe({
    next: courses => {
      this.courses = courses;
    },
    error: err => {
       this.errorMessage = err.message;
    },
    complete: () => {
      this.isLoading = false;
    }
  });
      this.isLoading = false;
    }, 1500);

  }

  onEnroll(courseId: number): void {

    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;

  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  viewCourse(courseId: number) {
    this.router.navigate(['courses', courseId]);
  }

  updateSearch() {
    this.router.navigate(['courses'], {
      queryParams: {
        search: this.searchTerm
      }
    });
  }

}