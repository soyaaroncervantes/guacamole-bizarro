import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';



@NgModule({
  imports: [ StoreModule.forFeature( 'albums', {} ) ],
  exports: [ StoreModule ]
})
export class AlbumsStoreModule { }
