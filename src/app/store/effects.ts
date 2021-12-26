import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { MockApiService } from '../services/mockapi.service';
import {
  ApiError,
  ApiGetMockData,
  ApiGetMockDataWithError,
  ApiSuccess,
} from './actions';

@Injectable()
export class RootEffects {
  constructor(private actions$: Actions, private mockApi: MockApiService) {}

  getMockDataEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiGetMockData),
      mergeMap((action) => {
        return this.mockApi.getDataFromId(action.id).pipe(
          map((res) => ApiSuccess({ data: res })),
          catchError((error) => of(ApiError({ error })))
        );
      })
    )
  );

  getMockDataWithErrorEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiGetMockDataWithError),
      mergeMap((action) => {
        return this.mockApi.getApiError().pipe(
          map((res) => ApiSuccess({ data: res })),
          catchError((error) => of(ApiError({ error })))
        );
      })
    )
  );
}
