import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { UserInterface } from '../../../interfaces/user.interface';

import { UserCredential } from '@firebase/auth-types';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'platform'
})
export class CreateUserApiService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  createUser$( user: UserInterface ): Observable<UserCredential> {
    return from( this.angularFireAuth.createUserWithEmailAndPassword( user.email, user.password ) );
  }

}
