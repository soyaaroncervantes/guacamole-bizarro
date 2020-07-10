import { Injectable } from '@angular/core';
import { ApiAlbumsService } from '@services/api-albums';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromAlbums from './albums.actions';
import { map, mergeMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumsEffects {

  constructor(
    private actions$: Actions,
    private apiAlbumsService: ApiAlbumsService
  ) { }

  getAlbums$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromAlbums.getAlbums ),
      mergeMap( x2 =>
        this.apiAlbumsService.getAlbums()
          .pipe(
            tap( x1 => console.log( 'Effects', x1 ) ),
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
            map( () => fromAlbums.addAlbumsSuccess({ album }) )
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
            map( () => fromAlbums.editAlbumsSuccess({ album }) )
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
            map( () => fromAlbums.addAlbumsSuccess({ album }) )
          )
      )
    )
  );

}
