import { Injectable } from '@angular/core';
import { User } from '@interfaces/user';
import { Store } from '@ngrx/store';
import * as fromUserReducer from '@reducers/user';
import * as fromUserAction from '@actions/user';

@Injectable({
  providedIn: 'root'
})
export class FacadeLoginService {

  constructor( private store: Store<fromUserReducer.State> ) { }

  login( user: User ): void {
    this.store.dispatch( fromUserAction.login({ user }) );
  }

}
