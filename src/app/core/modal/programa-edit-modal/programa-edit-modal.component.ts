import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';
import {NewsManagementService} from '../../../service/news-management/news-management.service';
import {error} from 'selenium-webdriver';

@Component({
  selector: 'app-programa-edit-modal',
  templateUrl: './programa-edit-modal.component.html',
  styleUrls: ['./programa-edit-modal.component.less']
})
export class ProgramaEditModalComponent implements OnInit {

  @Input()
  id: string;

  programaEditForm: FormGroup;
  programaOptions = [];

  constructor(
    private fb: FormBuilder,
    private _modal: NzModalRef,
    private newsManagementService$: NewsManagementService,
    private _message: NzMessageService
  ) { }

  ngOnInit() {
    if (this.id) {
      this.newsManagementService$.getNewsDetail(this.id).subscribe(result => {
        this.programaEditForm = this.fb.group({
          name: [result.name, Validators.required],
          encode: [result.encode, Validators.required],
          programa: [result.programa]
        })
      }, error1 => this._message.error(error1.error))
    }  else {
      this.programaEditForm = this.fb.group({
        name: ['', Validators.required],
        encode: ['', Validators.required],
        programa: [[]]
      })
    }
  }

  submit() {
    let shouldBeClosed = false;
    this.programaEditForm.markAllAsTouched();
    this.programaEditForm.controls.name.updateValueAndValidity();
    this.programaEditForm.controls.encode.updateValueAndValidity();
    return shouldBeClosed
  }

  destroy() {
    this._modal.destroy()
  }

}
