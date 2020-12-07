import { Injectable } from '@angular/core';
import { User } from '../../../interfaces/user.interface';
import { Store } from '@ngrx/store';
import * as fromUser from '../../../store/user/user.reducer';
import * as UserActions from '../../../store/user/user.actions';

@Injectable({
  providedIn: 'platform'
})
export class FacadeCreateUserService {

  constructor( private store: Store<fromUser.State> ) { }

  create( user: User ): void {
    this.store.dispatch( UserActions.createUser({ user }) );
  }

}

