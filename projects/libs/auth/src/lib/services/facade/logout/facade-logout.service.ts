import { Injectable } from '@angular/core';
import * as UserActions from '../../../store/user/user.actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'platform'
})
export class FacadeLogoutService {

  constructor(
    private store: Store
  ) { }


  dispatchLogout(): void {
    this.store.dispatch( UserActions.logout() );
  }

}
