import { NgModule } from '@angular/core';
import {ShareModule} from '../share/share.module';
import { BackgroundComponent } from './background.component';
import { HomePageComponent } from './home-page/home-page.component';
import {BackgroundRoutingModule} from './background-routing.module';
import { UserComponent } from './user/user.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';
import { UserTabComponent } from './user/user-management/user-tab/user-tab.component';
import { UserManagementTableComponent } from './user/user-management/user-management-table/user-management-table.component';
import { UserManagementComponent } from './user/user-management/user-management.component';
import { UserStatisticsComponent } from './user/user-statistics/user-statistics.component';
import { UserTeacherManagementComponent } from './user/user-teacher-management/user-teacher-management.component';
import { UserApprovalManagementComponent } from './user/user-approval-management/user-approval-management.component';
import { UserMessageManagementComponent } from './user/user-message-management/user-message-management.component';



@NgModule({
  declarations: [BackgroundComponent, HomePageComponent, UserComponent, UserHeaderComponent, UserTabComponent, UserManagementTableComponent, UserManagementComponent, UserStatisticsComponent, UserTeacherManagementComponent, UserApprovalManagementComponent, UserMessageManagementComponent],
  imports: [
    ShareModule,
    BackgroundRoutingModule
  ]
})
export class BackgroundModule { }
