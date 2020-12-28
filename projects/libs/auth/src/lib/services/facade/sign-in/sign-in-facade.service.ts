import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as UserActions from '../../../store/user/user.actions';

@Injectable({
  providedIn: 'platform'
})
export class SignInFacadeService {

  constructor(
    private readonly store: Store
  ) { }

  google(): void {
    this.store.dispatch( UserActions.loginGoogle() );
  }

  twitter(): void {
    this.store.dispatch( UserActions.loginTwitter() );
  }

  facebook(): void { }

}
