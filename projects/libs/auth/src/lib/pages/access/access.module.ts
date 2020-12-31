import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { AccessComponent } from './access.component';
import { AuthComponentModule } from '../../components/auth-component.module';


@NgModule({
  declarations: [
    AccessComponent
  ],
  imports: [
    AccessRoutingModule,
    AuthComponentModule,
    CommonModule,
  ]
})
export class AccessModule { }
