import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Test/course.module';

@Component({
  selector: 'app-courselist-courseblock-modal',
  templateUrl: './courselist-courseblock-modal.component.html',
  styleUrls: ['./courselist-courseblock-modal.component.less'],
  inputs:['course']
})
export class CourselistCourseblockModalComponent implements OnInit {
  course:Course;

  constructor() { }

  ngOnInit() {
  }

}
