import { NgModule } from '@angular/core';
import { LoginModalComponent } from './modal/login-modal/login-modal.component';
import { ShareModule } from '../share/share.module';
import {UserInfoViewModalComponent} from './modal/user-info-view-modal/user-info-view-modal.component';
import { UserInfoEditModalComponent } from './modal/user-info-edit-modal/user-info-edit-modal.component';

@NgModule({
  declarations: [LoginModalComponent, UserInfoViewModalComponent, UserInfoEditModalComponent],
  imports: [
    ShareModule
  ],
  exports: [
    LoginModalComponent,
    UserInfoViewModalComponent,
    UserInfoEditModalComponent
  ]
})
export class CoreModule { }
