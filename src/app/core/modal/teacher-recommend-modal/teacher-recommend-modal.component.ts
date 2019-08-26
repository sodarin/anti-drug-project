import {Component, Input, OnInit} from '@angular/core';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';
import {TeacherManagementService} from '../../../service/teacher-management/teacher-management.service';

@Component({
  selector: 'app-teacher-recommend-modal',
  templateUrl: './teacher-recommend-modal.component.html',
  styleUrls: ['./teacher-recommend-modal.component.less']
})
export class TeacherRecommendModalComponent implements OnInit {

  @Input()
  id: string;

  recommendOrder: number;

  constructor(
    private teacherManagementService$: TeacherManagementService,
    private _modal: NzModalRef,
    private _message: NzMessageService
  ) { }

  ngOnInit() {
  }

  submit() {
    let shouldBeClosed = false;
    this.teacherManagementService$.getUserDetailById('').subscribe( result => {
      shouldBeClosed = true;
      this._message.success('序号编辑成功！')
    }, error1 => {
      shouldBeClosed = false;
      this._message.error(error1.error)
    } );
    return shouldBeClosed;
  }

  destroy() {
    this._modal.destroy()
  }

}
