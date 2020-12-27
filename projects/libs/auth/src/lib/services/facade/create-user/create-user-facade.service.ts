import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserInterface } from '../../../interfaces/user.interface';
import * as UserActions from '../../../store/user/user.actions';

@Injectable({
  providedIn: 'root'
})
export class CreateUserFacadeService {

  constructor(
    private readonly store: Store
  ) { }

  create( value: UserInterface ): void {
    const user: UserInterface = { email: value.email, password: value.password };
    this.store.dispatch( UserActions.createUser({ user }) );
  }
}
