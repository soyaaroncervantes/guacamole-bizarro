import { Injectable } from '@angular/core';
import { User } from '@interfaces/user';
import { Store } from '@ngrx/store';
import * as fromUser from '@store/user';

@Injectable({
  providedIn: 'root'
})
export class FacadeLoginService {

  constructor( private store: Store<fromUser.State> ) { }

  login( user: User ): void {
    this.store.dispatch( fromUser.login({ user }) );
  }

}
