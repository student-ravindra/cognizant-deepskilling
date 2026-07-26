import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CourseService } from '../../services/course';
import { loadCourses, loadCoursesSuccess, loadCoursesFailure } from './course.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CourseEffects {

  loadCourses$;

  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) {

    this.loadCourses$ = createEffect(() =>
      this.actions$.pipe(

        ofType(loadCourses),

        switchMap(() =>
          this.courseService.getCourses().pipe(

            map(courses =>
              loadCoursesSuccess({ courses })
            ),

            catchError(error =>
              of(
                loadCoursesFailure({
                  error: error.message
                })
              )
            )

          )
        )

      )
    );

  }

}