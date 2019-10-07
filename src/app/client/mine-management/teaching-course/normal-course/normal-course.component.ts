import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
//import  {TeachingCourseService} from "../../../../service/teaching-course/teaching-course.service";
import {NzMessageService, NzModalService} from "ng-zorro-antd";

@Component({
  selector: 'app-normal-course',
  templateUrl: './normal-course.component.html',
  styleUrls: ['./normal-course.component.less']
})
export class NormalCourseComponent implements OnInit {

  @Input()
  name: string;
  recordList = [];
  total: number;
  loading: boolean = false;
  pageIndex: number = 1;

  dataList = [];
  displayData = [];
  totalPage: number;

  constructor(
    private routerInfo: ActivatedRoute,
    // private TeachingCourseService$: TeachingCourseService,
    private _message: NzMessageService,

  ) { }

  ngOnInit() {
    this.recordList = [
      {
        name: '课程发布指南',
        number: 5,
        state: '已发布',
      },
      {
        name: '班级功能介绍',
        number: 10,
        state: '已发布',
      },
      {
        name: '测试',
        number: 0,
        state: '未发布',
      }

    ]
  }

  filterStudent() {

  }

  searchData(pageIndex: number = this.pageIndex) {
    this.recordList = [];
    this.loading = true;
    // this.TeachingCourseService$.getNormalCourseList(pageIndex, 10).subscribe(result => {
    //   this.loading = false;
    //   this.total = result.data[0].totalNum ? result.data[0].totalNum : 0;
    //   this.totalPage = Math.ceil(this.total / 10);
    //   this.dataList = result.data;
    //   this.recordList = this.dataList;
    // }, error1 => this._message.error(error1.error));
  }

  management() {

  }
}
