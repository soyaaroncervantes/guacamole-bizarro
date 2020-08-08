import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as userInterface from '@interfaces/user';
import { from, Observable } from 'rxjs';
import { UserCredential, User } from '@firebase/auth-types';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  constructor( private angularFireAuth: AngularFireAuth ) { }

  loginUser( user: userInterface.User ): Observable<UserCredential> {
    return from( this.angularFireAuth.signInWithEmailAndPassword( user.email, user.password ) );
  }

  logout(): Observable<void> {
    return from( this.angularFireAuth.signOut() );
  }

}
