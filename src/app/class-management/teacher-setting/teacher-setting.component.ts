import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-teacher-setting',
  templateUrl: './teacher-setting.component.html',
  styleUrls: ['./teacher-setting.component.less']
})
export class TeacherSettingComponent implements OnInit {

  teacherList = [];

  loading: boolean = false;

  constructor() { }

  ngOnInit() {
    this.teacherList = [
      {'name': 'admin'},
      {'name': 'ddd'},
      {'name': 'aaa'}
    ]
  }


  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.teacherList, event.previousIndex, event.currentIndex);
  }

}
