import { Injectable } from '@angular/core';
import { ApiAlbumsService } from '@services/api-albums';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromAlbums from './albums.actions';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class AlbumsEffects {

  constructor(
    private actions$: Actions,
    private apiAlbumsService: ApiAlbumsService
  ) { }

  getAlbums$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromAlbums.getAlbums ),
      mergeMap( () =>
        this.apiAlbumsService.albums
          .pipe(
            map( actions => actions.map( value => value.payload.doc.data() ) ),
            map( albums => fromAlbums.getAlbumsSuccess({ albums }) )
          )
      )
    )
  );

  addAlbum$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromAlbums.addAlbums ),
      mergeMap( ({ album }) =>
        this.apiAlbumsService.addAlbum( album )
          .pipe(
            map( actions => actions.map( value => value.payload.doc.data() ) ),
            map( albums => fromAlbums.getAlbumsSuccess({ albums }) )
          )
      )
    )
  );

  editAlbum$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromAlbums.editAlbums ),
      mergeMap( ({ album }) =>
        this.apiAlbumsService.editAlbum( album )
          .pipe(
            map( actions => actions.map( value => value.payload.doc.data() ) ),
            map( albums => fromAlbums.getAlbumsSuccess({ albums }) )
          )
      )
    )
  );

  deleteAlbum$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromAlbums.deleteAlbums ),
      mergeMap( ({ album }) =>
        this.apiAlbumsService.addAlbum( album )
          .pipe(
            map( actions => actions.map( value => value.payload.doc.data() ) ),
            map( albums => fromAlbums.getAlbumsSuccess({ albums }) )
          )
      )
    )
  );

}
