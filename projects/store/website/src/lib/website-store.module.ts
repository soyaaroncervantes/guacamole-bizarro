import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUser from '@reducers/user';
import * as fromEffects from '@effects/user';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    StoreModule.forFeature( fromUser.userFeatureKey, fromUser.reducer ),
    EffectsModule.forRoot( [] ),
    EffectsModule.forFeature([ fromEffects.UserEffects ])
  ],
  exports: [
    StoreModule,
    EffectsModule
  ]
})
export class WebsiteStoreModule { }
