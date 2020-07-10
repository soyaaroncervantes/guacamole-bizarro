import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderModule } from '@component/header';
import { SidenavWebsiteModule } from '@component/sidenav-website';
import { ToolbarWebsiteModule } from '@component/toolbar-website';

import { WebsiteStoreModule } from '@store/website';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppFirebaseModule } from './app-firebase.module';

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
    WebsiteStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
