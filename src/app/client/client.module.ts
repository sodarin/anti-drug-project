import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import { ShareModule } from '../share/share.module';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import {CourselistComponent} from './courselist/courselist.component';
import {CoreModule} from '../core/core.module';
import { TeacherComponent } from './teacher/teacher.component';

@NgModule({
  declarations: [ClientComponent, DashboardComponent, CourselistComponent, TeacherComponent],
=======
import { ClasslistComponent } from './classlist/classlist.component';
import { CourselistComponent } from './courselist/courselist.component';
import { CoreModule } from '../core/core.module';
import { PersonalSettingsComponent } from './personal-settings/personal-settings.component';
import { InformationComponent } from './personal-settings/information/information.component';
import { RouterModule } from '@angular/router';
import { VerificationComponent } from './personal-settings/verification/verification.component';
import { SecuritySettingComponent } from './personal-settings/security-setting/security-setting.component'
import { QuillModule } from 'ngx-quill'

@NgModule({
  declarations: [ClientComponent, DashboardComponent, CourselistComponent, PersonalSettingsComponent, ClasslistComponent, InformationComponent, VerificationComponent, SecuritySettingComponent],
>>>>>>> 8a6cb6a3bccb247adda8ad1cdb4cfa2ec40212b5
  imports: [
    ShareModule,
    CoreModule,
    RouterModule,
    QuillModule
  ]
})
export class ClientModule { }
