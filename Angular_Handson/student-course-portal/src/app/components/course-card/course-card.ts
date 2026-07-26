import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

import { Store } from '@ngrx/store';
import { Observable, startWith } from 'rxjs';

import {
  enrollInCourse,
  unenrollFromCourse
} from '../../store/enrollment/enrollment.actions';

import {
  selectEnrolledIds
} from '../../store/enrollment/enrollment.selectors';


@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    CreditLabelPipe
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent implements OnChanges {


  @Input() course!: {
    id: number;
    name: string;
    code: string;
    credits: number;
    gradeStatus: string;
    enrolled: boolean;
  };


  @Output() enrollRequested = new EventEmitter<number>();


  enrolledIds$: Observable<number[]>;

  isExpanded = false;


  constructor(
  private store: Store
) {
  this.enrolledIds$ = this.store
    .select(selectEnrolledIds)
    .pipe(
      startWith([])
    );
}



  ngOnChanges(changes: SimpleChanges): void {

    console.log('Course Input Changed');
    console.log(
      'Previous Value:',
      changes['course']?.previousValue
    );

    console.log(
      'Current Value:',
      changes['course']?.currentValue
    );

  }



  get cardClasses() {

    return {
      'card--enrolled': this.course.enrolled,
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };

  }



  getBorderColor(): string {

    switch (this.course.gradeStatus) {

      case 'passed':
        return 'green';

      case 'failed':
        return 'red';

      default:
        return 'grey';

    }

  }



  isCourseEnrolled(enrolledIds: number[]): boolean {

    return enrolledIds.includes(this.course.id);

  }



  toggleEnrollment(enrolledIds: number[]): void {


    if (this.isCourseEnrolled(enrolledIds)) {


      this.store.dispatch(
        unenrollFromCourse({
          courseId: this.course.id
        })
      );


    } else {


      this.store.dispatch(
        enrollInCourse({
          courseId: this.course.id
        })
      );


    }


    this.enrollRequested.emit(this.course.id);

  }



  toggleDetails(): void {

    this.isExpanded = !this.isExpanded;

  }

}