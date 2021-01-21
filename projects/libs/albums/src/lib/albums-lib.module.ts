import { NgModule } from '@angular/core';

import { ApiAlbumsService } from './services/api/api-albums.service';
import { AlbumsFacadeService } from './services/facade/albums/albums-facade.service';

import { AlbumsStoreModule } from './store/albums-store.module';
import { AlbumsComponentModule } from './components/albums-component.module';

@NgModule({
  imports: [AlbumsStoreModule, AlbumsComponentModule],
  providers: [ApiAlbumsService, AlbumsFacadeService],
})
export class AlbumsLibModule {}
