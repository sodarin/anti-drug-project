import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-qa',
  templateUrl: './student-qa.component.html',
  styleUrls: ['./student-qa.component.less']
})
export class StudentQAComponent implements OnInit {

  constructor() { }


  loading = false;
  data = [
    {
      title: '创建的课程不可以删除吗',
      descr:'来自默认教学计划 - 课程发布指南 · 2浏览',
      num:'2',
      source:'默认教学计划 - 课程发布指南 '
    },
    {
      title: '学员可以在网校进行那些操作呢？',
      descr:'来自默认教学计划 - 课程发布指南 · 5浏览',
      num: '5',
      source: '默认教学计划 - 课程发布指南 ',
    },

  ];

  ngOnInit(): void {

  }



}
