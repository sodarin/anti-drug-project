import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Component({
  selector: 'app-courseinf-introduce',
  templateUrl: './courseinf-introduce.component.html',
  styleUrls: ['./courseinf-introduce.component.less'],
  inputs:["introduces"]
})
export class CourseinfIntroduceComponent implements OnInit {
  //课程介绍
  introduces = null;
  
  constructor(private notification: NzNotificationService) { }

  ngOnInit() {
  }



}
