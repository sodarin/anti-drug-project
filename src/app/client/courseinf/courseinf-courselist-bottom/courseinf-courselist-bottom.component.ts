import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CourseInfService } from 'src/app/service/courseinf-frontend/courseinf-frontend.service';
@Component({
  selector: 'app-courseinf-courselist-bottom',
  templateUrl: './courseinf-courselist-bottom.component.html',
  styleUrls: ['./courseinf-courselist-bottom.component.less'],
  inputs:["courseid"],
})
export class CourseinfCourselistBottomComponent implements OnInit {
  courseid = "";
  courseList=[];
  constructor(private courseinfservice: CourseInfService,private notification: NzNotificationService) { }

  ngOnInit() {
    this.courseinfservice.getRelativeCourses(this.courseid).subscribe((res: any) => {
      this.setRelativeCourses(res);
    }, error => {
      this.notification.create(
        'error',
        '错误！',
        `${error}`,
        { nzDuration: 100 }
      )
    });
  }

  setRelativeCourses(res: any) {
    this.courseList = res.data;
  }

}
