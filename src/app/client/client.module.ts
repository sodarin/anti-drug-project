import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import {ShareModule} from '../share/share.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CourselistComponent} from './courselist/courselist.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  declarations: [ClientComponent, DashboardComponent, CourselistComponent],
  imports: [
    ShareModule,
    CoreModule
  ]
})
export class ClientModule { }
