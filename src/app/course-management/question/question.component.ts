import { Component, OnInit } from '@angular/core';
import { NzEmptyService } from 'ng-zorro-antd';
import { Router } from '@angular/router'
import { CourseManagementUtilService } from 'src/app/service/course-management-util/course-management-util.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.less']
})
export class QuestionComponent implements OnInit {

  listOfQuestionTypes: any[] = ["按题型", "单选题", "多选题", "问答题", "不定项选择题", "判断题", "填空题", "材料题"]
  listOfCourses: any[] = ["按课程", "默认教学计划"]
  result: any[] = ["2018-2019期中测试"];

  count: number = 0;

  selectedQuestionTypes: string = "按题型";
  selectedCourse: string = "按课程";
  selectVisible: boolean = false;

  courseId: any;


  constructor(
    private _courseManagementUtilService: CourseManagementUtilService,
    private nzEmptyService: NzEmptyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.nzEmptyService.resetDefault();
    this.courseId = this._courseManagementUtilService.setCourseIdFrom(location);
  }

  courseChange(value: string) {
    if (this.selectedCourse != '按课程') {
      this.selectVisible = true;
    } else {
      this.selectVisible = false;
    }
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
