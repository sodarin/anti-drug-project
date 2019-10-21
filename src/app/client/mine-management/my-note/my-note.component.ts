import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-note',
  templateUrl: './my-note.component.html',
  styleUrls: ['./my-note.component.less']
})
export class MyNoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  loading = false;
  data = [
    {
      title: '默认教学笔记',
      descr:'共1篇笔记',
      num:'2',
      source:'默认教学计划 - 课程发布指南 ',
      content:'最后更新于2019-05-01'
    },
    {
      title: '这是一个笔记',
      descr:'共1篇笔记',
      num: '5',
      source: '默认教学计划 - 课程发布指南 ',
      content:"最后更新于2019-10-01"
    },

  ];
}
