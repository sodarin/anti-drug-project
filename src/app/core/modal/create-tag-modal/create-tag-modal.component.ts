import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TagManagementService} from '../../../service/tag-management/tag-management.service';
import {NzMessageService} from 'ng-zorro-antd';

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
    private _message: NzMessageService
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
    let flag = false;
    let updateRoleList = [];
    this.checkOption.forEach(item => {
      if (item.checked) {
        flag = true;
        updateRoleList.push(item.label)
      }
    });
    if (flag && !this.tagCreatingForm.errors && name !== '') {
      this.tagManagementService$.createNewTag(this.tagCreatingForm.controls.name.value).subscribe(result => {
        this._message.success("新增标签成功！");
      }, error1 => {
        this._message.error(error1.error);
        shouldBeClosed = false;
      })

    }
    return shouldBeClosed
  }

  cancel() {

  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.tagCreatingForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.tagCreatingForm.controls.confirmPassword.updateValueAndValidity());
  }
}
