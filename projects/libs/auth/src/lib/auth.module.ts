import { NgModule } from '@angular/core';

import { AuthStoreModule } from './store/auth-store.module';
import { AuthComponentModule } from './components/auth-component.module';

import { CreateUserApiService } from './services/api/create-user/create-user-api.service';
import { SignInApiService } from './services/api/sign-in/sign-in-api.service';
import { SignOutApiService } from './services/api/sign-out/sign-out-api.service';
import { UserApiService } from './services/api/user/user-api.service';
import { SignInFacadeService } from './services/facade/sign-in/sign-in-facade.service';
import { CreateUserFacadeService } from './services/facade/create-user/create-user-facade.service';
import { SignOutFacadeService } from './services/facade/sign-out/sign-out-facade.service';
import { UserFacadeService } from './services/facade/user/user-facade.service';

@NgModule({
  imports: [
    AuthStoreModule,
    AuthComponentModule,
  ],
  providers: [
    CreateUserApiService,
    CreateUserFacadeService,
    SignInApiService,
    SignInFacadeService,
    SignOutApiService,
    SignOutFacadeService,
    UserApiService,
    UserFacadeService,
  ],
  exports: [
    AuthStoreModule,
    AuthComponentModule
  ]
})
export class AuthModule { }
