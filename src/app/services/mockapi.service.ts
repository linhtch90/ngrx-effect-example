import { Injectable } from '@angular/core';
import { delay, map, Observable, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MockApiService {
  getDataFromId(id: string): Observable<any> {
    return of({ id: 0, data: '' }).pipe(
      map((item) => ({ id, data: 'Expanded data from id: ' + id })),
      delay(1000)
    );
  }

  getApiError(): Observable<any> {
    return of(0).pipe(
      delay(1000),
      tap(() => {
        throw 'A random error';
      })
    );
  }
}
