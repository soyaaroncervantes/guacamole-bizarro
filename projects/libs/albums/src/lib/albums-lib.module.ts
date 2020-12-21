import { NgModule } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiAlbumsService } from './services/api/api-albums.service';
import { AlbumsFacadeService } from './services/facade/albums/albums-facade.service';
import { NotificationsFacadeService } from './services/facade/notifications/notifications-facade.service';

import { AlbumsStoreModule } from './store/albums-store.module';

@NgModule({
  imports: [
    AlbumsStoreModule
  ],
  providers: [
    ApiAlbumsService,
    AlbumsFacadeService,
    NotificationsFacadeService,
    MatSnackBar,
  ]
})
export class AlbumsLibModule { }
