import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../service/category/category.service';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';
import {TagGroupManagementService} from '../../../service/tag-group-management/tag-group-management.service';

@Component({
  selector: 'app-create-tag-group-modal',
  templateUrl: './create-tag-group-modal.component.html',
  styleUrls: ['./create-tag-group-modal.component.less']
})
export class CreateTagGroupModalComponent implements OnInit {

  @Input()
  item: any;

  tagGroupForm: FormGroup;
  listOfOption = [];

  constructor(
    private fb: FormBuilder,
    private tagGroupService$: TagGroupManagementService,
    private _message: NzMessageService,
    private _modal: NzModalRef
  ) { }

  ngOnInit() {
    if (this.item) {
      this.tagGroupForm = this.fb.group({
        name: [this.item.name, Validators.required],
        isCourseListSelect: [this.item.isCourseListSelect],
        isClassListSelect: [this.item.isClassListSelect],
        tag: [this.item.tagList]
      })
    } else {
      this.tagGroupForm = this.fb.group({
        name: ['', Validators.required],
        isCourseListSelect: [false],
        isClassListSelect: [false],
        tag: [[]]
      })
    }

    this.tagGroupService$.getAllTagRoles().subscribe(result => {
      result.forEach(item => {
        this.listOfOption.push({
          value: item.value,
          label: item.label
        })
      })
    })
  }

  submit() {
    let shouldBeClosed = false;
    this.tagGroupForm.markAllAsTouched();
    this.tagGroupForm.controls.name.updateValueAndValidity();
    return shouldBeClosed;
  }

  destory() {
    this._modal.destroy()
  }

}
