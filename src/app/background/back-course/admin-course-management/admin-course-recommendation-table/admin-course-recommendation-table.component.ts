import {Component, OnInit, TemplateRef} from '@angular/core';
import {AdminCourseService} from '../../../../service/admin-course/admin-course.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';

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
  filterOptions = {};

  totalCourse = 0;

  displayData = [];
  dataList = [];
  loading: boolean = false;
  pageIndex: number = 1;

  courseOrder: number;

  constructor(
    private adminCourseService$: AdminCourseService,
    private _modal: NzModalService,
    private _message: NzMessageService
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
      title: this.title,
      creator: this.creator
    }
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.adminCourseService$.getRecommenderCourseList(pageIndex, 10).subscribe( result => {
      this.loading = false;
      this.totalCourse = result[0].totalCourse ? result[0].totalCourse: 0;
      this.dataList = result;
      this.displayData = this.dataList
    }, error1 => this._message.error(error1.error))
  }

  setOrder(data: any, template: TemplateRef<{}>) {
    this.courseOrder = data.courseOrder;
    this._modal.create({
      nzTitle: '设置推荐序号',
      nzContent: template,
      nzOnOk: () => console.log('111')
    })
  }

  cancelRecommendCourse(courseId: string) {
    this._modal.confirm({
      nzTitle: '是否要取消推荐？',
      nzOnOk: () => console.log('11')
    })
  }

}
