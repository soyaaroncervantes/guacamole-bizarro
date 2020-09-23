import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'chat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  chats: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.chats = firestore.collection('chats').valueChanges();
  }
}
