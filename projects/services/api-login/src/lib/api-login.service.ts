import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '@interfaces/user';
import { from, Observable } from 'rxjs';
import { UserCredential } from '@firebase/auth-types';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  constructor( private angularFireAuth: AngularFireAuth ) { }

  loginUser( user: User ): Observable<UserCredential> {
    return from( this.angularFireAuth.signInWithEmailAndPassword( user.email, user.password ) );
  }

}
