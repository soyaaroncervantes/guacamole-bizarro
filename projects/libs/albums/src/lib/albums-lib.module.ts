import { NgModule } from '@angular/core';
import { AlbumsStoreModule } from './store/albums-store.module';
import { ApiAlbumsService } from './services/api/api-albums.service';
import { FacadeAlbumsService } from './services/facade/facade-albums.service';

@NgModule({
  imports: [ AlbumsStoreModule ],
  providers: [
    ApiAlbumsService,
    FacadeAlbumsService,
  ]
})
export class AlbumsLibModule { }
