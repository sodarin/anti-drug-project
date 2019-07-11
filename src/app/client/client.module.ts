import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import {ShareModule} from '../share/share.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [ClientComponent, DashboardComponent],
  imports: [
    ShareModule
  ]
})
export class ClientModule { }
