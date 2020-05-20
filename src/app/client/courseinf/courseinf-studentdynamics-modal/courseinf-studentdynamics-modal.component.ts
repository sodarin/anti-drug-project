import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CourseInfService } from 'src/app/service/courseinf-frontend/courseinf-frontend.service';
import { ClassInfService } from 'src/app/service/classinf-frontend/classinf-frontend.service';
@Component({
  selector: 'app-courseinf-studentdynamics-modal',
  templateUrl: './courseinf-studentdynamics-modal.component.html',
  styleUrls: ['./courseinf-studentdynamics-modal.component.less'],
  inputs: ["class_or_course_id","type"],
})
export class CourseinfStudentdynamicsModalComponent implements OnInit {
  class_or_course_id ="0";
  type = "course";
  loading: boolean = false;
  data = [
    {
      id:'1',
      name: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      operation: "加入了",
      course: '首领选举',
      datetime: '2019.1.1',
    },
    {
      id:'1',
      name: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      operation: "完成了",
      course: '首领选举',
      datetime: '2019.1.2',
    }
  ];
  constructor(private courseinfservice: CourseInfService, private route: Router,
    private classinfservice: ClassInfService, private notification: NzNotificationService) { }

  ngOnInit() {
    if(this.type=="course"){
      // this.courseinfservice.getCoursesDynamics(this.class_or_course_id).subscribe((res: any) => {
      //   this.setCoursesStdDynamics(res);
      // }, error => {
      //   this.notification.create(
      //     'error',
      //     '错误！',
      //     `${error}`,
      //     { nzDuration: 100 }
      //   )
      // });

      this.classinfservice.getclassstdDynamic("11").subscribe((res: any) => {
        this.setclassstdDynamic(res);
      }, error => {
        this.notification.create(
          'error',
          '发生错误！',
          `${error.error}`)
      });
    
    }else{
      this.classinfservice.getclassstdDynamic(this.class_or_course_id).subscribe((res: any) => {
        this.setclassstdDynamic(res);
      }, error => {
        this.notification.create(
          'error',
          '发生错误！',
          `${error.error}`)
      });
    }
  }

  navigateByUrl(url: string) {
    this.route.navigateByUrl(url)
  }


  setCoursesStdDynamics(res: any) {
    this.data = res.data;
    console.log(this.data)
  }

  setclassstdDynamic(res: any) {
    this.data = res.data;
  }
}
