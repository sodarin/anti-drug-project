import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ClassManagementService} from '../../service/class-management/class-management.service';
import {NzNotificationService} from 'ng-zorro-antd';
import {ClientClassManagementService} from '../../service/client-class-management/client-class-management.service';

@Component({
  selector: 'app-teacher-setting',
  templateUrl: './teacher-setting.component.html',
  styleUrls: ['./teacher-setting.component.less']
})
export class TeacherSettingComponent implements OnInit {

  teacherList = [];
  classroomId: string;

  loading: boolean = false;

  constructor(
    private classManagement$: ClientClassManagementService,
    private _notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.classroomId = location.pathname.split('/')[3];
    this.getTeacherList()
  }


  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.teacherList, event.previousIndex, event.currentIndex);
  }

  getTeacherList() {
    this.classManagement$.getClassTeachers(this.classroomId).subscribe(result => {
      this.teacherList = result.data.teacherList;
    }, error1 => {
      this._notification.error(
        '发生错误！',
        `${error1.error}`
      )
    })
  }

  submit() {
    console.log(this.teacherList)
  }

}
