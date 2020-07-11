import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AlbumsEffects } from './albums.effects';
import * as fromAlbums from './albums.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature( fromAlbums.albumsFeatureKey, fromAlbums.reducer ),
    EffectsModule.forFeature( [ AlbumsEffects ] )
  ],
  exports: [
    StoreModule,
    EffectsModule
  ]
})
export class AlbumsStoreModule { }
