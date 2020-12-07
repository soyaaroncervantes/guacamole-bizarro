import { createReducer, on } from '@ngrx/store';
import { Album } from '../interfaces/album.interface';
import * as albumsAction from './albums.actions';


export const albumsFeatureKey = 'albums';

export interface State {
  album: Album;
  albums: Album[];
}

export const initialState: State = {
  album: null,
  albums: null
};


export const reducer = createReducer(
  initialState,
  on( albumsAction.loadAlbumsSuccess, ( state, { albums } ) => ({
    ...state,
    albums: [ ...albums ]
  }) ),
  on( albumsAction.loadAlbumSuccess, ( state, { album } )  => ({
    ...state,
    album: state.albums.find( value => value.id === album.id )
  })),
  on( albumsAction.addAlbumSuccess, ( state, { album } ) => ({
    ...state,
    albums: [ ...state.albums, album ],
    album
  }) ),
  on( albumsAction.editAlbumSuccess, ( state, { album }) => ({
    ...state,
    albums: state.albums.map( value => value.id === album.id ? { ...album } : value ),
    album
  }) ),
  on( albumsAction.editAlbumSuccess, ( state, { album }) => ({
    ...state,
    albums: state.albums.filter( value => value.id !== album.id ),
    album: null
  }) ),
);

