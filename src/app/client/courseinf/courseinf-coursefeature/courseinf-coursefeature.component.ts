import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-courseinf-coursefeature',
  templateUrl: './courseinf-coursefeature.component.html',
  styleUrls: ['./courseinf-coursefeature.component.less'],
  inputs:["coursefeaturedata"],
})
export class CourseinfCoursefeatureComponent implements OnInit {
  //课程特点列表
  coursefeaturedata = [{ title: "没有特色" }];
  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateByUrl(url: string) {
    this.route.navigateByUrl(url)
  }

}
