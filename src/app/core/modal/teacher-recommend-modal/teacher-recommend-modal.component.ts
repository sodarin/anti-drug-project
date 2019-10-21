import {Component, Input, OnInit} from '@angular/core';
import {NzMessageService, NzModalRef, NzNotificationService} from 'ng-zorro-antd';
import {TeacherManagementService} from '../../../service/teacher-management/teacher-management.service';

@Component({
  selector: 'app-teacher-recommend-modal',
  templateUrl: './teacher-recommend-modal.component.html',
  styleUrls: ['./teacher-recommend-modal.component.less']
})
export class TeacherRecommendModalComponent implements OnInit {

  @Input()
  id: string;

  recommendOrder: number = 1;

  constructor(
    private teacherManagementService$: TeacherManagementService,
    private _modal: NzModalRef,
    private _notification: NzNotificationService
  ) { }

  ngOnInit() {
  }

  submit() {
    let shouldBeClosed = false;
    if(this.recommendOrder == 0) {
      this._notification.create(
        'error',
        '发生错误！',
        '推荐序号不能为0！'
      )
    } else {
      this._modal.destroy(this.recommendOrder)
    }
    return shouldBeClosed;
  }

  destroy() {
    this._modal.destroy()
  }

}
