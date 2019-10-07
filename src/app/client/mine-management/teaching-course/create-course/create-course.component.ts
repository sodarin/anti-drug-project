import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.less']
})
export class CreateCourseComponent implements OnInit {

  location: Location;


  classroomId: string;

  classroom: any;

  constructor(
    private routeInfo: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.location = location;
    this.classroomId = this.routeInfo.snapshot.params['id']
  }


//创建课程
  CreateCourse() {

  }
//取消创建
  Cancel() {

  }
}
