import { Injectable } from '@angular/core';

import { UserInfo } from '@firebase/auth-types';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromUser from '@store/user';

@Injectable({
  providedIn: 'root'
})
export class FacadeUserService {

  constructor(
    private store: Store<fromUser.State>,
  ) { }

  get user(): Observable<UserInfo> {
    return this.store.select( 'user' );
  }

  get(): void {
    this.store.dispatch( fromUser.getUser() );
  }
}
