import { createFeatureSelector, createSelector } from '@ngrx/store';
import { albumsFeatureKey, State } from './albums.reducer';


const featureAlbumSelector = createFeatureSelector<State>(albumsFeatureKey);

export const getAlbumData = createSelector( featureAlbumSelector, state => state.album );
export const getAlbumsData = createSelector( featureAlbumSelector, state => state.albums );
