import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [],
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css'
})
export class CourseSummaryWidget implements OnInit {

  courseCount = 0;

  constructor(private courseService: CourseService) {}


  ngOnInit(): void {

    this.courseService.getCourses()
  .subscribe(courses => {
    this.courseCount = courses.length;
  });

  }

}