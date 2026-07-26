import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';
import { Course } from '../../models/course';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllCourses } from '../../store/course/course.selectors';
import { loadCourses } from '../../store/course/course.actions';


@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCardComponent,
    FormsModule
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses$: Observable<Course[]>;

  searchTerm = '';
  errorMessage = '';

  selectedCourseId: number | null = null;


  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.courses$ = this.store.select(selectAllCourses);
  }


  ngOnInit(): void {

    this.searchTerm =
      this.route.snapshot.queryParamMap.get('search') || '';

    // Dispatch NgRx action
    this.store.dispatch(loadCourses());

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