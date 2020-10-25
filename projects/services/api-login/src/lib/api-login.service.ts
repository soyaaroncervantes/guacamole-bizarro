import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { auth, User } from 'firebase/app';

import { UserCredential } from '@firebase/auth-types';

import { from, Observable } from 'rxjs';

import * as userInterface from '@interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  constructor( private angularFireAuth: AngularFireAuth ) {
    this.angularFireAuth.signOut();
    this.angularFireAuth.authState.subscribe( value => console.log( 'api service', value ) );
  }

  loginUser( user: userInterface.User ): Observable<User> {
    this.angularFireAuth.signInWithEmailAndPassword( user.email, user.password ).then();
    return this.angularFireAuth.authState;
  }

  logout(): Observable<void> {
    return from( this.angularFireAuth.signOut() );
  }

  loginGoogle(): Observable<User> {
    this.angularFireAuth.signInWithPopup( new auth.GoogleAuthProvider() ).then();
    return this.angularFireAuth.authState;
  }

}
