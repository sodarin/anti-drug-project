import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-head-teacher-setting',
  templateUrl: './head-teacher-setting.component.html',
  styleUrls: ['./head-teacher-setting.component.less']
})
export class HeadTeacherSettingComponent implements OnInit {

  classroomId: number;

  teacherList = [];
  loading: boolean = false;

  constructor(
    private routerInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.classroomId = this.routerInfo.snapshot.params['id'];
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
