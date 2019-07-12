import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    NgZorroAntdModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShareModule { }
