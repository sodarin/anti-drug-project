import { Component, OnInit } from '@angular/core';
import {NzModalService} from "ng-zorro-antd";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-learning-course',
  templateUrl: './learning-course.component.html',
  styleUrls: ['./learning-course.component.less']
})
export class LearningCourseComponent implements OnInit {


  courseList = [];
  constructor(
    private _modal: NzModalService,
    private routerInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.courseList.push({
        title: '初中第6课 看清诱惑远离陷阱',
        descr: '学习进度',
        num:50,
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
        num:50,
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

//继续学习
  continueLearning() {

  }
//查看班级
  viewClass() {

  }
}
