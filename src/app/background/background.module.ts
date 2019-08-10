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

import { OperationHeaderComponent } from './operation/operation-header/operation-header.component';
import { GroupTopicManagementTabComponent } from './operation/group-topic-management/group-topic-management-tab/group-topic-management-tab.component';
import { GroupTopicManagementTableComponent } from './operation/group-topic-management/group-topic-management-table/group-topic-management-table.component';
import { GroupTopicComponent } from './operation/group-topic-management/group-topic/group-topic.component';

import { NewsTapComponent } from './operation/news-management/news-tap/news-tap.component';
import { NewsManagementTableComponent } from './operation/news-management/news-management-table/news-management-table.component';
import { ProgramaManagementTableComponent } from './operation/news-management/programa-management-table/programa-management-table.component';

import { AdminCourseHeaderComponent } from './back-course/admin-course-header/admin-course-header.component';
import { AdminCourseManagementTabComponent } from './back-course/admin-course-management/admin-course-management-tab/admin-course-management-tab.component';
import { AdminOpenClassManagementComponent } from './back-course/admin-open-class-management/admin-open-class-management.component';
import { AdminClassManagementComponent } from './back-course/admin-class-management/admin-class-management.component';
import { AdminTopicManagementComponent } from './back-course/admin-topic-management/admin-topic-management.component';
import { AdminCourseManagementTableComponent } from './back-course/admin-course-management/admin-course-management-table/admin-course-management-table.component';
import { AdminCourseRecommendationTableComponent } from './back-course/admin-course-management/admin-course-recommendation-table/admin-course-recommendation-table.component';
import { AdminCourseStatisticsTableComponent } from './back-course/admin-course-management/admin-course-statistics-table/admin-course-statistics-table.component';
<<<<<<< HEAD
import { AdminClassManagementTabComponent } from './back-course/admin-class-management/admin-class-management-tab/admin-class-management-tab.component';
import { AdminClassManagementTableComponent } from './back-course/admin-class-management/admin-class-management-table/admin-class-management-table.component';
import { AdminClassRecommendationTableComponent } from './back-course/admin-class-management/admin-class-recommendation-table/admin-class-recommendation-table.component';
import { WebsitesAnnouncementManagementComponent } from './operation/websites-announcement-management/websites-announcement-management.component';
import { NoticeManagementComponent } from './operation/notice-management/notice-management.component';
=======
<<<<<<< HEAD
import { AdminTopicCourseTableComponent } from './back-course/admin-topic-management/admin-topic-course-table/admin-topic-course-table.component';
import { AdminTopicClassTableComponent } from './back-course/admin-topic-management/admin-topic-class-table/admin-topic-class-table.component';
import { AdminTopicManagementTabComponent } from './back-course/admin-topic-management/admin-topic-management-tab/admin-topic-management-tab.component';

=======
import { AdminReplyManagementComponent } from './back-course/admin-reply-management/admin-reply-management.component';
import { AdminReplyManagementTabComponent } from './back-course/admin-reply-management/admin-reply-management-tab/admin-reply-management-tab.component';
import { AdminReplyManagementTableComponent } from './back-course/admin-reply-management/admin-reply-management-table/admin-reply-management-table.component';
import { AdminReplyAllTableComponent } from './back-course/admin-reply-management/admin-reply-all-table/admin-reply-all-table.component';
>>>>>>> bcda7f29a21c565b5725e8e44e3a22ae395814f6


>>>>>>> 40718c6e53fc0044a98716b2af4591c9b52528e2

@NgModule({
  declarations: [BackgroundComponent,
    HomePageComponent,
    UserComponent,
    UserHeaderComponent,
    UserTabComponent,
    UserManagementTableComponent,
    UserManagementComponent,
    UserStatisticsComponent,
    UserTeacherManagementComponent,
    UserApprovalManagementComponent,
    UserMessageManagementComponent,
    OnlineUserTableComponent,
    LoginLogTableComponent,
    BackCourseComponent,
    OperationHeaderComponent,
    GroupTopicManagementTabComponent,
    GroupTopicManagementTableComponent,
    GroupTopicComponent,
    NewsTapComponent,
    NewsManagementTableComponent,
    ProgramaManagementTableComponent,
<<<<<<< HEAD
    OperationComponent, AdminCourseManagementComponent, GroupTopicManagementComponent, NewsManagementComponent, UserApprovalPageTabComponent, ApprovalPendingTableComponent, ApprovalSuccessTableComponent, AdminCourseHeaderComponent, AdminCourseManagementTabComponent, AdminOpenClassManagementComponent, AdminClassManagementComponent, AdminTopicManagementComponent, AdminCourseManagementTableComponent, AdminCourseRecommendationTableComponent, AdminCourseStatisticsTableComponent, TeacherManagementTableComponent, TeacherPromoteComponent, TeacherTabComponent, AdminClassManagementTabComponent, AdminClassManagementTableComponent, AdminClassRecommendationTableComponent, WebsitesAnnouncementManagementComponent, NoticeManagementComponent],
=======
<<<<<<< HEAD
    OperationComponent, AdminCourseManagementComponent, GroupTopicManagementComponent, NewsManagementComponent, UserApprovalPageTabComponent, ApprovalPendingTableComponent, ApprovalSuccessTableComponent, AdminCourseHeaderComponent, AdminCourseManagementTabComponent, AdminOpenClassManagementComponent, AdminClassManagementComponent, AdminTopicManagementComponent, AdminCourseManagementTableComponent, AdminCourseRecommendationTableComponent, AdminCourseStatisticsTableComponent,TeacherManagementTableComponent,TeacherPromoteComponent,TeacherTabComponent,  AdminTopicCourseTableComponent, AdminTopicClassTableComponent, AdminTopicManagementTabComponent, ],
=======
    OperationComponent, AdminCourseManagementComponent, GroupTopicManagementComponent, NewsManagementComponent, UserApprovalPageTabComponent, ApprovalPendingTableComponent, ApprovalSuccessTableComponent, AdminCourseHeaderComponent, AdminCourseManagementTabComponent, AdminOpenClassManagementComponent, AdminClassManagementComponent, AdminTopicManagementComponent, AdminCourseManagementTableComponent, AdminCourseRecommendationTableComponent, AdminCourseStatisticsTableComponent,TeacherManagementTableComponent,TeacherPromoteComponent,TeacherTabComponent, AdminReplyManagementComponent, AdminReplyManagementTabComponent, AdminReplyManagementTableComponent, AdminReplyAllTableComponent],
>>>>>>> bcda7f29a21c565b5725e8e44e3a22ae395814f6
>>>>>>> 40718c6e53fc0044a98716b2af4591c9b52528e2

  imports: [
    ShareModule,
    BackgroundRoutingModule,
    CoreModule
  ]
})
export class BackgroundModule { }
