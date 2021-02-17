import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class BaseHttpService {
  constructor(private http: HttpClient) {}

  protected httpGetRequest<T>(url: string): Observable<T | never> {
    return this.http.get<T>(url).pipe(
      retry(2),
      catchError((err) => {
        console.error('GET Request Error: \n', err);
        return throwError(err);
      })
    );
  }
}
