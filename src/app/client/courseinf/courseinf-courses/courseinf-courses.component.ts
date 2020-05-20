import { Component, OnInit } from '@angular/core';
import { CourseInfService } from 'src/app/service/courseinf-frontend/courseinf-frontend.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import {Router} from '@angular/router';
@Component({
  selector: 'app-courseinf-courses',
  templateUrl: './courseinf-courses.component.html',
  styleUrls: ['./courseinf-courses.component.less'],
  inputs:["courseid"],
})
export class CourseinfCoursesComponent implements OnInit {
  courseid="0";
  //课程列表
  courses = [{ title: "任务1: 禁毒历史（下）"}];

  total_course_p_num = 1;//总课程页码
  coursepage_number = 1;//当前课程页码
  
  constructor(private courseinfservice: CourseInfService,private notification: NzNotificationService,private route: Router) { }

  ngOnInit() {
    this.courseinfservice.getCoursesCatalog(this.courseid).subscribe((res: any) => {
      this.setCoursesCatalog(res);
    }, error => {
      this.notification.create(
        'error',
        '错误！',
        `${error}`,
        { nzDuration: 100 }
      )
    });
  }

  setCoursesCatalog(res: any) {
    this.courses = res;
  }

  
  navigateByUrl(url: string) {
    this.route.navigateByUrl(url)
  }

}
