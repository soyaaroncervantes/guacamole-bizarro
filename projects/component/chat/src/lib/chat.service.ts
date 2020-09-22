import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any[]>;

  constructor(
    private angularFirestore: AngularFirestore
  ) { }

  get loadChats(): Observable<any[]> {
    this.itemsCollection = this.angularFirestore.collection<any>('chats');
    return this.itemsCollection.valueChanges();
  }

}
