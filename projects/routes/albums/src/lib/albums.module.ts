import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { AlbumsStoreModule } from '@store/album';
import { CardModule } from '@component/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FacadeAlbumsModule } from '@services/facade-albums';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AlbumsComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    AlbumsStoreModule,
    CardModule,
    FacadeAlbumsModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ]
})
export class AlbumsModule { }
