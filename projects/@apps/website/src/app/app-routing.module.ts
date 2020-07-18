import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { websiteRoutes } from '@const/website';

const routes: Routes = [
  { path: websiteRoutes.parent, loadChildren: () => import( '@routes/home' ).then( m => m.HomeModule ) },
  { path: websiteRoutes.children.albums, loadChildren: () => import( '@routes/albums' ).then( m => m.AlbumsModule ) },
  { path: websiteRoutes.children.login, loadChildren: () => import( '@routes/login' ).then( m => m.LoginModule ) },
  { path: websiteRoutes.children.signin, loadChildren: () => import( '@routes/signin' ).then( m => m.SigninModule ) },
];

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
