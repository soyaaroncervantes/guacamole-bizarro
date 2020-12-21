import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { AlbumsComponentModule } from '../../components/albums-component.module';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    AlbumsComponentModule,
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
  ]
})
export class HomeModule { }
