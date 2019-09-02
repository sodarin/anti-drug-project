import { Component, OnInit } from '@angular/core';
import {AdminCourseService} from '../../../../service/admin-course/admin-course.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-admin-course-management-table',
  templateUrl: './admin-course-management-table.component.html',
  styleUrls: ['./admin-course-management-table.component.less']
})
export class AdminCourseManagementTableComponent implements OnInit {

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
  courseType: string = '0';
  title: string = "";
  creator: string = "";
  filterOptions = {};

  totalCourse = 0;

  displayData = [];
  dataList = [];
  loading: boolean = false;
  pageIndex: number = 1;

  constructor(
    private adminCourseService$: AdminCourseService,
    private _message: NzMessageService,
    private _modal: NzModalService
  ) { }

  ngOnInit() {
    this.searchData()
  }

  filterCourse() {
    let courseClassification = '';
    if (this.courseClassification.length > 0) {
      courseClassification = this.courseClassification[this.courseClassification.length - 1]
    }
    this.filterOptions = {
      courseClassification: courseClassification,
      courseStatus: this.courseStatus,
      courseType: this.courseType,
      title: this.title,
      creator: this.creator
    }
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.adminCourseService$.getCourseList(pageIndex, 10).subscribe( result => {
      this.loading = false;
      this.totalCourse = result[0].totalCourse ? result[0].totalCourse: 0;
      this.dataList = result;
      this.displayData = this.dataList
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
  }

  showRecommendCourseModal(courseId: string) {
    this._modal.confirm({
      nzTitle: '确认要将该课程设为推荐课程吗？',
      nzOnOk: () => console.log('11')
    })
  }

  cancelRecommendCourse(courseId: string) {
    this._modal.confirm({
      nzTitle: '是否要取消推荐？',
      nzOnOk: () => console.log('11')
    })
  }

  publishCourse(courseId: string) {
    this._modal.confirm({
      nzTitle: '是否要发布该课程？',
      nzOnOk: () => console.log('11')
    })
  }

  closeCourse(courseId: string) {
    this._modal.confirm({
      nzTitle: '是否要关闭该课程？',
      nzOnOk: () => console.log('11')
    })
  }

  copyCourse(data: any) {
    this._modal.confirm({
      nzTitle: '是否要复制该课程？',
      nzOnOk: () => console.log('11')
    })
  }

  deleteCourse(courseId: string) {
    this._modal.confirm({
      nzTitle: '是否要删除该课程？',
      nzOnOk: () => console.log('11')
    })
  }

}
