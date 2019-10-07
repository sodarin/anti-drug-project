import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';

const count = 5;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.less']
})
export class TopicComponent implements OnInit {

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
