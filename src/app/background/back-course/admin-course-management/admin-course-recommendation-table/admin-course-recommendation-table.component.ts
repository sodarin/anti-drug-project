import {Component, OnInit, TemplateRef} from '@angular/core';
import {AdminCourseService} from '../../../../service/admin-course/admin-course.service';
import {NzMessageService, NzModalService, NzNotificationService} from 'ng-zorro-antd';
import {UserInfoViewModalComponent} from '../../../../core/modal/user-info-view-modal/user-info-view-modal.component';
import {TeacherRecommendModalComponent} from '../../../../core/modal/teacher-recommend-modal/teacher-recommend-modal.component';

@Component({
  selector: 'app-admin-course-recommendation-table',
  templateUrl: './admin-course-recommendation-table.component.html',
  styleUrls: ['./admin-course-recommendation-table.component.less']
})
export class AdminCourseRecommendationTableComponent implements OnInit {

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
  title: string = "";
  creator: string = "";
  filterOptions = {
    courseClassification: '',
    title: '',
    creator: ''
  };

  totalCourse = 0;

  displayData = [];
  dataList = [];
  loading: boolean = false;
  pageIndex: number = 1;

  courseOrder: number;

  constructor(
    private adminCourseService$: AdminCourseService,
    private _modal: NzModalService,
    private _notification: NzNotificationService
  ) {
    this.adminCourseService$.changeStatus.subscribe(value => {
      this.searchData()
    })
  }

  ngOnInit() {
  }

  filterCourse() {
    let courseClassification = '';
    if (this.courseClassification.length > 0) {
      courseClassification = this.courseClassification[this.courseClassification.length - 1]
    }
    this.filterOptions = {
      courseClassification: courseClassification,
      title: this.title,
      creator: this.creator
    };
    this.displayData = [];
    this.loading = true;
    this.pageIndex = 1;
    this.adminCourseService$.getRecommendedList(this.pageIndex, 10, this.filterOptions).subscribe( result => {
      this.loading = false;
      this.totalCourse = result.data.total ? result.data.total: 0;
      this.dataList = result.data.data;
      this.displayData = this.dataList
    }, error1 => this._notification.create(
      'error',
      '发生错误！',
      `${error1.error}`))
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.adminCourseService$.getRecommendedList(pageIndex, 10, this.filterOptions).subscribe( result => {
      this.loading = false;
      this.totalCourse = result.data.total ? result.data.total: 0;
      this.dataList = result.data.data;
      this.displayData = this.dataList
    }, error1 => this._notification.create(
      'error',
      '发生错误！',
      `${error1.error}`))
  }

  setOrder(data: any) {
    this.courseOrder = data.courseOrder;
    const modal = this._modal.create({
      nzTitle: '设置推荐序号',
      nzContent: TeacherRecommendModalComponent,
      nzOnOk: instance => instance.submit(),
      nzOnCancel: instance => instance.destroy()
    });
    modal.afterClose.subscribe(result => {
      if (result) {
        this.adminCourseService$.setRecommendCourse(data.id, result).subscribe(result => {
          this._notification.create(
            'success',
            '设置推荐成功！',
            ''
          );
          let i;
          this.adminCourseService$.changeStatus.subscribe(value => i = value);
          this.adminCourseService$.changeStatus.next(i + 1);
        }, error1 => {
          this._notification.create(
            'error',
            '发生错误！',
            `${error1.error}`
          )
        })
      }
    })
  }

  cancelRecommendCourse(courseId: string) {
    this._modal.confirm({
      nzTitle: '是否要取消推荐？',
      nzOnOk: () => {
        this.adminCourseService$.cancelRecommendCourse(courseId).subscribe(result => {
          this._notification.create(
            'success',
            '取消推荐成功！',
            ''
          );
          let i;
          this.adminCourseService$.changeStatus.subscribe(value => i = value);
          this.adminCourseService$.changeStatus.next(i + 1);
        }, error1 => {
          this._notification.create(
            'error',
            '发生错误！',
            `${error1.error}`
          )
        })
      }
    })
  }

  viewUserInfo(id: string) {
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

  navigateTo(url: string) {
    window.open(url, '_blank')
  }

}
