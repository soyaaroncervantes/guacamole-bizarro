import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AuthComponentModule } from '../../components/auth-component.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [AuthComponentModule, CommonModule, LoginRoutingModule],
  exports: [LoginComponent],
})
export class LoginModule {}
