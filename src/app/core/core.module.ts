import { NgModule } from '@angular/core';
import { LoginModalComponent } from './modal/login-modal/login-modal.component';
import { ShareModule } from '../share/share.module';
import { UserInfoViewModalComponent } from './modal/user-info-view-modal/user-info-view-modal.component';
import { UserInfoEditModalComponent } from './modal/user-info-edit-modal/user-info-edit-modal.component';
import { QuillModule } from 'ngx-quill';
import { CreateUserModalComponent } from './modal/create-user-modal/create-user-modal.component';
import { CreateTagModalComponent } from './modal/create-tag-modal/create-tag-modal.component';
import { CreateTagGroupModalComponent } from './modal/create-tag-group-modal/create-tag-group-modal.component';
import { TeacherRecommendModalComponent } from './modal/teacher-recommend-modal/teacher-recommend-modal.component';
import { TagInfoEditComponent } from './modal/tag-info-edit-modal/tag-info-edit.component';

import { TagGroupInfoEditModalComponent } from './modal/tag-group-info-edit-modal/tag-group-info-edit-modal.component';
import { CategoryEditModalComponent } from './modal/category-edit-modal/category-edit-modal.component';
import { NewsEditModalComponent } from './modal/news-edit-modal/news-edit-modal.component';
import { ProgramaEditModalComponent } from './modal/programa-edit-modal/programa-edit-modal.component';
import { AnnouncementEditModalComponent } from './modal/announcement-edit-modal/announcement-edit-modal.component';
import {CourselistListviewModalComponent} from './courselist-component/courselist-listview-modal/courselist-listview-modal.component';
import {CourselistClassificationModalComponent} from './courselist-component/courselist-classification-modal/courselist-classification-modal.component';
import {CourselistSortModalComponent} from './courselist-component/courselist-sort-modal/courselist-sort-modal.component';
import {CourselistCourseblockModalComponent} from './courselist-component/courselist-courseblock-modal/courselist-courseblock-modal.component';
import { ClasslistClassblockComponent } from './classlist-component/classlist-classblock/classlist-classblock.component';
import { ClasslistListviewComponent } from './classlist-component/classlist-listview/classlist-listview.component';
import { AutocompleteInputComponent } from './class-management-component/autocomplete-input/autocomplete-input.component';
import { AddingCourseModalComponent } from './modal/adding-course-modal/adding-course-modal.component';
import { LoginPasswdEditModelComponent } from './modal/login-passwd-edit-model/login-passwd-edit-model.component';

@NgModule({
  declarations: [
    LoginModalComponent,
    UserInfoViewModalComponent,
    UserInfoEditModalComponent,
    TagInfoEditComponent,
    CreateUserModalComponent,
    CreateTagModalComponent,
    CreateTagGroupModalComponent,
    TeacherRecommendModalComponent,
    TagGroupInfoEditModalComponent,
    CategoryEditModalComponent, NewsEditModalComponent, ProgramaEditModalComponent, AnnouncementEditModalComponent,
    CourselistCourseblockModalComponent,
    CourselistSortModalComponent,
    CourselistClassificationModalComponent,
    CourselistListviewModalComponent,
    ClasslistClassblockComponent,
    ClasslistListviewComponent,
    AutocompleteInputComponent,
    AddingCourseModalComponent,
    LoginPasswdEditModelComponent],
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
    CategoryEditModalComponent,
    NewsEditModalComponent,
    ProgramaEditModalComponent,
    AnnouncementEditModalComponent,
    CourselistCourseblockModalComponent,
    CourselistSortModalComponent,
    CourselistClassificationModalComponent,
    CourselistListviewModalComponent,
    ClasslistListviewComponent,
    AutocompleteInputComponent,
    AddingCourseModalComponent,
    LoginPasswdEditModelComponent
  ]
})
export class CoreModule { }
