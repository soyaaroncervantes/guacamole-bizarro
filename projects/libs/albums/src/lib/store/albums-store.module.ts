import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AlbumsEffects } from './albums.effects';
import * as fromAlbums from './albums.reducer';

@NgModule({
  imports: [
    EffectsModule.forFeature([AlbumsEffects]),
    StoreModule.forFeature(fromAlbums.albumsFeatureKey, fromAlbums.albumsReducer),
  ],
})
export class AlbumsStoreModule {}
