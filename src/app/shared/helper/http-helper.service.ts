import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class HttpHelperService {
  constructor(private http: HttpClient) {}

  public httpGetRequest(url: string = ''): Observable<any> {
    return this.http.get(url).pipe(
      retry(2),
      catchError((err) => {
        console.error('GET Request Error: \n', err);
        return throwError(err);
      })
    );
  }
}
