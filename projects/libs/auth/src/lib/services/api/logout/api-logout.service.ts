import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'platform'
})
export class ApiLogoutService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }


  get logout(): Observable<void> {
    return from( this.angularFireAuth.signOut() );
  }

}
