import { Injectable } from '@angular/core';
import { User } from '@interfaces/user';
import { Store } from '@ngrx/store';
import * as fromUser from '@store/user';

@Injectable({
  providedIn: 'root'
})
export class FacadeCreateUserService {

  constructor( private store: Store<fromUser.State> ) { }

  create( user: User ): void {
    this.store.dispatch( fromUser.createUser({ user }) );
  }

}

