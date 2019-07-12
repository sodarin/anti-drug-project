import { NgModule } from '@angular/core';
import {ShareModule} from '../share/share.module';
import { BackgroundComponent } from './background.component';
import { HomePageComponent } from './home-page/home-page.component';
import {BackgroundRoutingModule} from './background-routing.module';
import { UserComponent } from './user/user.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';
import { UserTabComponent } from './user/user-tab/user-tab.component';
import { UserManagementTableComponent } from './user/user-management-table/user-management-table.component';



@NgModule({
  declarations: [BackgroundComponent, HomePageComponent, UserComponent, UserHeaderComponent, UserTabComponent, UserManagementTableComponent],
  imports: [
    ShareModule,
    BackgroundRoutingModule
  ]
})
export class BackgroundModule { }
