import { Component, OnInit } from '@angular/core';
import {NzModalService} from "ng-zorro-antd";
import {ActivatedRoute} from "@angular/router";
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-teaching-class',
  templateUrl: './teaching-class.component.html',
  styleUrls: ['./teaching-class.component.less']
})
export class TeachingClassComponent implements OnInit {


  courseList = [];
  classroomId: string;

  constructor(
    private _modal: NzModalService,
    private routerInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.courseList.push({
        title: '虹桥中学（二年级一班）毒品预防教育',
        descr: '共5课   1',
        stuNum: '5',
        topicNum: '3',
        taskNum: '2',

      },
      {
        title: '虹桥中学（二年级一班）毒品预防教育',
        descr: '共5课   1',

        stuNum: '5',
        topicNum: '3',
        taskNum: '2',
      },
      {
        title: '虹桥中学（二年级一班）毒品预防教育',
        descr: '共5课   1',

        stuNum: '5',
        topicNum: '3',
        taskNum: '2',
      },
      {
        title: '虹桥中学（二年级一班）毒品预防教育',
        descr: '共5课   1',
        stuNum: '5',
        topicNum: '3',
        taskNum: '2',
      },
    );
    this.classroomId = this.routerInfo.snapshot.params['id']
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.courseList, event.previousIndex, event.currentIndex);
  }



}
