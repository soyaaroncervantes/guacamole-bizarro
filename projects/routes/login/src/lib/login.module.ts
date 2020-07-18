import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { FacadeLoginService } from '@services/facade-login';

import { AccountFormModule } from '@component/account-form';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    AccountFormModule,
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [
    FacadeLoginService
  ]
})
export class LoginModule { }
