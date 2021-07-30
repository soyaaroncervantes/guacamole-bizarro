import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { userFeatureKey, userReducer, UserState } from '@libs/auth';
import { environment } from '../../../environments/environment';
import { debugReducer } from './actions.debug';

export interface AppState {
  [userFeatureKey]: UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
  [userFeatureKey]: userReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [debugReducer] : [];
