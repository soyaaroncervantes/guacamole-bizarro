import { createFeatureSelector, createSelector } from '@ngrx/store';
import { albumsFeatureKey, AlbumsState } from './albums.reducer';

const featureAlbumSelector = createFeatureSelector<AlbumsState>(albumsFeatureKey);

export const getAlbumData = createSelector(featureAlbumSelector, (state) => state.album);
export const getAlbumsData = createSelector(featureAlbumSelector, (state) => state.albums);
