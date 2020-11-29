import { createAction, props } from '@ngrx/store';
import { Album } from '@interfaces/album';

export const google = createAction( '[ API/Social-media ] Google Login' );

export const socialMediaSuccess = createAction( '[ API/Social-media ] Login Social Media Success', props<{ albums: Album[] }>() );
