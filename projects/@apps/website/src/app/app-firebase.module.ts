import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

@NgModule({
  imports: [ AngularFireModule.initializeApp( environment.firebase ) ],
  exports: [ AngularFireModule ]
})
export class AppFirebaseModule { }
