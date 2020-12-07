import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AlbumsActions from '../../store/albums.actions';
import * as fromAlbums from '../../store/albums.reducer';

import { Album } from '../../interfaces/album.interface';

import { getAlbumData, getAlbumsData } from '../../store/albums.selectors';
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

  get album$(): Observable<Album> {
    return this.store.select( getAlbumData );
  }

  dispatchAlbums(): void {
    this.store.dispatch( AlbumsActions.loadAlbums() );
  }

  dispatchAlbum( album: Album ): void {
    this.store.dispatch( AlbumsActions.loadAlbum({ album }) );
  }

  delete( album: Album ): void {
    this.store.dispatch( AlbumsActions.deleteAlbum( { album } ) );
  }

}
