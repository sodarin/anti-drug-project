import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-list-student',
  templateUrl: './dashboard-list-student.component.html',
  styleUrls: ['./dashboard-list-student.component.less']
})
export class DashboardListStudentComponent implements OnInit {

  studentList = [
    {
      name: "赵伟",
      rating: 5,
      course: "初中第1课 毒品-人类的公敌",
      level: "单元测试",
      time: "10天前",
      status: "开始学习",
      comment: "感觉非常震惊！",
    },
    {
      name: "小明",
      rating: 4,
      course: "初中第1课 毒品-人类的公敌",
      level: "单元测试",
      time: "10天前",
      status: "开始学习",
      comment: "感觉非常震惊！",
    },
    {
      name: "小丽",
      rating: 3,
      course: "初中第1课 毒品-人类的公敌",
      level: "单元测试",
      time: "10天前",
      status: "开始学习",
      comment: "非常震惊！",
    },
    {
      name: "小刚",
      rating: 2,
      course: "初中第1课 毒品-人类的公敌",
      level: "单元测试",
      time: "10天前",
      status: "开始学习",
      comment: "震惊！",
    },

  ];
  constructor() { }

  ngOnInit() {
  }

}
