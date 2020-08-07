import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { AlbumsStoreModule } from '@store/album';
import { AlbumsFacadeService } from '@services/albums-facade';
import { CardModule } from '@component/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AlbumsComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    AlbumsStoreModule,
    CardModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AlbumsFacadeService
  ]
})
export class AlbumsModule { }
