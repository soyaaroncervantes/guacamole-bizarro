import { NgModule } from '@angular/core';
import { UserStoreModule } from './store/user-store.module';


import { CreateUserApiService } from './services/api/create-user/create-user-api.service';
import { SignInApiService } from './services/api/sign-in/sign-in-api.service';
import { SignOutApiService } from './services/api/sign-out/sign-out-api.service';
import { UserApiService } from './services/api/user/user-api.service';

@NgModule({
  imports: [
    UserStoreModule,
  ],
  providers: [
    CreateUserApiService,
    SignInApiService,
    SignOutApiService,
    UserApiService
  ]
})
export class AuthModule { }
