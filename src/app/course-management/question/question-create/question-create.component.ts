import { Component, OnInit } from '@angular/core';
import { CourseManagementUtilService } from 'src/app/service/course-management-util/course-management-util.service';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.less']
})
export class QuestionCreateComponent implements OnInit {

  courseId: any;
  constructor(
    private _courseManagementUtilService: CourseManagementUtilService
  ) { }

  ngOnInit() {
    this.courseId=this._courseManagementUtilService.setCourseIdFrom(location)
  }

}
