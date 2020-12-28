import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserInfo } from '@firebase/auth-types';

import * as fromUser from '../../../store/user/user.selectors';
import * as UserActions from '../../../store/user/user.actions';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'platform'
})
export class UserFacadeService {

  constructor(
    private readonly store: Store
  ) { }

  get user$(): Observable<UserInfo> {
    return this.store.select( fromUser.getInfo );
  }

  user(): void {
    this.store.dispatch( UserActions.getUser() );
  }

}
