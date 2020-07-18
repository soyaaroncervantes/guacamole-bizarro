import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { HeaderModule } from '@component/header';
import { SidenavWebsiteModule } from '@component/sidenav-website';
import { ToolbarWebsiteModule } from '@component/toolbar-website';

import { WebsiteStoreModule } from '@store/website';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppFirebaseModule } from './app-firebase.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    AppFirebaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    SidenavWebsiteModule,
    ToolbarWebsiteModule,
    WebsiteStoreModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
