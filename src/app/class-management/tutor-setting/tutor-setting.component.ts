import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ActivatedRoute} from '@angular/router';
import {ClientClassManagementService} from '../../service/client-class-management/client-class-management.service';
import {NzNotificationService} from 'ng-zorro-antd';

@Component({
  selector: 'app-tutor-setting',
  templateUrl: './tutor-setting.component.html',
  styleUrls: ['./tutor-setting.component.less']
})
export class TutorSettingComponent implements OnInit {

  classroomid: string;

  tutorList = [];
  studentList = [];
  loading: boolean = false;

  constructor(
    private routerInfo: ActivatedRoute,
    private classroomService$: ClientClassManagementService,
    private _notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.classroomid = location.pathname.split('/')[3];
    this.getAssistant();
  }

  getAssistant() {
    return this.classroomService$.getAssistant(this.classroomid).subscribe(result => {
      this.tutorList = result.data.classroomAssistantList;
    }, error1 => {
      this._notification.error(
        '发生错误！',
        `${error1.error}`
      )
    })
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tutorList, event.previousIndex, event.currentIndex);
  }

  setStudent(data: any) {
    this.classroomService$.setAssistant(this.classroomid, data).subscribe(result => {
      this.getAssistant();
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

  deleteTutor(id: string) {
    this.classroomService$.deleteAssistant(this.classroomid, id).subscribe(result => {
      this.getAssistant();
      this._notification.success(
        '删除成功！',
        ''
      )
    }, error1 => {
      this._notification.error(
        '删除失败！',
        `${error1.error}`
      )
    })
  }

}
