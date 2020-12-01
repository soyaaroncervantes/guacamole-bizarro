import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as userInterface from '../../../interfaces/user.interface';
import { User } from 'firebase';

@Injectable({
  providedIn: 'platform'
})
export class ApiCreateUserService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  createUser( user: userInterface.User ): Observable<User> {
    this.angularFireAuth.createUserWithEmailAndPassword( user.email, user.password ).then()
    return this.angularFireAuth.authState;
  }

}
