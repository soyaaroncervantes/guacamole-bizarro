import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthStoreModule } from '@libs/auth';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    AuthStoreModule,
  ]
})
export class AppStoreModule { }
