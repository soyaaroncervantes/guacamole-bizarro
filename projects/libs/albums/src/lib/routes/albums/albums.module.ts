import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

import { CardModule } from '@component/card';

import { AlbumsStoreModule } from '../../store/albums-store.module';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
@NgModule({
  declarations: [
    AlbumsComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    AlbumsStoreModule,
    CardModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ]
})
export class AlbumsModule { }
