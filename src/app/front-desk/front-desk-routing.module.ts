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
import {TeachingPlanManagementComponent} from '../course-management/teaching-plan-management/teaching-plan-management.component';
import {PaperMarkingComponent} from '../course-management/paper-marking/paper-marking.component';
import {TestResultTableComponent} from '../course-management/paper-marking/test-result-table/test-result-table.component';
import {StudentManagementComponent} from '../course-management/student-management/student-management.component';
import {TeacherManagementComponent} from '../course-management/teacher-management/teacher-management.component';
import {PlanSettingComponent} from '../course-management/plan-setting/plan-setting.component';
import {OpenresourcedetailComponent} from '../client/openresourcedetail/openresourcedetail.component';
import {OpenresourceComponent} from '../client/openresource/openresource.component';
import {GrouptopicComponent} from '../client/groupmainlist/grouplist/grouptopic/grouptopic.component';
import {GroupInfoComponent} from '../client/groupmainlist/grouplist/group-info/group-info.component';
import {GrouplistComponent} from '../client/groupmainlist/grouplist/grouplist.component';
import {GroupcreateComponent} from '../client/groupmainlist/groupcreate/groupcreate.component';
import {GroupmainlistComponent} from '../client/groupmainlist/groupmainlist.component';
import {NewsCaseModalComponent} from '../client/news/news-case-modal/news-case-modal.component';
import {NewsNewsModalComponent} from '../client/news/news-news-modal/news-news-modal.component';
import {NewsLawModalComponent} from '../client/news/news-law-modal/news-law-modal.component';
import {NewsAllModalComponent} from '../client/news/news-all-modal/news-all-modal.component';
import {NewsTagModalComponent} from '../core/news-component/news-tag-modal/news-tag-modal.component';
import {NewsDetailsModalComponent} from '../core/news-component/news-details-modal/news-details-modal.component';
import {MineManagementComponent} from "../client/mine-management/mine-management.component";
import {TeachingCourseComponent} from "../client/mine-management/teaching-course/teaching-course.component";
import {TeachingClassComponent} from "../client/mine-management/teaching-class/teaching-class.component";
import {StudentQAComponent} from "../client/mine-management/student-qa/student-qa.component";
import {StudentTopicComponent} from "../client/mine-management/student-topic/student-topic.component";
import {MinePaperMarkingComponent} from "../client/mine-management/paper-marking/paper-marking.component";
import {HomeworkMarkingComponent} from "../client/mine-management/homework-marking/homework-marking.component";
import {TeachingDatabaseComponent} from "../client/mine-management/teaching-database/teaching-database.component";
import {MyCourseComponent} from "../client/mine-management/my-course/my-course.component";
import {MyQAComponent} from "../client/mine-management/my-qa/my-qa.component";
import {MyTopicComponent} from "../client/mine-management/my-topic/my-topic.component";
import {MyNoteComponent} from "../client/mine-management/my-note/my-note.component";
import {MyHomeworkComponent} from "../client/mine-management/my-homework/my-homework.component";
import {MyExamComponent} from "../client/mine-management/my-exam/my-exam.component";
import {MyGroupComponent} from "../client/mine-management/my-group/my-group.component";
import {MyClassComponent} from "../client/mine-management/my-class/my-class.component";
import {MyLiveComponent} from "../client/mine-management/my-live/my-live.component";
import {CreateCourseComponent} from "../client/mine-management/teaching-course/create-course/create-course.component";
import {MyLiveCourseComponent} from "../client/mine-management/my-course/my-live-course/my-live-course.component";
import { FocusDetailComponent } from '../core/focus-detail/focus-detail.component';
import { FansComponent } from "../core/fans/fans.component";



const routes: Routes = [
  { path: '', redirectTo: '/client', pathMatch: 'full' },
 
  {
    path: 'client', component: FrontDeskComponent, children: [
      { path: '', component: ClientComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'mine', component:MineManagementComponent, children:[
          {path: 'teachingcourse', component:TeachingCourseComponent},
          {path: 'createcourse', component:CreateCourseComponent},
          {path: 'teachingclass', component:TeachingClassComponent},
          {path: 'studentQA' , component:StudentQAComponent},
          {path: 'studenttopic', component:StudentTopicComponent},
          {path: 'papermarking', component:MinePaperMarkingComponent},
          {path: 'homeworkmarking', component:HomeworkMarkingComponent},
          {path: 'teachingdatabase', component:TeachingDatabaseComponent},
          {path: 'mycourse', component:MyCourseComponent},
          {path: 'myQA', component:MyQAComponent},
          {path: 'mytopic', component:MyTopicComponent},
          {path: 'mynote', component:MyNoteComponent},
          {path: 'myhomework', component:MyHomeworkComponent},
          {path: 'myexam', component:MyExamComponent},
          {path: 'mygroup', component:MyGroupComponent},
          {path: 'myclass', component:MyClassComponent},
          {path: 'mylive', component:MyLiveComponent},
          {path: 'mylivecourse', component:MyLiveCourseComponent}


        ]},
      { path: 'courselist', component: CourselistComponent},
      { path: 'teacher', component: TeacherComponent},
      { path: 'userpage/:id', component: UserPageComponent,children:[
        {path: 'focus', component: FocusDetailComponent},
        {path: 'fans', component: FansComponent},
        {path: 'focus', component: FocusDetailComponent,outlet:'r2'},
        {path: 'fans', component: FansComponent,outlet:'r2'},
      ]},
      { path: 'classlist', component: ClasslistComponent },
      { path: 'openresource', component: OpenresourceComponent},
      { path: 'openresourcedetail', component: OpenresourcedetailComponent },
      {path: 'groupmainlist', component: GroupmainlistComponent},
      {path: 'groupcreate', component: GroupcreateComponent},
     
      {path: 'groupmainlist/:id', component: GrouplistComponent, children: [
          {path: '', component: GroupInfoComponent},
          {path: 'grouptopic', component: GrouptopicComponent},

        ]},
      { path: 'newsall', component: NewsAllModalComponent},
      { path: 'newslaw', component: NewsLawModalComponent },
      { path: 'newsnews', component: NewsNewsModalComponent},
      { path: 'newscase', component: NewsCaseModalComponent},
      { path: 'newsdetails', component: NewsDetailsModalComponent},
      { path: 'newstag', component: NewsTagModalComponent},
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
          { path: 'testpaper', component: TestpaperListingComponent},
          { path: 'testpaper/:paperid/resulttable', component: ResultTableComponent }
        ]},
      { path: 'testpaper/:paperid/result/:studentid', component: PaperResultDetailComponent },
      { path: 'testpaper/:paperid/analysis', component: PaperResultAnalysisComponent},
      {
        path: 'settings', component: PersonalSettingsComponent, children: [
          { path: '', redirectTo: 'information', pathMatch: 'full' },
          { path: 'information', component: InformationComponent },
          { path: 'verification', component: VerificationComponent },
          { path: 'security', component: SecuritySettingComponent },
        ]
      },
      {
        path: 'course/:id', component: CourseManagementComponent, children: [
          { path: '', redirectTo: 'base', pathMatch: 'full' },
          { path: 'base', component: BaseInfoComponent },
          { path: 'detail', component: DetailInfoComponent },
          { path: 'cover', component: CoverPhotoComponent },
          { path: 'file', component: FileComponent },
          { path: 'testpaper', component: TestPaperComponent },
          { path: 'question', component: QuestionComponent },
          { path: 'teaching_plan', component: TeachingPlanManagementComponent },
          { path: 'papers', component: PaperMarkingComponent },
          { path: 'papers/:paperid/resulttable', component: TestResultTableComponent },
          { path: 'studentsetting', component: StudentManagementComponent },
          { path: 'teachersetting', component: TeacherManagementComponent },
          { path: 'plansetting', component: PlanSettingComponent }
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontDeskRoutingModule { }
