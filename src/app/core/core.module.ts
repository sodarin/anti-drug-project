import { NgModule } from '@angular/core';
import { LoginModalComponent } from './modal/login-modal/login-modal.component';
import { ShareModule } from '../share/share.module';
import {UserInfoViewModalComponent} from './modal/user-info-view-modal/user-info-view-modal.component';
import { UserInfoEditModalComponent } from './modal/user-info-edit-modal/user-info-edit-modal.component';
import {QuillModule} from 'ngx-quill';
import { CreateUserModalComponent } from './modal/create-user-modal/create-user-modal.component';

@NgModule({
  declarations: [LoginModalComponent, UserInfoViewModalComponent, UserInfoEditModalComponent, CreateUserModalComponent],
  imports: [
    ShareModule,
    QuillModule
  ],
  exports: [
    LoginModalComponent,
    UserInfoViewModalComponent,
    UserInfoEditModalComponent,
    CreateUserModalComponent
  ]
})
export class CoreModule { }
