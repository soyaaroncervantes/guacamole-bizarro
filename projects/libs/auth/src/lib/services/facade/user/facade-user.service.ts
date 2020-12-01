import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromUser from '../../../store/user.selectors';
import * as UserActions from '../../../store/user.actions';
import { UserInfo } from '@firebase/auth-types';

@Injectable({
  providedIn: 'platform'
})
export class FacadeUserService {

  constructor(
    private store: Store,
  ) { }

  get info(): Observable<UserInfo> {
    return this.store.select( fromUser.getInfo );
  }

  dispatchLogout(): void {
    this.store.dispatch( UserActions.logout() );
  }

  dispatchUser(): void {
    this.store.dispatch( UserActions.getUser() );
  }
}
