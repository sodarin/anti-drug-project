import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import {ShareModule} from '../share/share.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CourselistComponent} from './courselist/courselist.component';
import {CoreModule} from '../core/core.module';
import { ClasslistComponent } from './classlist/classlist.component';

@NgModule({
  declarations: [ClientComponent, DashboardComponent, CourselistComponent, ClasslistComponent],
  imports: [
    ShareModule,
    CoreModule
  ]
})
export class ClientModule { }
