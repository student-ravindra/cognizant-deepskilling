import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(

    catchError(error => {

      if (error.status === 401) {
        console.log('Unauthorized access');
      }

      if (error.status === 500) {
        console.log('Server error occurred');
      }

      return throwError(() => error);

    })

  );

};