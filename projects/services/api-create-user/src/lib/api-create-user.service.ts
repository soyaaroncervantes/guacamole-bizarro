import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as userInterface from '@interfaces/user';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
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
