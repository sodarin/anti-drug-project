import {Component, Input, OnInit} from '@angular/core';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-teaching-plan-adding-modal',
  templateUrl: './teaching-plan-adding-modal.component.html',
  styleUrls: ['./teaching-plan-adding-modal.component.less']
})
export class TeachingPlanAddingModalComponent implements OnInit {

  @Input()
  courseId: string;

  editForm: FormGroup;

  timeType: string = '1';
  expireDate: string = '';
  dates: number = 1;
  dateRange = [];

  constructor(
    private _modal: NzModalRef,
    private fb: FormBuilder,
    private _message: NzMessageService
  ) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      mode: ['1'],
      expireTime: ['1']
    })
  }

  submit() {
    for (const i in this.editForm.controls) {
      this.editForm.controls[i].markAsDirty();
      this.editForm.controls[i].updateValueAndValidity();
    }
    console.log(this.editForm.controls.expireTime.value);
    console.log(this.timeType);
    console.log(this.expireDate);
    console.log(this.dateRange);
    if (this.editForm.controls.expireTime.value == '2' && this.timeType == '1' && this.expireDate == '') {
      this._message.error('截止日期不能为空！');
    }
    if (this.editForm.controls.expireTime.value == '3' && this.dateRange.length == 0) {
      this._message.error('时间范围不能为空！');
    }
    if (!this.editForm.errors) {

    }
    return false;
  }


  destroy() {
    this._modal.destroy()
  }

  disabledStartDate = (startValue: Date): boolean => {
    return startValue.getTime() < new Date().getTime()
  };
}
