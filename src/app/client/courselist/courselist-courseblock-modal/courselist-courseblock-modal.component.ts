import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Test/course.module';
import {
  Router,
} from '@angular/router';
@Component({
  selector: 'app-courselist-courseblock-modal',
  templateUrl: './courselist-courseblock-modal.component.html',
  styleUrls: ['./courselist-courseblock-modal.component.less'],
  inputs: ['course']
})
export class CourselistCourseblockModalComponent implements OnInit {
  course = {

    picture: "none",//缺少
 

    discussions: "none",//？？？



    id: 99,
    title: "如何拒绝毒品（上）(复制)",
    status: "closed",
    studentNum: 0,
    creator: "admin",
    creatorId: 1,
    createdTime: "1559618580",
    serializeMode: "finished",
    recommended: 0,
    recommendTime: 0,
    recommendOrder: 0,
    categoryName: "寓教于乐"
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  navigateByName(name: string) {
    //this.router.navigateByUrl(url);
  }

}
