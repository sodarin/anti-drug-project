import { Component, OnInit } from '@angular/core';
import {NzModalService} from "ng-zorro-antd";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-learned-course',
  templateUrl: './learned-course.component.html',
  styleUrls: ['./learned-course.component.less']
})
export class LearnedCourseComponent implements OnInit {


  courseList = [];
  constructor(
    private _modal: NzModalService,
    private routerInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.courseList.push({
        title: '初中第6课 看清诱惑远离陷阱',
        descr: '学习进度',
        num:100,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',

      },
      {
        title: '初中第3课 看清毒品的危害',
        descr: '学习进度',
        num:100,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      },
      {
        title: '初中第6课 看清诱惑远离陷阱',
        descr: '学习进度',
        num:100,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',

      },
      {
        title: '初中第3课 看清毒品的危害',
        descr: '学习进度',
        num:100,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      },
    );
  }
//查看课程
  viewCourse() {

  }
//查看班级
  viewClass() {

  }
}
