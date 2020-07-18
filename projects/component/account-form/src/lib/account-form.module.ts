import { NgModule } from '@angular/core';
import { AccountFormComponent } from './account-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccountFormComponent
  ],
  imports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    AccountFormComponent
  ]
})
export class AccountFormModule { }
