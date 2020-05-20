import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientClassManagementService} from '../../service/client-class-management/client-class-management.service';
import {NzNotificationService} from 'ng-zorro-antd';

@Component({
  selector: 'app-head-teacher-setting',
  templateUrl: './head-teacher-setting.component.html',
  styleUrls: ['./head-teacher-setting.component.less']
})
export class HeadTeacherSettingComponent implements OnInit {

  classroomId: string;

  teacherList = [];
  loading: boolean = false;

  constructor(
    private routerInfo: ActivatedRoute,
    private classManagement$: ClientClassManagementService,
    private _notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.classroomId = location.pathname.split('/')[3];
    this.getTeacher()
  }

  getTeacher() {
    this.classManagement$.getHeadTeacher(this.classroomId).subscribe(result => {
      this.teacherList = result.data
    }, error1 => {
      this._notification.error(
        '发生错误！',
        `${error1.error}`
      )
    })
  }

  setTeacher(data: any) {
    let oldTeacherId: string = '0';
    if (this.teacherList.length > 0) {
      oldTeacherId = this.teacherList[0].id
    }
    this.classManagement$.setHeadTeacher(this.classroomId, data, oldTeacherId).subscribe(result => {
      this.getTeacher();
      this._notification.success(
        '修改成功！',
        ''
      )
    }, error1 => {
      this._notification.error(
        '发生错误！',
        `${error1.error}`
      )
    })
  }

  drop(data: any) {

  }

}
