import { createSelector } from '@ngrx/store';
import { RootState } from './reducers';

const getError = (state: RootState): string => state.error;
const getSelectedData = (state: RootState): any => state.selectedMockData;

const getStateError = createSelector((state: any) => state.rootState, getError);

const getStateSelectedData = createSelector(
  (state: { rootState: RootState }) => state.rootState,
  getSelectedData
);

export { getStateError, getStateSelectedData };
