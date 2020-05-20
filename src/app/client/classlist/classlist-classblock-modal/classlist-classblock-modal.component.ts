import { Component, OnInit } from '@angular/core';

import {
  Router,
} from '@angular/router';
@Component({
  selector: 'app-classlist-classblock-modal',
  templateUrl: './classlist-classblock-modal.component.html',
  styleUrls: ['./classlist-classblock-modal.component.less'],
  inputs:["classes"]
})
export class ClasslistClassblockModalComponent implements OnInit {
  classes = {
    id: 0,
    title: "测试",
    smallPicture: "",
    courseNum: 0,
    studentNum: 0,
    postNum: 0,
    service: null,
    totalNum: 14,
    recommended: 0,
    recommendedSeq: 1,
    recommendedTime: 1570875368,
    recommendedTimeString: "2019-10-12 18:16:08",
    classroomCategory: null,
    status: "draft"
  };
  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }



}
