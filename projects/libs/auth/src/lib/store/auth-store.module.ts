import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUser from './user/user.reducer';
import * as fromEffects from './user/user.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.userReducer),
    EffectsModule.forFeature([fromEffects.UserEffects]),
  ],
})
export class AuthStoreModule {}
