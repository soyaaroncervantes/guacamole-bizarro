import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { UserStoreModule } from '@store/user';

import { FacadeCreateUserService } from '@services/facade-create-user';

import { AccountFormModule } from '@component/account-form';

import { SigninComponent } from './signin.component';
import { SigninRoutingModule } from './signin-routing.module';


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    AccountFormModule,
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    SigninRoutingModule,
    UserStoreModule
  ],
  providers: [
    FacadeCreateUserService
  ]
})
export class SigninModule { }
