import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./front-desk/front-desk.module').then( m => m.FrontDeskModule) },
  { path: 'admin', loadChildren: () => import('./background/background.module').then(m => m.BackgroundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
