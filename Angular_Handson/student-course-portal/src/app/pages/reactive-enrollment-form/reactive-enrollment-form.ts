import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {

  enrollForm!: FormGroup;

  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [Validators.required, Validators.minLength(3)]
      ],

      studentEmail: [
        '',
        [Validators.required, Validators.email],
        [this.simulateEmailCheck]
      ],

      courseId: [
        null,
        [Validators.required, this.noCourseCode]
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],

      additionalCourses: this.fb.array([])

    });

  }


  noCourseCode(control: AbstractControl): ValidationErrors | null {

    if (control.value && control.value.toString().startsWith('XX')) {
      return { noCourseCode: true };
    }

    return null;
  }


  simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {

    return new Promise((resolve) => {

      setTimeout(() => {

        if (control.value && control.value.includes('test@')) {
          resolve({ emailTaken: true });
        } 
        else {
          resolve(null);
        }

      }, 800);

    });

  }


  get additionalCourses(): FormArray<FormControl> {
    return this.enrollForm.get('additionalCourses') as FormArray<FormControl>;
  }


  addCourse(): void {

    this.additionalCourses.push(
      new FormControl('', Validators.required)
    );

  }


  removeCourse(index: number): void {

    this.additionalCourses.removeAt(index);

  }


  onSubmit(): void {

    this.submitted = true;

    console.log(this.enrollForm.value);
    console.log(this.enrollForm.getRawValue());

  }


  // CanDeactivate Guard check
  canDeactivate(): boolean {

    if (this.enrollForm.dirty) {

      return window.confirm(
        'You have unsaved changes. Leave?'
      );

    }

    return true;

  }

}