import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleButtonComponent } from './button/google/google-button.component';
import { TwitterButtonComponent } from './button/twitter/twitter-button.component';
import { FacebookButtonComponent } from './button/facebook/facebook-button.component';



@NgModule({
  declarations: [
    GoogleButtonComponent,
    TwitterButtonComponent,
    FacebookButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GoogleButtonComponent,
    TwitterButtonComponent,
    FacebookButtonComponent
  ]
})
export class AuthComponentModule { }
