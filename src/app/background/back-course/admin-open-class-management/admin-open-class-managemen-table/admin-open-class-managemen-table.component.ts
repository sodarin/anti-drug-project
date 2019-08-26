import { Component, OnInit } from '@angular/core';
import {AdminOpenClassService} from '../../../../service/admin-open-class/admin-open-class.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {TeacherRecommendModalComponent} from '../../../../core/modal/teacher-recommend-modal/teacher-recommend-modal.component';
import {UserInfoViewModalComponent} from '../../../../core/modal/user-info-view-modal/user-info-view-modal.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-open-class-managemen-table',
  templateUrl: './admin-open-class-managemen-table.component.html',
  styleUrls: ['./admin-open-class-managemen-table.component.less']
})
export class AdminOpenClassManagemenTableComponent implements OnInit {

  options = [
    {
      value: '学堂在线',
      label: '学堂在线',
      children: [
        {
          value: '小学年级',
          label: '小学年级',
          isLeaf: true
        },
        {
          value: '初中年级',
          label: '初中年级',
          isLeaf: true
        },
        {
          value: '高中年级',
          label: '高中年级',
          isLeaf: true
        },
        {
          value: '高职年级',
          label: '高职年级',
          isLeaf: true
        }
      ]
    },{
      label: '教师培训',
      value: '教师培训',
      isLeaf: true
    }, {
      label: '寓教于乐',
      value: '寓教于乐',
      isLeaf: true
    }, {
      label: '专题讲座',
      value: '专题讲座',
      isLeaf: true
    }, {
      label: '使用教程',
      value: '使用教程',
      children: [
        {
          label: '管理员',
          value: '管理员',
          isLeaf: true
        },
        {
          label: '教师',
          value: '教师',
          isLeaf: true
        },
        {
          label: '学员',
          value: '学员',
          isLeaf: true
        }
      ]
    }
  ];
  courseClassification = [];
  courseStatus: string = '';
  title: string = "";
  creator: string = "";
  filterOptions = {};

  totalCourse = 0;

  displayData = [];
  dataList = [];
  loading: boolean = false;
  pageIndex: number = 1;

  constructor(
    private adminOpenClassService$: AdminOpenClassService,
    private _modal: NzModalService,
    private _message: NzMessageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  filterCourse() {
    let courseClassification = '';
    if (this.courseClassification.length > 0) {
      courseClassification = this.courseClassification[this.courseClassification.length - 1]
    }
    this.filterOptions = {
      courseClassification: courseClassification,
      courseStatus: this.courseStatus,
      title: this.title,
      creator: this.creator
    }
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    // this.adminOpenClassService$.getCourseList(pageIndex, 10).subscribe( result => {
    //   this.loading = false;
    //   this.totalCourse = result[0].totalCourse ? result[0].totalCourse: 0;
    //   this.dataList = result;
    //   this.displayData = this.dataList
    // }, error1 => {
    //   this.loading = false;
    //   this._message.error(error1.error)
    // })
  }

  navigateTo(id: string) {
    this.router.navigateByUrl(``)
  }

  openTeacherIntroModal(id: string) {
    const modal = this._modal.create({
      nzTitle: '个人详细信息',
      nzContent: UserInfoViewModalComponent,
      nzComponentParams: {
        userId: id
      },
      nzWidth: 600,
      nzFooter: null
    })
  }

  showRecommendCourseModal(id: string) {
    const modal = this._modal.create({
      nzTitle: '设置公开课推荐序号',
      nzContent: TeacherRecommendModalComponent,
      nzComponentParams: {
        id: id
      },
      nzOnOk: instance => {

      },
      nzOnCancel: instance => instance.destroy()
    })
  }

  cancelRecommendCourse(id: string) {
    this._modal.confirm({
      nzTitle: '是否要取消推荐？',
      nzOnOk: () => console.log('11')
    })
  }

  closeCourse(id: string) {
    this._modal.confirm({
      nzTitle: '是否要关闭课程？',
      nzOnOk: () => console.log('11')
    })
  }



}
