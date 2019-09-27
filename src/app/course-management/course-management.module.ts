import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { CourseManagementComponent } from './course-management.component';
import { BaseInfoComponent } from './base-info/base-info.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';
import { CoverPhotoComponent } from './cover-photo/cover-photo.component';
import { QuillModule } from 'ngx-quill';
import { FileComponent } from './file/file.component';
import { TestPaperComponent } from './test-paper/test-paper.component';
import { QuestionComponent } from './question/question.component'

@NgModule({
  declarations: [CourseManagementComponent, BaseInfoComponent, DetailInfoComponent, CoverPhotoComponent, FileComponent, TestPaperComponent,  QuestionComponent],
  imports: [
    ShareModule,
    RouterModule,
    QuillModule
  ]
})
export class CourseManagementModule { }
