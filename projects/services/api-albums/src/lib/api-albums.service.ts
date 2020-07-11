import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Album } from '@interfaces/album';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'any'
})
export class ApiAlbumsService {

  private albumsCollection: AngularFirestoreCollection<Album>;

  constructor( private angularFirestore: AngularFirestore ) {
    this.albumsCollection = this.angularFirestore.collection<Album>('albums');
  }

  get albums(): Observable<DocumentChangeAction<Album>[]>{
    return this.albumsCollection.stateChanges();
  }

  addAlbum( album: Album ): Observable<Album> {
    const id = this.angularFirestore.createId();
    const item: Album = { ...album, id };
    this.albumsCollection.doc( id ).set( item ).then();
    return of( item );
  }

  editAlbum( album: Album ): Observable<Album> {
    this.albumsCollection.doc( album.id ).update({ ...album }).then();
    return of( album );
  }

  deleteAlbum( album: Album ): Observable<Album> {
    this.albumsCollection.doc( album.id ).delete().then();
    return of( album );
  }

}
