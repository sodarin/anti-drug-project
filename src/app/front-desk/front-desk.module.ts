import { NgModule } from '@angular/core';
import { FrontDeskComponent } from './front-desk.component';
import {ShareModule} from '../share/share.module';
import {FrontDeskRoutingModule} from './front-desk-routing.module';
import {ClientModule} from '../client/client.module';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [FrontDeskComponent, TestComponent],
  imports: [
    ShareModule,
    FrontDeskRoutingModule,
    ClientModule
  ]
})
export class FrontDeskModule { }
