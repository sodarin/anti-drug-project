import { NgModule } from '@angular/core';
import { LoginModalComponent } from './modal/login-modal/login-modal.component';
import { ShareModule } from '../share/share.module';
import {UserInfoViewModalComponent} from './modal/user-info-view-modal/user-info-view-modal.component';
import { UserInfoEditModalComponent } from './modal/user-info-edit-modal/user-info-edit-modal.component';
import {QuillModule} from 'ngx-quill';
import { CreateUserModalComponent } from './modal/create-user-modal/create-user-modal.component';
import { CreateTagModalComponent } from './modal/create-tag-modal/create-tag-modal.component';
import { CreateTagGroupModalComponent } from './modal/create-tag-group-modal/create-tag-group-modal.component';
import { TeacherRecommendModalComponent } from './modal/teacher-recommend-modal/teacher-recommend-modal.component';
import {TagInfoEditComponent} from './modal/tag-info-edit-modal/tag-info-edit.component';

import { TagGroupInfoEditModalComponent } from './modal/tag-group-info-edit-modal/tag-group-info-edit-modal.component';
import { CategoryEditModalComponent } from './modal/category-edit-modal/category-edit-modal.component';

@NgModule({
  declarations: [
    LoginModalComponent,
    UserInfoViewModalComponent,
    UserInfoEditModalComponent,
    TagInfoEditComponent,
    CreateUserModalComponent, CreateTagModalComponent, CreateTagGroupModalComponent, TeacherRecommendModalComponent, TagGroupInfoEditModalComponent, CategoryEditModalComponent],
  imports: [
    ShareModule,
    QuillModule
  ],
  exports: [
    LoginModalComponent,
    UserInfoViewModalComponent,
    UserInfoEditModalComponent,
    CreateUserModalComponent,
    CreateTagModalComponent,
    CreateTagGroupModalComponent,
    TagInfoEditComponent,
    TeacherRecommendModalComponent,
    TagGroupInfoEditModalComponent,
    CategoryEditModalComponent
  ]
})
export class CoreModule { }
