import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAlbums from '@store/album';
import { Observable } from 'rxjs';
import { Album } from '@interfaces/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsFacadeService {

  constructor(
    private store: Store<fromAlbums.State>,
  ) {}

  get albums$(): Observable<Album[]> {
    return this.store.select( 'albums' );
  }

  get(): void {
    this.store.dispatch( fromAlbums.getAlbums() );
  }

  delete( album: Album ): void {
    this.store.dispatch( fromAlbums.deleteAlbums( { album } ) );
  }

}