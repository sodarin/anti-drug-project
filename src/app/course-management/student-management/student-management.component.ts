import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.less']
})
export class StudentManagementComponent implements OnInit {

  courseId: string;

  constructor(
    private routerInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.courseId = location.pathname.split('/')[3];
  }

  openAddingStudentModal() {

  }

}
