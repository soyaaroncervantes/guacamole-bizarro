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
import { environment } from '../environments/environment';
import { UserStoreModule } from '@store/user';
import { FirebaseModule } from '@config/firebase';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    FirebaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    SidenavWebsiteModule,
    ToolbarWebsiteModule,
    WebsiteStoreModule,
    UserStoreModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
