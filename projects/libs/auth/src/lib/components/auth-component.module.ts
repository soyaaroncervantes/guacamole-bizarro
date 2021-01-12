import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { GoogleButtonComponent } from './button/google/google-button.component';
import { TwitterButtonComponent } from './button/twitter/twitter-button.component';
import { FacebookButtonComponent } from './button/facebook/facebook-button.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    GoogleButtonComponent,
    TwitterButtonComponent,
    FacebookButtonComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    GoogleButtonComponent,
    TwitterButtonComponent,
    FacebookButtonComponent,
    FormComponent
  ]
})
export class AuthComponentModule { }
