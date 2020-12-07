import { Injectable } from '@angular/core';

import { UserInfo } from '@firebase/auth-types';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromUser from '../../../store/user/user.selectors';
import * as UserActions from '../../../store/user/user.actions';

@Injectable({
  providedIn: 'platform'
})
export class FacadeUserService {

  constructor(
    private store: Store,
  ) { }

  get info$(): Observable<UserInfo> {
    return this.store.select( fromUser.getInfo );
  }

  dispatchUser(): void {
    this.store.dispatch( UserActions.getUser() );
  }
}
