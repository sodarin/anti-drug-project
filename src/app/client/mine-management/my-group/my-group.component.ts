import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-group',
  templateUrl: './my-group.component.html',
  styleUrls: ['./my-group.component.less']
})
export class MyGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  loading = false;
  
  data = [
    {
      title: '课程中可以导入哪些第三方站点视频？',
      descr:'admin发起了话题 · 2015-06-11 · ES学习圈 · 0回复',
      num:'0',
      source:' '
    },
    {
      title: '学员的昵称可以修改吗？',
      descr:'admin发起了话题 · 2015-06-11 · ES学习圈 · 5回复',
      num: '5',
      source: '',
    },
    {
      title: '学员注册时邮箱填写错误，后台可以手动帮他修改么？',
      descr:'admin发起了话题 · 2015-06-11 · ES学习圈 · 2回复',
      num: '2',
      source: '',
    },
  ];

}
