import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { firebase } from './firebase.config';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  imports: [
    AngularFireModule.initializeApp( firebase ),
    AngularFireAuthModule,
    AngularFirestoreModule
  ]
})
export class FirebaseModule { }
