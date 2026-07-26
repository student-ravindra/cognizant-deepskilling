import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentService } from '../../services/enrollment';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe],
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

  isExpanded = false;


  constructor(private enrollmentService: EnrollmentService) {}


  ngOnChanges(changes: SimpleChanges): void {

    console.log('Course Input Changed');
    console.log('Previous Value:', changes['course']?.previousValue);
    console.log('Current Value:', changes['course']?.currentValue);

  }


  get cardClasses() {

    return {
      'card--enrolled': this.isCourseEnrolled(),
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


  isCourseEnrolled(): boolean {

    return this.enrollmentService.isEnrolled(this.course.id);

  }


  toggleEnrollment(): void {

    if (this.isCourseEnrolled()) {

      this.enrollmentService.unenroll(this.course.id);

    } else {

      this.enrollmentService.enroll(this.course.id);

    }

    this.enrollRequested.emit(this.course.id);

  }


  toggleDetails(): void {

    this.isExpanded = !this.isExpanded;

  }

}