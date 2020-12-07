import { NgModule } from '@angular/core';
import { UserStoreModule } from './store/user-store.module';

import { FacadeCreateUserService } from './services/facade/create-user/facade-create-user.service';
import { FacadeUserService } from './services/facade/user/facade-user.service';
import { FacadeLoginService } from './services/facade/login/facade-login.service';
import { FacadeLogoutService } from './services/facade/logout/facade-logout.service';

import { ApiLoginService } from './services/api/login/api-login.service';
import { ApiCreateUserService } from './services/api/create-user/api-create-user.service';
import { ApiLogoutService } from './services/api/logout/api-logout.service';

@NgModule({
  imports: [
    UserStoreModule,
  ],
  providers: [
    ApiCreateUserService,
    ApiLoginService,
    ApiLogoutService,
    FacadeCreateUserService,
    FacadeLoginService,
    FacadeLogoutService,
    FacadeUserService
  ]
})
export class AuthModule { }
