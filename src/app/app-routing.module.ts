import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./background/background.module').then(m => m.BackgroundModule) },
  { path: '', loadChildren: () => import('./front-desk/front-desk.module').then(m => m.FrontDeskModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
