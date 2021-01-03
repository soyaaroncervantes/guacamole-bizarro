import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'access', loadChildren: () => import('@libs/auth').then( m => m.AccessModule ) },
  { path: '', redirectTo: 'access', pathMatch: 'full' },
  { path: '**', redirectTo: 'access', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
