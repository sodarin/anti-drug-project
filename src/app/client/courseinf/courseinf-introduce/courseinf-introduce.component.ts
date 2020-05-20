import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CourseInfService } from 'src/app/service/courseinf-frontend/courseinf-frontend.service';
@Component({
  selector: 'app-courseinf-introduce',
  templateUrl: './courseinf-introduce.component.html',
  styleUrls: ['./courseinf-introduce.component.less'],
  inputs: ["courseid"]
})
export class CourseinfIntroduceComponent implements OnInit {
  courseid = "0";
  //课程介绍
  introduces = [{ subtitle: "课程介绍", summary: "暂无" }, { subtitle: "课程目标", summary: "暂无" }, { subtitle: "适合人群", summary: "暂无" }];
  
  constructor(private courseinfservice: CourseInfService,private notification: NzNotificationService) { }

  ngOnInit() {
    this.courseinfservice.getCoursesIntroduction(this.courseid).subscribe((res: any) => {
      this.setCoursesIntroduce(res);
    }, error => {
      this.notification.create(
        'error',
        '错误！',
        `${error}`,
        { nzDuration: 100 }
      )
    });
  }

  setCoursesIntroduce(res: any) {
    this.introduces = [res];
  }

}
