import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {CourseManagementBackHalfService} from '../../service/course-management-back-half/course-management-back-half.service';
import {NzModalService, NzNotificationService} from 'ng-zorro-antd';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-teacher-management',
  templateUrl: './teacher-management.component.html',
  styleUrls: ['./teacher-management.component.less']
})
export class TeacherManagementComponent implements OnInit {

  teacherList = [];
  courseId: string;

  loading: boolean = false;

  planId: string = '';
  planList = [];

  constructor(
    private courseManagement$: CourseManagementBackHalfService,
    private _notification: NzNotificationService,
    private _modal: NzModalService
  ) { }

  ngOnInit() {
    this.courseId = location.pathname.split('/')[3];
    // this.teacherList = [
    //   {name: 'admin'},
    //   {name: 'ddd'},
    //   {name: 'aaa'}
    // ]
    this.getPlanList()
  }


  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.teacherList, event.previousIndex, event.currentIndex);
    let idList = [];
    this.teacherList.forEach(item => {
      idList.push(item.id)
    });
    this.courseManagement$.sortTeacherSeq(this.planId, idList).subscribe(result => {
      this.getTeacherList(this.planId);
      this._notification.success(
        '排序成功！',
        ''
      )
    }, error1 => {
      this._notification.error(
        '排序失败！',
        `${error1.error}`
      )
    })
  }

  getTeacherList(planId: string) {
    this.courseManagement$.getTeacherList(this.planId).subscribe(result => {
      this.teacherList = result.data
    }, error1 => {
      this._notification.error(
        '获取教师列表失败！',
        `${error1.error}`
      )
    })
  }

  addTeacher(data: any) {
    this.courseManagement$.addTeacherIntoCourse(this.courseId, this.planId, data).subscribe(result => {
      this.getTeacherList(this.planId);
      this._notification.success(
        '添加教师成功！',
        ''
      )
    }, error1 => {
      this._notification.error(
        '添加教师失败！',
        `${error1.error}`
      )
    })
  }

  getPlanList() {
    this.courseManagement$.getTeachingPlan(this.courseId).subscribe(result => {
      this.planList = result.data;
      this.planId = this.planList[0].id;
      this.getTeacherList(this.planId);
    }, error1 => {
      this._notification.error(
        '获取计划列表失败！',
        `${error1.error}`
      )
    })
  }

  onChange(data: any) {
    this.planId = data;
    this.getTeacherList(this.planId)
  }

  close(id: string) {
    this._modal.confirm({
      nzTitle: '是否删除该教师？',
      nzOnOk: () => {
        this.courseManagement$.deleteTeacher(this.planId, id).subscribe(result => {
          this.getTeacherList(this.planId);
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
    })
  }

}
