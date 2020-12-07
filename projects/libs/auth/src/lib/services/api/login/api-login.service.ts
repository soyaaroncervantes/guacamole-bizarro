import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { auth, User } from 'firebase/app';

import { from, Observable } from 'rxjs';

import * as userInterface from '../../../interfaces/user.interface';

@Injectable({
  providedIn: 'platform'
})
export class ApiLoginService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  loginUser( user: userInterface.User ): Observable<User> {
    this.angularFireAuth.signInWithEmailAndPassword( user.email, user.password ).then();
    return this.angularFireAuth.authState;
  }


  loginGoogle(): Observable<User> {
    this.angularFireAuth.signInWithPopup( new auth.GoogleAuthProvider() ).then();
    return this.angularFireAuth.authState;
  }

}
