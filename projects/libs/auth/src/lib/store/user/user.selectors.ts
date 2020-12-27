import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, userFeatureKey } from './user.reducer';


const featureInfoSelector = createFeatureSelector<State>(userFeatureKey);
export const getInfo = createSelector( featureInfoSelector, state => state.userInfo );
