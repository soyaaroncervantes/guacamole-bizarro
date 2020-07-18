import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  imports: [
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFireAuthModule
  ],
  exports: [
    AngularFireModule,
    AngularFireAuthModule
  ]
})
export class AppFirebaseModule { }
