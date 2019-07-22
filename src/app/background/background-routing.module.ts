import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {BackgroundComponent} from './background.component';
import {UserComponent} from './user/user.component';
import {UserManagementComponent} from './user/user-management/user-management.component';
import {UserStatisticsComponent} from './user/user-statistics/user-statistics.component';
import {UserTeacherManagementComponent} from './user/user-teacher-management/user-teacher-management.component';
import {UserApprovalManagementComponent} from './user/user-approval-management/user-approval-management.component';
import {UserMessageManagementComponent} from './user/user-message-management/user-message-management.component';
import {BackCourseComponent} from './back-course/back-course.component';
import {AdminCourseManagementComponent} from './back-course/admin-course-management/admin-course-management.component';
import {OperationComponent} from './operation/operation.component';
import {NewsManagementComponent} from './operation/news-management/news-management.component';


const routes: Routes = [
  { path: '', component: BackgroundComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'user', component: UserComponent, children: [
          { path: '', component: UserManagementComponent },
          { path: 'statistics', component: UserStatisticsComponent },
          { path: 'teacher', component: UserTeacherManagementComponent },
          { path: 'approval', component: UserApprovalManagementComponent},
          { path: 'message', component: UserMessageManagementComponent }
        ] },
      { path: 'course', component: BackCourseComponent, children: [
          { path: '', component: AdminCourseManagementComponent}
        ] },
      { path: 'operation', component: OperationComponent, children: [
          { path: '', redirectTo: '/admin/operation/news', pathMatch: 'full' },
          { path: 'news', component: NewsManagementComponent }
        ] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackgroundRoutingModule { }
