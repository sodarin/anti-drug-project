import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-course-management-table',
  templateUrl: './admin-course-management-table.component.html',
  styleUrls: ['./admin-course-management-table.component.less']
})
export class AdminCourseManagementTableComponent implements OnInit {

  options = [
    {
      value: '学堂在线',
      label: '学堂在线',
      children: [
        {
          value: '小学年级',
          label: '小学年级',
          isLeaf: true
        },
        {
          value: '初中年级',
          label: '初中年级',
          isLeaf: true
        },
        {
          value: '高中年级',
          label: '高中年级',
          isLeaf: true
        },
        {
          value: '高职年级',
          label: '高职年级',
          isLeaf: true
        }
      ]
    },{
      label: '教师培训',
      value: '教师培训',
      isLeaf: true
    }, {
      label: '寓教于乐',
      value: '寓教于乐',
      isLeaf: true
    }, {
      label: '专题讲座',
      value: '专题讲座',
      isLeaf: true
    }, {
      label: '使用教程',
      value: '使用教程',
      children: [
        {
          label: '管理员',
          value: '管理员',
          isLeaf: true
        },
        {
          label: '教师',
          value: '教师',
          isLeaf: true
        },
        {
          label: '学员',
          value: '学员',
          isLeaf: true
        }
      ]
    }
  ];
  courseClassification = [];
  courseStatus: string;
  courseType: string;
  title: string;
  creator: string;

  totalCourse = 0;

  constructor() { }

  ngOnInit() {
  }

  filterCourse() {

  }

}
