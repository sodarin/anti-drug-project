import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  notice = [
    '公告1',
    '公告2',
    '公告3',
    '公告4',
    '公告5'
  ];

  order = [
    '订单1',
    '订单2',
    '订单3',
    '订单4',
    '订单5'
  ];
  
  course = [
    '课程1',
    '课程2',
    '课程3',
    '课程4',
    '课程5'
  ];
  
  task = [
    '任务1',
    '任务2',
    '任务3',
    '任务4',
    '任务5'
  ];
  
  question = [
    '问答1',
    '问答2',
    '问答3',
    '问答4',
    '问答5'
  ];
  
  comment = [
    '评论1',
    '评论2',
    '评论3',
    '评论4',
    '评论5'
  ];
  

  constructor(private msg: NzMessageService) {}

  ngOnInit(): void {
  }
}
