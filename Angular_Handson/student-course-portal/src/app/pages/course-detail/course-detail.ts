import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { CourseService } from '../../services/course';
import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course';


@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail implements OnInit {

  private route = inject(ActivatedRoute);
  private courseService = inject(CourseService);
  private enrollmentService = inject(EnrollmentService);

  course?: Course;

  students: any[] = [];


  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );


    this.courseService.getCourseById(id)
      .subscribe(course => {

        this.course = course;

        this.loadStudents(course.id);

      });

  }


  loadStudents(courseId: number): void {

    this.enrollmentService
      .getStudentsByCourse(courseId)
      .pipe(

        switchMap(students => {

          // switchMap cancels the previous request
          // when a new courseId value arrives.

          return this.enrollmentService
            .getStudentsByCourse(courseId);

        })

      )
      .subscribe(data => {

        this.students = data;

      });

  }

}