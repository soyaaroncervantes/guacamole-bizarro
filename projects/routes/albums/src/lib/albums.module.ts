import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { AlbumsStoreModule } from '@store/album';
import { AlbumsFacadeService } from '@services/albums-facade';
import { CardModule } from '@component/card';

@NgModule({
  declarations: [
    AlbumsComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    AlbumsStoreModule,
    CardModule
  ],
  providers: [
    AlbumsFacadeService
  ]
})
export class AlbumsModule { }
