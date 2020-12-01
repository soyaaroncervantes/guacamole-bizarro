import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AlbumsActions from '../../store/albums.actions';
import * as fromAlbums from '../../store/albums.reducer';

import { Album } from '../../interfaces/album.interface';

import { getAlbumsData } from '../../store/albums.selectors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'platform'
})
export class FacadeAlbumsService {

  constructor(
    private store: Store<fromAlbums.State>,
  ) {}

  get albums$(): Observable< Album[] > {
    return this.store.select( getAlbumsData );
  }

  dispatchAlbums(): void {
    this.store.dispatch( AlbumsActions.loadAlbums() );
  }

  delete( album: Album ): void {
    this.store.dispatch( AlbumsActions.deleteAlbums( { album } ) );
  }

}
