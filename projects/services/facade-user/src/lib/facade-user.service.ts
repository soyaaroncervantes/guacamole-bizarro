import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromUser from '@store/user';
import { UserInfo } from '@firebase/auth-types';

@Injectable({
  providedIn: 'root'
})
export class FacadeUserService {

  constructor(
    private store: Store,
  ) { }

  get info(): Observable<UserInfo> {
    return this.store.select( fromUser.getInfo );
  }

  dispatchLogout(): void {
    this.store.dispatch( fromUser.logout() );
  }

  dispatchUser(): void {
    this.store.dispatch( fromUser.getUser() );
  }
}
