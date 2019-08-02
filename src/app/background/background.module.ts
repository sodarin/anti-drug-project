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
import { OnlineUserTableComponent } from './user/user-management/online-user-table/online-user-table.component';
import { LoginLogTableComponent } from './user/user-management/login-log-table/login-log-table.component';
import {CoreModule} from '../core/core.module';

import { TeacherTabComponent } from './user/user-teacher-management/teacher-tab/teacher-tab.component';
import { TeacherManagementTableComponent } from './user/user-teacher-management/teacher-management-table/teacher-management-table.component';
import { TeacherPromoteComponent } from './user/user-teacher-management/teacher-promote/teacher-promote.component';

import { BackCourseComponent } from './back-course/back-course.component';
import { OperationComponent } from './operation/operation.component';
import { AdminCourseManagementComponent } from './back-course/admin-course-management/admin-course-management.component';
import { GroupTopicManagementComponent } from './operation/group-topic-management/group-topic-management.component';
import { NewsManagementComponent } from './operation/news-management/news-management.component';
import { UserApprovalPageTabComponent } from './user/user-approval-management/user-approval-page-tab/user-approval-page-tab.component';
import { ApprovalPendingTableComponent } from './user/user-approval-management/approval-pending-table/approval-pending-table.component';
import { ApprovalSuccessTableComponent } from './user/user-approval-management/approval-success-table/approval-success-table.component';
<<<<<<< HEAD
import { OperationHeaderComponent } from './operation/operation-header/operation-header.component';
import { GroupTopicManagementTabComponent } from './operation/group-topic-management/group-topic-management-tab/group-topic-management-tab.component';
import { GroupTopicManagementTableComponent } from './operation/group-topic-management/group-topic-management-table/group-topic-management-table.component';
import { GroupTopicComponent } from './operation/group-topic-management/group-topic/group-topic.component';
=======
<<<<<<< HEAD
import { NewsTapComponent } from './operation/news-management/news-tap/news-tap.component';
import { NewsManagementTableComponent } from './operation/news-management/news-management-table/news-management-table.component';
import { ProgramaManagementTableComponent } from './operation/news-management/programa-management-table/programa-management-table.component';
import { OperationHeaderComponent } from './operation/operation-header/operation-header.component';
=======
import { AdminCourseHeaderComponent } from './back-course/admin-course-header/admin-course-header.component';
import { AdminCourseManagementTabComponent } from './back-course/admin-course-management/admin-course-management-tab/admin-course-management-tab.component';
import { AdminOpenClassManagementComponent } from './back-course/admin-open-class-management/admin-open-class-management.component';
import { AdminClassManagementComponent } from './back-course/admin-class-management/admin-class-management.component';
import { AdminTopicManagementComponent } from './back-course/admin-topic-management/admin-topic-management.component';
import { AdminCourseManagementTableComponent } from './back-course/admin-course-management/admin-course-management-table/admin-course-management-table.component';
import { AdminCourseRecommendationTableComponent } from './back-course/admin-course-management/admin-course-recommendation-table/admin-course-recommendation-table.component';
import { AdminCourseStatisticsTableComponent } from './back-course/admin-course-management/admin-course-statistics-table/admin-course-statistics-table.component';
>>>>>>> d32b6deb1493ac51cc3354b095a5092ce35c1b05

>>>>>>> e37f5ee7a4a62f949b882ab20793a5bb7ad639f9


@NgModule({
<<<<<<< HEAD
  declarations: [BackgroundComponent, HomePageComponent, UserComponent, UserHeaderComponent, UserTabComponent, UserManagementTableComponent, UserManagementComponent, UserStatisticsComponent, UserTeacherManagementComponent, UserApprovalManagementComponent, UserMessageManagementComponent, OnlineUserTableComponent, LoginLogTableComponent, BackCourseComponent, OperationComponent, AdminCourseManagementComponent, GroupTopicManagementComponent, NewsManagementComponent, UserApprovalPageTabComponent, ApprovalPendingTableComponent, ApprovalSuccessTableComponent, OperationHeaderComponent, GroupTopicManagementTabComponent, GroupTopicManagementTableComponent, GroupTopicComponent],
=======
<<<<<<< HEAD
  declarations: [BackgroundComponent, HomePageComponent, UserComponent, UserHeaderComponent, UserTabComponent, UserManagementTableComponent, UserManagementComponent, UserStatisticsComponent, UserTeacherManagementComponent, UserApprovalManagementComponent, UserMessageManagementComponent, OnlineUserTableComponent, LoginLogTableComponent, BackCourseComponent, OperationComponent, AdminCourseManagementComponent, GroupTopicManagementComponent, NewsManagementComponent, UserApprovalPageTabComponent, ApprovalPendingTableComponent, ApprovalSuccessTableComponent, NewsTapComponent, NewsManagementTableComponent, ProgramaManagementTableComponent, OperationHeaderComponent],
=======

  declarations: [BackgroundComponent, HomePageComponent, UserComponent, UserHeaderComponent, UserTabComponent, UserManagementTableComponent, UserManagementComponent, UserStatisticsComponent, UserTeacherManagementComponent, UserApprovalManagementComponent, UserMessageManagementComponent, OnlineUserTableComponent, LoginLogTableComponent, BackCourseComponent, OperationComponent, AdminCourseManagementComponent, GroupTopicManagementComponent, NewsManagementComponent, UserApprovalPageTabComponent, ApprovalPendingTableComponent, ApprovalSuccessTableComponent, AdminCourseHeaderComponent, AdminCourseManagementTabComponent, AdminOpenClassManagementComponent, AdminClassManagementComponent, AdminTopicManagementComponent, AdminCourseManagementTableComponent, AdminCourseRecommendationTableComponent, AdminCourseStatisticsTableComponent,TeacherManagementTableComponent,TeacherPromoteComponent,TeacherTabComponent],

>>>>>>> e37f5ee7a4a62f949b882ab20793a5bb7ad639f9
>>>>>>> d32b6deb1493ac51cc3354b095a5092ce35c1b05
  imports: [
    ShareModule,
    BackgroundRoutingModule,
    CoreModule
  ]
})
export class BackgroundModule { }
