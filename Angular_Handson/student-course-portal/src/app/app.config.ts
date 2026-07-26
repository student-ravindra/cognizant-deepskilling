import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor';
import { errorHandlerInterceptor } from './interceptors/error-handler-interceptor';
import { loadingInterceptor } from './interceptors/loading-interceptor';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore, provideState } from '@ngrx/store';
import { courseReducer } from './store/course/course.reducer';
import { provideEffects } from '@ngrx/effects';
import { CourseEffects } from './store/course/course.effects';
import { enrollmentReducer } from './store/enrollment/enrollment.reducer';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
  provideRouter(routes),
  provideHttpClient(
    withInterceptors([
      authInterceptor,
      errorHandlerInterceptor,
      loadingInterceptor
    ])
  ),

  provideStore(),

  provideState('course', courseReducer),

  provideEffects(CourseEffects),

  provideStoreDevtools({
    maxAge: 25
  })
]
};