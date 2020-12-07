import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';

import * as AlbumsActions from './albums.actions';

import { ApiAlbumsService } from '../services/api/api-albums.service';
import { EMPTY, of } from 'rxjs';

@Injectable()
export class AlbumsEffects {

  getAlbums$ = createEffect( () =>
    this.actions$.pipe(
      ofType( AlbumsActions.loadAlbums ),
      concatMap( () =>
        this.apiAlbumsService.albums$
          .pipe(
            map( actions => actions.map( value => value.payload.doc.data() ) ),
            map( albums => AlbumsActions.loadAlbumsSuccess({ albums }) ),
            catchError(error => of(AlbumsActions.loadAlbumsFailure({ error })))
          )
      )
    )
  );

  getAlbum$ = createEffect( () =>
    this.actions$.pipe(
      ofType( AlbumsActions.loadAlbum ),
      concatMap( ({ album }) =>
        EMPTY
          .pipe(
            map( () => AlbumsActions.loadAlbumSuccess({ album }) ),
            catchError(error => of(AlbumsActions.loadAlbumFailure({ error })))
          )
      )
    )
  );

  addAlbum$ = createEffect( () =>
    this.actions$.pipe(
      ofType( AlbumsActions.addAlbum ),
      concatMap( ({ album }) =>
        this.apiAlbumsService.addAlbum( album )
          .pipe(
            map( value => AlbumsActions.addAlbumSuccess({ album: value }) ),
            catchError(error => of( AlbumsActions.loadAlbumsFailure({ error })))
          )
      )
    )
  );

  editAlbum$ = createEffect( () =>
    this.actions$.pipe(
      ofType( AlbumsActions.editAlbum ),
      concatMap( ({ album }) =>
        this.apiAlbumsService.editAlbum( album )
          .pipe(
            map( value => AlbumsActions.editAlbumSuccess({ album: value }) ),
            catchError(error => of(AlbumsActions.loadAlbumsFailure({ error })))
          )
      )
    )
  );

  deleteAlbum$ = createEffect( () =>
    this.actions$.pipe(
      ofType( AlbumsActions.deleteAlbum ),
      concatMap( ({ album }) =>
        this.apiAlbumsService.deleteAlbum( album )
          .pipe(
            map( value => AlbumsActions.deleteAlbumSuccess({ album: value }) ),
            catchError(error => of(AlbumsActions.loadAlbumsFailure({ error })))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private apiAlbumsService: ApiAlbumsService
  ) { }

}
