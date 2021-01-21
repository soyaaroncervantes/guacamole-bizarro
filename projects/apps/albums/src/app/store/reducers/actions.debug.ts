import { ActionReducer } from '@ngrx/store';
import { AppState } from './index';

export const debugReducer = (reducer: ActionReducer<AppState>): ActionReducer<AppState> =>
  function (state, action) {
    return reducer(state, action);
  };
