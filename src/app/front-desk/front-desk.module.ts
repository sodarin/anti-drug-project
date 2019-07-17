import { NgModule } from '@angular/core';
import { FrontDeskComponent } from './front-desk.component';
import {ShareModule} from '../share/share.module';
import {FrontDeskRoutingModule} from './front-desk-routing.module';
import {ClientModule} from '../client/client.module';
import {CoreModule} from '../core/core.module';



@NgModule({
  declarations: [FrontDeskComponent],
  imports: [
    ShareModule,
    FrontDeskRoutingModule,
    ClientModule,
    CoreModule
  ]
})
export class FrontDeskModule { }
