import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { RollingSvgModule } from '@component/rolling-svg';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    HomeRoutingModule,
    RollingSvgModule,
    MatButtonModule
  ]
})
export class HomeModule { }
