import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Album } from '@interfaces/album';
import { from, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'any'
})
export class ApiAlbumsService {

  private albumsCollection: AngularFirestoreCollection<Album>;

  constructor( private angularFirestore: AngularFirestore ) {
    this.albumsCollection = this.angularFirestore.collection<Album>('albums');
  }

  get albums$(): Observable<DocumentChangeAction< Album>[]> {
    return this.albumsCollection.stateChanges();
  }

  addAlbum( album: Album ): Observable<DocumentChangeAction<Album>[]> {

    const id = this.angularFirestore.createId();
    const item: Album = { ...album, id };

    from( this.albumsCollection.doc( id ).set( item ) );
    return this.albums$;
  }

  editAlbum( album: Album ): Observable<DocumentChangeAction<Album>[]> {
    from( this.albumsCollection.doc( album.id ).update({ ...album }) );
    return this.albums$;
  }

  deleteAlbum( album: Album ): Observable<DocumentChangeAction<Album>[]> {
    from( this.albumsCollection.doc( album.id ).delete() );
    return this.albums$;
  }

}
