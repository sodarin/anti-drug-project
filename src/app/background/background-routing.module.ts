import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {BackgroundComponent} from './background.component';
import {UserComponent} from './user/user.component';


const routes: Routes = [
  { path: '', component: BackgroundComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'user', component: UserComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackgroundRoutingModule { }
