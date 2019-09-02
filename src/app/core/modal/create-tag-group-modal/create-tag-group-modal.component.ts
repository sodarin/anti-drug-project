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
  id: string;

  tagGroupForm: FormGroup;
  listOfOption = [];

  constructor(
    private fb: FormBuilder,
    private tagGroupService$: TagGroupManagementService,
    private _message: NzMessageService,
    private _modal: NzModalRef
  ) { }

  ngOnInit() {
    if (this.id) {
      this.tagGroupService$.getTagGroupDetailById(this.id).subscribe(result => {
        this.tagGroupForm = this.fb.group({
          name: [result.name, Validators.required],
          isCourseListSelect: [result.isCourseListSelect],
          isClassListSelect: [result.isClassListSelect],
          tag: [result.tagList]
        })
      }, error1 => this._message.error(error1.error))
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

  }

  destory() {
    this._modal.destroy()
  }

}
