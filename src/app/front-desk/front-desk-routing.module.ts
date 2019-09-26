import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientComponent} from '../client/client.component';
import {FrontDeskComponent} from './front-desk.component';
import {DashboardComponent} from '../client/dashboard/dashboard.component';
import {CourselistComponent} from '../client/courselist/courselist.component';
import {TeacherComponent} from '../client/teacher/teacher.component';
import {UserPageComponent} from '../core/user-page/user-page.component'
import {ClasslistComponent} from '../client/classlist/classlist.component';
import {ClassManagementComponent} from '../class-management/class-management.component';
import {ManagementDashboardComponent} from '../class-management/management-dashboard/management-dashboard.component';
import {ClassInfoManagementComponent} from '../class-management/class-info-management/class-info-management.component';
import {HeadTeacherSettingComponent} from '../class-management/head-teacher-setting/head-teacher-setting.component';
import {TeacherSettingComponent} from '../class-management/teacher-setting/teacher-setting.component';
import {TutorSettingComponent} from '../class-management/tutor-setting/tutor-setting.component';
import {CourseSettingComponent} from '../class-management/course-setting/course-setting.component';
import {StudentSettingComponent} from '../class-management/student-setting/student-setting.component';
import { PersonalSettingsComponent } from '../client/personal-settings/personal-settings.component';
import { InformationComponent } from '../client/personal-settings/information/information.component';
import { VerificationComponent } from '../client/personal-settings/verification/verification.component';
import { SecuritySettingComponent } from '../client/personal-settings/security-setting/security-setting.component';



const routes: Routes = [
  { path: '', redirectTo: '/client', pathMatch: 'full' },
  {
    path: 'client', component: FrontDeskComponent, children: [
      { path: '', component: ClientComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'courselist', component: CourselistComponent},
      { path: 'teacher', component: TeacherComponent},
      { path: 'userpage', component: UserPageComponent},
      { path: 'classlist', component: ClasslistComponent },
      { path: 'classroom/:id', component: ClassManagementComponent, children: [
          { path: 'manage', component: ManagementDashboardComponent},
          { path: 'basicinfo', component: ClassInfoManagementComponent },
          { path: 'headteacher', component: HeadTeacherSettingComponent },
          { path: 'teachersetting', component: TeacherSettingComponent },
          { path: 'tutorsetting', component: TutorSettingComponent },
          { path: 'coursesetting', component: CourseSettingComponent },
          { path: 'studentsetting', component: StudentSettingComponent }
        ]},
      {
        path: 'settings', component: PersonalSettingsComponent, children: [
          { path: '', redirectTo: 'information', pathMatch: 'full' },
          { path: 'information', component: InformationComponent },
          { path: 'verification', component: VerificationComponent },
          { path: 'security', component: SecuritySettingComponent },
        ]
      }
    ]},

    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontDeskRoutingModule { }
