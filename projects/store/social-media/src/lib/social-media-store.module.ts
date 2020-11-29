import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SocialMediaEffects } from './social-media.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature( [ SocialMediaEffects ] )
  ],
  exports: [
    StoreModule,
    EffectsModule
  ]
})
export class SocialMediaStoreModule { }
