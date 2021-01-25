import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthLibModule } from '@libs/auth';
import { AlbumsLibModule } from '@libs/albums';

import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './store/app-store.module';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AppRoutingModule,
    AppStoreModule,
    AuthLibModule,
    AlbumsLibModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
