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
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe, Highlight],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent implements OnChanges {

  @Input() course!: {
    id: number;
    name: string;
    code: string;
    credits: number | null;
    gradeStatus: string;
    enrolled: boolean;
  };

  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course Input Changed');
    console.log('Previous Value:', changes['course']?.previousValue);
    console.log('Current Value:', changes['course']?.currentValue);
  }

  // Getter keeps templates clean by moving class logic to the component.
  get cardClasses() {
    return {
      'card--enrolled': this.course.enrolled,
      'card--full': (this.course.credits ?? 0) >= 4,
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

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }
}