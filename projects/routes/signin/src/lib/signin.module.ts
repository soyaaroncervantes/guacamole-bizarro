import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninComponent } from './signin.component';
import { FacadeCreateUserService } from '@services/facade-create-user';
import { AccountFormModule } from '@component/account-form';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
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
    SigninRoutingModule
  ],
  providers: [
    FacadeCreateUserService
  ]
})
export class SigninModule { }
