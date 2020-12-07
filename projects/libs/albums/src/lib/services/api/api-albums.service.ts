import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Album } from '../../interfaces/album.interface';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'platform'
})

export class ApiAlbumsService {
  private albumsCollection: AngularFirestoreCollection<Album>;

  constructor( private angularFirestore: AngularFirestore ) {
    this.albumsCollection = this.angularFirestore.collection<Album>('albums');
  }

  get albums$(): Observable<DocumentChangeAction< Album>[]> {
    return this.albumsCollection.stateChanges();
  }

  album$( id: string ): Observable<Album> {
    return this.albumsCollection.doc<Album>( id ).valueChanges();
  }

  addAlbum( album: Album ): Observable<Album> {

    const id = this.angularFirestore.createId();
    const item: Album = { ...album, id };

    from( this.albumsCollection.doc( id ).set( item ) );
    return this.album$( id );
  }

  editAlbum( album: Album ): Observable<Album> {
    from( this.albumsCollection.doc( album.id ).update({ ...album }) );
    return this.album$( album.id );

  }

  deleteAlbum( album: Album ): Observable<Album> {
    from( this.albumsCollection.doc( album.id ).delete() );
    return this.album$( album.id );
  }

}
