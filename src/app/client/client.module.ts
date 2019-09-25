import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import {ShareModule} from '../share/share.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CourselistComponent} from './courselist/courselist.component';
import {CoreModule} from '../core/core.module';
import { TeacherComponent } from './teacher/teacher.component';

@NgModule({
  declarations: [ClientComponent, DashboardComponent, CourselistComponent, TeacherComponent],
  imports: [
    ShareModule,
    CoreModule
  ]
})
export class ClientModule { }
