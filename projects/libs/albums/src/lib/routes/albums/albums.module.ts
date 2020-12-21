import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

import { AlbumsComponentModule } from '../../components/albums-component.module';
import { AlbumsRoutingModule } from './albums-routing.module';

import { AlbumsComponent } from './albums.component';

@NgModule({
  declarations: [
    AlbumsComponent
  ],
  imports: [
    AlbumsComponentModule,
    AlbumsRoutingModule,
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ]
})
export class AlbumsModule { }
