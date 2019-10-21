import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-teacher-management',
  templateUrl: './teacher-management.component.html',
  styleUrls: ['./teacher-management.component.less']
})
export class TeacherManagementComponent implements OnInit {

  teacherList = [];
  courseId: string;

  loading: boolean = false;

  constructor() { }

  ngOnInit() {
    this.courseId = location.pathname.split('/')[3];
    this.teacherList = [
      {name: 'admin'},
      {name: 'ddd'},
      {name: 'aaa'}
    ]
  }


  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.teacherList, event.previousIndex, event.currentIndex);
  }

  addTeacher(data: any) {
    this.teacherList.push({name: data})
  }

}
