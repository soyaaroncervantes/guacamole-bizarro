import { Injectable } from '@angular/core';
import { User } from '@interfaces/user';
import { Store } from '@ngrx/store';
import * as fromUserReducer from '@reducers/user';
import * as fromUserAction from '@actions/user';

@Injectable({
  providedIn: 'root'
})
export class FacadeCreateUserService {

  constructor( private store: Store<fromUserReducer.State> ) { }

  create( user: User ): void {
    console.log( '[FACADE] Create User', user );
    this.store.dispatch( fromUserAction.createUser({ user }) );
  }

}

