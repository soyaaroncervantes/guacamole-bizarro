import { NgModule } from '@angular/core';
import { ButtonAccessComponent } from './button-access.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ButtonAccessComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    ButtonAccessComponent
  ]
})
export class ButtonAccessModule { }
