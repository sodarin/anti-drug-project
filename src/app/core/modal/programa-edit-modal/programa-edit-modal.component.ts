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
  item: any;

  programaEditForm: FormGroup;
  programaOptions = [];

  constructor(
    private fb: FormBuilder,
    private _modal: NzModalRef,
    private newsManagementService$: NewsManagementService,
    private _message: NzMessageService
  ) {
    this.programaEditForm = this.fb.group({
      name: ['', Validators.required],
      encode: ['', Validators.required],
      programa: ['']
    })
  }

  ngOnInit() {
    this.newsManagementService$.getCategoryList().subscribe(result => {
      this.programaOptions = result;
    });
    if (this.item) {
        this.programaEditForm = this.fb.group({
          name: [this.item.name, Validators.required],
          encode: [this.item.code, Validators.required],
          programa: [this.item.categoryid]
        })
    }  else {
      this.programaEditForm = this.fb.group({
        name: ['', Validators.required],
        encode: ['', Validators.required],
        programa: ['']
      })
    }
  }

  submit() {
    let shouldBeClosed = false;
    this.programaEditForm.controls.name.markAsDirty();
    this.programaEditForm.controls.encode.markAsDirty();
    this.programaEditForm.controls.name.updateValueAndValidity();
    this.programaEditForm.controls.encode.updateValueAndValidity();
    if (!this.programaEditForm.controls.name.errors && !this.programaEditForm.controls.encode.errors) {
      let result = {
        name: this.programaEditForm.controls.name.value,
        code: this.programaEditForm.controls.encode.value,
        categoryid: this.programaEditForm.controls.programa.value
      };
      this._modal.destroy(result)
    }
    return shouldBeClosed
  }

  destroy() {
    this._modal.destroy()
  }

}
