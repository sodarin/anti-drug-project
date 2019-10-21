import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-live-course',
  templateUrl: './live-course.component.html',
  styleUrls: ['./live-course.component.less']
})
export class LiveCourseComponent implements OnInit {

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
        name: '直播课程1',
        number: 5,
        state: '已发布',
      },
      {
        name: '直播课程2',
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

  }
}
