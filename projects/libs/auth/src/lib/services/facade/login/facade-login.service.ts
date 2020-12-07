import { Injectable } from '@angular/core';
import { User } from '../../../interfaces/user.interface';
import { Store } from '@ngrx/store';
import * as UserAction from '../../../store/user/user.actions';
import * as fromUser from '../../../store/user/user.reducer';

@Injectable({
  providedIn: 'platform'
})
export class FacadeLoginService {

  constructor(
    private store: Store<fromUser.State>,
  ) { }

  login( user: User ): void {
    this.store.dispatch( UserAction.login({ user }) );
  }

  google(): void {
    this.store.dispatch( UserAction.loginGoogle() );
  }

}
