import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-setting',
  templateUrl: './student-setting.component.html',
  styleUrls: ['./student-setting.component.less']
})
export class StudentSettingComponent implements OnInit {

  classroomId: string;

  constructor(
    private routerInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.classroomId = this.routerInfo.snapshot.params['id']
  }

  openAddingStudentModal() {

  }

}
