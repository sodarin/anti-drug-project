import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tutor-setting',
  templateUrl: './tutor-setting.component.html',
  styleUrls: ['./tutor-setting.component.less']
})
export class TutorSettingComponent implements OnInit {

  classroomid: string;

  tutorList = [];
  loading: boolean = false;

  constructor(
    private routerInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.classroomid = location.pathname.split('/')[3];
    this.tutorList = [
      {'name': '张三'}
    ]
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tutorList, event.previousIndex, event.currentIndex);
  }

  searchStudent(data: any) {
    let tempList = this.tutorList;
    tempList.push({'name': data});
    this.tutorList = [...tempList];
  }

}
