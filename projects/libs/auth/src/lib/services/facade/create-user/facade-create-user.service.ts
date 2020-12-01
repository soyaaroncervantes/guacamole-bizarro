import { Injectable } from '@angular/core';
import { User } from '../../../interfaces/user.interface';
import { Store } from '@ngrx/store';
import * as fromUser from '@store/user';

@Injectable({
  providedIn: 'platform'
})
export class FacadeCreateUserService {

  constructor( private store: Store<fromUser.State> ) { }

  create( user: User ): void {
    this.store.dispatch( fromUser.createUser({ user }) );
  }

}

