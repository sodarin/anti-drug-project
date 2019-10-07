import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { CourseManagementComponent } from './course-management.component';
import { BaseInfoComponent } from './base-info/base-info.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';
import { CoverPhotoComponent } from './cover-photo/cover-photo.component';
import { QuillModule } from 'ngx-quill';
import { FileComponent } from './file/file.component';
import { TestPaperComponent } from './test-paper/test-paper.component';
import { QuestionComponent } from './question/question.component';
import { TeachingPlanManagementComponent } from './teaching-plan-management/teaching-plan-management.component';
import { PaperMarkingComponent } from './paper-marking/paper-marking.component';
import { TestResultTableComponent } from './paper-marking/test-result-table/test-result-table.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { StudentManagementTabComponent } from './student-management/student-management-tab/student-management-tab.component';
import { FormalStudentTableComponent } from './student-management/formal-student-table/formal-student-table.component';
import { InformalStudentTableComponent } from './student-management/informal-student-table/informal-student-table.component';
import { StudentInvolveRecordComponent } from './student-management/student-involve-record/student-involve-record.component';
import { StudentExitRecordComponent } from './student-management/student-exit-record/student-exit-record.component';
import { TeacherManagementComponent } from './teacher-management/teacher-management.component';
import {CoreModule} from '../core/core.module';
import { PlanSettingComponent } from './plan-setting/plan-setting.component';

@NgModule({
  declarations: [CourseManagementComponent, BaseInfoComponent, DetailInfoComponent, CoverPhotoComponent, FileComponent, TestPaperComponent,  QuestionComponent, TeachingPlanManagementComponent, PaperMarkingComponent, TestResultTableComponent, StudentManagementComponent, StudentManagementTabComponent, FormalStudentTableComponent, InformalStudentTableComponent, StudentInvolveRecordComponent, StudentExitRecordComponent, TeacherManagementComponent, PlanSettingComponent],
  imports: [
    ShareModule,
    RouterModule,
    QuillModule,
    CoreModule
  ]
})
export class CourseManagementModule { }
