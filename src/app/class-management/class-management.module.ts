import { NgModule } from '@angular/core';
import {ShareModule} from '../share/share.module';
import { ClassManagementComponent } from './class-management.component';
import {CoreModule} from '../core/core.module';
import { ManagementDashboardComponent } from './management-dashboard/management-dashboard.component';
import {RouterModule} from '@angular/router';
import { ClassInfoManagementComponent } from './class-info-management/class-info-management.component';
import { HeadTeacherSettingComponent } from './head-teacher-setting/head-teacher-setting.component';
import { TeacherSettingComponent } from './teacher-setting/teacher-setting.component';
import { TutorSettingComponent } from './tutor-setting/tutor-setting.component';
import { CourseSettingComponent } from './course-setting/course-setting.component';
import { StudentSettingComponent } from './student-setting/student-setting.component';
import { StudentSettingTabComponent } from './student-setting/student-setting-tab/student-setting-tab.component';
import { FormalStudentTableComponent } from './student-setting/formal-student-table/formal-student-table.component';
import { InformalStudentTableComponent } from './student-setting/informal-student-table/informal-student-table.component';
import { StudentInvolveRecordComponent } from './student-setting/student-involve-record/student-involve-record.component';
import { StudentExitRecordComponent } from './student-setting/student-exit-record/student-exit-record.component';

@NgModule({
  declarations: [ClassManagementComponent, ManagementDashboardComponent, ClassInfoManagementComponent, HeadTeacherSettingComponent, TeacherSettingComponent, TutorSettingComponent, CourseSettingComponent, StudentSettingComponent, StudentSettingTabComponent, FormalStudentTableComponent, InformalStudentTableComponent, StudentInvolveRecordComponent, StudentExitRecordComponent],
  imports: [
    ShareModule,
    CoreModule,
    RouterModule
  ]
})
export class ClassManagementModule { }
