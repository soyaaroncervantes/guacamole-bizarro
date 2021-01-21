import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import * as AlbumsActions from '../../../store/albums.actions';

import { Album } from '../../../interfaces/album.interface';
import { AlbumsState } from '../../../store/albums.reducer';
import { getAlbumData, getAlbumsData } from '../../../store/albums.selectors';

@Injectable({
  providedIn: 'platform',
})
export class AlbumsFacadeService {
  constructor(private store: Store<AlbumsState>) {}

  get albums$(): Observable<Album[]> {
    return this.store.select(getAlbumsData);
  }

  get album$(): Observable<Album> {
    return this.store.select(getAlbumData);
  }

  loadAlbums(): void {
    this.store.dispatch(AlbumsActions.loadAlbums());
  }

  loadAlbum(album: Album): void {
    this.store.dispatch(AlbumsActions.loadAlbum({ album }));
  }

  deleteAlbum(album: Album): void {
    this.store.dispatch(AlbumsActions.deleteAlbum({ album }));
  }
}
