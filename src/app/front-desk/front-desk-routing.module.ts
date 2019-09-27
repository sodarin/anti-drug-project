import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from '../client/client.component';
import { FrontDeskComponent } from './front-desk.component';
import { DashboardComponent } from '../client/dashboard/dashboard.component';
import { CourselistComponent } from '../client/courselist/courselist.component';
import { ClasslistComponent } from '../client/classlist/classlist.component';
import { ClassManagementComponent } from '../class-management/class-management.component';
import { ManagementDashboardComponent } from '../class-management/management-dashboard/management-dashboard.component';
import { ClassInfoManagementComponent } from '../class-management/class-info-management/class-info-management.component';
import { HeadTeacherSettingComponent } from '../class-management/head-teacher-setting/head-teacher-setting.component';
import { TeacherSettingComponent } from '../class-management/teacher-setting/teacher-setting.component';
import { TutorSettingComponent } from '../class-management/tutor-setting/tutor-setting.component';
import { CourseSettingComponent } from '../class-management/course-setting/course-setting.component';
import { StudentSettingComponent } from '../class-management/student-setting/student-setting.component';
import { PersonalSettingsComponent } from '../client/personal-settings/personal-settings.component';
import { InformationComponent } from '../client/personal-settings/information/information.component';
import { VerificationComponent } from '../client/personal-settings/verification/verification.component';
import { SecuritySettingComponent } from '../client/personal-settings/security-setting/security-setting.component';
import { CourseManagementComponent } from '../course-management/course-management.component'
import { BaseInfoComponent } from '../course-management/base-info/base-info.component';
import { DetailInfoComponent } from '../course-management/detail-info/detail-info.component';
import { CoverPhotoComponent } from '../course-management/cover-photo/cover-photo.component';
import { FileComponent } from '../course-management/file/file.component';
import { QuestionComponent } from '../course-management/question/question.component'
import { TestPaperComponent } from '../course-management/test-paper/test-paper.component';
import { TeacherComponent } from '../client/teacher/teacher.component';
import { UserPageComponent } from '../core/user-page/user-page.component';
import { CoverSettingComponent } from '../class-management/cover-setting/cover-setting.component';
import {TestpaperListingComponent} from '../class-management/testpaper-listing/testpaper-listing.component';
import {ResultTableComponent} from '../class-management/testpaper-listing/result-table/result-table.component';
import {PaperResultDetailComponent} from '../class-management/testpaper-listing/paper-result-detail/paper-result-detail.component';
import {PaperResultAnalysisComponent} from '../class-management/testpaper-listing/paper-result-analysis/paper-result-analysis.component';




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
      {
        path: 'classroom/:id', component: ClassManagementComponent, children: [
          { path: 'manage', component: ManagementDashboardComponent },
          { path: 'basicinfo', component: ClassInfoManagementComponent },
          { path: 'headteacher', component: HeadTeacherSettingComponent },
          { path: 'teachersetting', component: TeacherSettingComponent },
          { path: 'tutorsetting', component: TutorSettingComponent },
          { path: 'coursesetting', component: CourseSettingComponent },
          { path: 'studentsetting', component: StudentSettingComponent },
          { path: 'coversetting', component: CoverSettingComponent },
          { path: 'testpaper', component: TestpaperListingComponent, children: [
              { path: ':paperid/result', component: ResultTableComponent },
            ] }
        ]},
      { path: 'classroom/:id/testpaper/:paperid/result/:studentid', component: PaperResultDetailComponent },
      { path: 'classroom/:id/testpaper/:paperid/analysis', component: PaperResultAnalysisComponent},
      {
        path: 'settings', component: PersonalSettingsComponent, children: [
          { path: '', redirectTo: 'information', pathMatch: 'full' },
          { path: 'information', component: InformationComponent },
          { path: 'verification', component: VerificationComponent },
          { path: 'security', component: SecuritySettingComponent },
        ]
      },
      {
        path: 'course', component: CourseManagementComponent, children: [
          { path: '', redirectTo: 'base', pathMatch: 'full' },
          { path: 'base', component: BaseInfoComponent },
          { path: 'detail', component: DetailInfoComponent },
          { path: 'cover', component: CoverPhotoComponent },
          { path: 'file', component: FileComponent },
          { path: 'testpaper', component: TestPaperComponent },
          { path: 'question', component: QuestionComponent }]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontDeskRoutingModule { }
