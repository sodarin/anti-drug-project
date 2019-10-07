import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-class-course',
  templateUrl: './class-course.component.html',
  styleUrls: ['./class-course.component.less']
})
export class ClassCourseComponent implements OnInit {

  @Input()
  name: string;
  recordList = [];
  total: number;
  loading: boolean = false;
  pageIndex: number = 1;

  constructor(
    private routerInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.recordList = [
      {
        name: '班级课程1',
        course: '这是一个班级课程',
        state: '已关闭',

      },
      {
        name: '班级课程2',
        course: '这是一个班级课程',
        state: '已关闭',

      },
      {
        name: '班级',
        course: '这是一个班级课程',
        state: '已关闭',

      }

    ]
  }

  filterStudent() {

  }

  searchData(pageIndex: number = this.pageIndex) {

  }

}
