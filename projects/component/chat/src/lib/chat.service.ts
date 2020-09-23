import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Message } from '@interfaces/message';
import { map } from 'rxjs/operators';
import { DocumentReference } from '@angular/fire/firestore/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Message>;

  constructor(
    private angularFirestore: AngularFirestore
  ) { }

  get loadChats(): Observable<Message[]> {
    this.itemsCollection = this.angularFirestore.collection<Message>(
        'chats',
        ref => ref
          .orderBy('date', 'desc')
          .limit(10 )
      );

    return this.itemsCollection
      .valueChanges()
      .pipe(
        map( value => {
          const chats = [];
          for ( const message of value ) { chats.unshift( message ); }
          return chats;
        })
      );
  }

  add( text: string ): Observable<Promise<DocumentReference>> {
    // @ts-ignore
    const message: Message = {
      name: 'Dummy Name',
      message: text,
      date: new Date().getTime()
    };
    return of( this.itemsCollection.add( message ) );
  }

}
