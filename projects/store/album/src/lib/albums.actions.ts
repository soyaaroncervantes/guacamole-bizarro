import { createAction, props } from '@ngrx/store';
import { Album } from '@interfaces/album';

export const getAlbums = createAction( '[ API/Albums ] Get Albums' );
export const addAlbums = createAction( '[ API/Albums ] Add Album', props<{ album: Album }>() );
export const deleteAlbums = createAction( '[ API/Albums ] Delete Album', props<{ album: Album }>() );
export const editAlbums = createAction( '[ API/Albums ] Edit Album', props<{ album: Album }>() );

export const getAlbumsSuccess = createAction( '[ API/Albums ] Get Albums Success', props<{ albums: Album[] }>() );
