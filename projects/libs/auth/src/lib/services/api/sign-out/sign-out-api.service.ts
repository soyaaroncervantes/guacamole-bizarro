import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'platform'
})
export class SignOutApiService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  get signOut$(): Observable<void> {
    return from( this.angularFireAuth.signOut() );
  }
}
