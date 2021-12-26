import { createReducer, on } from '@ngrx/store';
import { ApiError, ApiSuccess } from './actions';

export interface RootState {
  error: any;
  selectedMockData: {
    id: string;
    data: string;
  };
}

const initialState: RootState = {
  error: null,
  selectedMockData: {
    id: '',
    data: '',
  },
};

export const rootReducer = createReducer(
  initialState,
  on(ApiError, (state, action) => ({
    error: action.error,
    selectedMockData: { id: '', data: '' },
  })),
  on(ApiSuccess, (state, action) => ({
    error: null,
    selectedMockData: action.data,
  }))
);
