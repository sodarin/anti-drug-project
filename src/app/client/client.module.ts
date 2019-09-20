import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import {ShareModule} from '../share/share.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CourselistComponent} from './courselist/courselist.component';
import {CoreModule} from '../core/core.module';
import { PersonalSettingsComponent } from './personal-settings/personal-settings.component';
import { InformationComponent } from './personal-settings/information/information.component';

@NgModule({
  declarations: [ClientComponent, DashboardComponent, CourselistComponent, PersonalSettingsComponent, InformationComponent],
  imports: [
    ShareModule,
    CoreModule
  ]
})
export class ClientModule { }
