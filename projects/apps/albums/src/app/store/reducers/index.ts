import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { userFeatureKey, userReducer, UserState } from '@libs/auth';
import { albumsFeatureKey, albumsReducer, AlbumsState } from '@libs/albums';
import { environment } from '../../../environments/environment';
import { debugReducer } from './actions.debug';

export interface AppState {
  [userFeatureKey]: UserState;
  [albumsFeatureKey]: AlbumsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  [userFeatureKey]: userReducer,
  [albumsFeatureKey]: albumsReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [debugReducer] : [];
