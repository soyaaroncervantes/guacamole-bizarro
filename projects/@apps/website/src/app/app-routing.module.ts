import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { websiteRoutes } from '@const/website';

const routes: Routes = [
  { path: websiteRoutes.parent, loadChildren: () => import( '@routes/home' ).then( m => m.HomeModule ) },
  { path: websiteRoutes.children.albums, loadChildren: () => import( '@routes/albums' ).then( m => m.AlbumsModule ) },
];

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
