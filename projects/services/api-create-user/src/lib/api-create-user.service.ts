import { Injectable } from '@angular/core';
import { User } from '@interfaces/user';
import { from, Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class ApiCreateUserService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  createUser( user: User ): Observable<UserCredential> {
    console.log('[API] Create User ', user);
    return from( this.angularFireAuth.createUserWithEmailAndPassword( user.email, user.password ) );
  }

}
