import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-head-teacher-setting',
  templateUrl: './head-teacher-setting.component.html',
  styleUrls: ['./head-teacher-setting.component.less']
})
export class HeadTeacherSettingComponent implements OnInit {

  classroomId: string;

  teacherList = [];
  loading: boolean = false;

  constructor(
    private routerInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.classroomId = location.pathname.split('/')[3];
    this.teacherList.push({
      name: 'chen'
    })
  }

  searchTeacher(data: any) {
    this.teacherList.forEach(item => {
      item.name = data
    });
  }

  drop(data: any) {

  }

}
