import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AlbumsEffects } from './albums.effects';
import { StoreModule } from '@ngrx/store';
import * as fromAlbums from './albums.reducer';



@NgModule({
  imports: [
    EffectsModule.forFeature([AlbumsEffects]),
    StoreModule.forFeature(fromAlbums.albumsFeatureKey, fromAlbums.reducer)
  ]
})
export class AlbumsStoreModule { }
