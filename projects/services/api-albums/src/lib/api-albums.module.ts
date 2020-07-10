import { NgModule } from '@angular/core';
import { ApiAlbumsService } from './api-albums.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  imports: [
    AngularFirestoreModule
  ],
  providers: [ ApiAlbumsService ],
  exports: [
    AngularFirestoreModule
  ]
})
export class ApiAlbumsModule { }
