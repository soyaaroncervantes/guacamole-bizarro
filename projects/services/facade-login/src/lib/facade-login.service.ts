import { Injectable } from '@angular/core';
import { User } from '@interfaces/user';
import { Store } from '@ngrx/store';
import * as fromUser from '@store/user';
import { ApiLoginService } from '@services/api-login';

@Injectable({
  providedIn: 'root'
})
export class FacadeLoginService {

  constructor(
    private apiLoginService: ApiLoginService,
    private store: Store<fromUser.State>,
  ) { }

  login( user: User ): void {
    this.store.dispatch( fromUser.login({ user }) );
  }

  google(): void {

  }

}
