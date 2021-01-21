import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, userFeatureKey } from './user.reducer';

const featureInfoSelector = createFeatureSelector<UserState>(userFeatureKey);
export const getInfo = createSelector(featureInfoSelector, (state) => state.userInfo);
