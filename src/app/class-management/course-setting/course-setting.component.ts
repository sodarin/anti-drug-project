import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {NzModalService} from 'ng-zorro-antd';
import {AddingCourseModalComponent} from '../../core/modal/adding-course-modal/adding-course-modal.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-setting',
  templateUrl: './course-setting.component.html',
  styleUrls: ['./course-setting.component.less']
})
export class CourseSettingComponent implements OnInit {

  courseList = [];
  classroomId: string;

  constructor(
    private _modal: NzModalService,
    private routerInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.courseList.push({
      title: '初中第6课 培养好习惯，牢记拒绝方法我要变得很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长(教学计划：默认教学计划)',
      descr: '看清陷阱，远离诱惑',
      teacherName: '李晨',
      occup: '讲师',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      stuNum: '5',
      taskNum: '2',
      expireTime: '永久'
    },
      {
        title: '初中第3课 培养好习惯，牢记拒绝方法我要变得很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长(教学计划：默认教学计划)',
        descr: '看清陷阱，远离诱惑',
        teacherName: '李晨',
        occup: '讲师',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        stuNum: '5',
        taskNum: '2',
        expireTime: '永久'
      },
      {
        title: '初中第4课 培养好习惯，牢记拒绝方法我要变得很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长(教学计划：默认教学计划)',
        descr: '看清陷阱，远离诱惑',
        teacherName: '李晨',
        occup: '讲师',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        stuNum: '5',
        taskNum: '2',
        expireTime: '永久'
      },
      {
        title: '初中第5课 培养好习惯，牢记拒绝方法我要变得很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长(教学计划：默认教学计划)',
        descr: '看清陷阱，远离诱惑',
        teacherName: '李晨',
        occup: '讲师',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        stuNum: '5',
        taskNum: '2',
        expireTime: '永久'
      });
    this.classroomId = this.routerInfo.snapshot.params['id']
  }

  openAddingCourseModal() {
    this._modal.create({
      nzTitle: '添加课程',
      nzContent: AddingCourseModalComponent,
      nzComponentParams: {
        classroomId: this.classroomId
      },
      nzWidth: 600,
      nzOkText: '添加',
      nzCancelText: '取消',
      nzOnOk: instance => instance.submit(),
      nzOnCancel: instance => instance.destroy()
    })
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.courseList, event.previousIndex, event.currentIndex);
  }

}
