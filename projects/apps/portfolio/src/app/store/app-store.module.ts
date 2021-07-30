import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';
import { metaReducers, appReducers } from './reducers';
import { StoreDevToolsConfig } from './store-devtools.config';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducers, { metaReducers }),
    EffectsModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument(StoreDevToolsConfig) : [],
  ],
})
export class AppStoreModule {}
