import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TagManagementService} from '../../../service/tag-management/tag-management.service';
import {NzMessageService, NzModalRef, NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-create-tag-modal',
  templateUrl: './create-tag-modal.component.html',
  styleUrls: ['./create-tag-modal.component.less']
})
export class CreateTagModalComponent implements OnInit {

  tagCreatingForm: FormGroup;

  checkOption = [];
  constructor(
    private fb: FormBuilder,
    private tagManagementService$: TagManagementService,
    private _modal: NzModalRef
  ) { }

  ngOnInit() {
    this.tagCreatingForm = this.fb.group({
      name: ['', Validators.required]
    });
    this.tagManagementService$.getAllTagRoles().subscribe( result => {
      result.forEach(item => {
        this.checkOption.push({
          label: item.name,
          value: item.code,
        })
      });
    })
  }

  submit(): boolean {
    let shouldBeClosed = false;
    this.tagCreatingForm.markAllAsTouched();
    this.tagCreatingForm.controls.name.updateValueAndValidity();
    let name = this.tagCreatingForm.controls.name.value;
    if (!this.tagCreatingForm.errors && name !== '') {
      this._modal.destroy(name)
    }
    return shouldBeClosed
  }

  cancel() {

  }

}
