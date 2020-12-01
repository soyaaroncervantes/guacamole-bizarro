import { createAction, props } from '@ngrx/store';
import { Album } from '@interfaces/album';

export const addAlbum = createAction( '[ API/Albums ] Add Album', props<{ album: Album }>() );
export const addAlbumSuccess = createAction( '[ Api/Albums ] Load Albums Success', props<{ album: Album }>() );

export const editAlbum = createAction( '[ API/Albums ] Edit Album', props<{ album: Album }>() );
export const editAlbumSuccess = createAction( '[ Api/Albums ] Load Albums Success', props<{ album: Album }>() );

export const deleteAlbum = createAction( '[ API/Albums ] Delete Album', props<{ album: Album }>() );
export const deleteAlbumSuccess = createAction( '[ Api/Albums ] Load Albums Success', props<{ album: Album }>() );

export const loadAlbumFailure = createAction( '[ Api/Albums ] Load Albums Success', props<{ error: any }>() );

export const loadAlbums = createAction( '[ Api/Albums ] Load Albums' );
export const loadAlbumsSuccess = createAction( '[ Api/Albums ] Load Albums Success', props<{ albums: Album[] }>() );
export const loadAlbumsFailure = createAction( '[ Api/Albums ] Load Albums Failure', props<{ error: any }>() );
