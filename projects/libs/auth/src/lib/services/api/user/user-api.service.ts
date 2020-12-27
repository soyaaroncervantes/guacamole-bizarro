import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from 'firebase/app';

@Injectable({
  providedIn: 'platform'
})
export class UserApiService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  get user$(): Observable<User> {
    return this.angularFireAuth.authState;
  }

}
