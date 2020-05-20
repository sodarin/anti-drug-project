import { Component, OnInit } from '@angular/core';
import { CourseInfService } from 'src/app/service/courseinf-frontend/courseinf-frontend.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Component({
  selector: 'app-courseinf-material',
  templateUrl: './courseinf-material.component.html',
  styleUrls: ['./courseinf-material.component.less'],
  inputs:["courseid"]
})
export class CourseinfMaterialComponent implements OnInit {
  courseid = "0";
  materials = [
    {
      class: 'Han Solo',
      name: '资料一',
      datetime: '2019.1.1',
      size: '632kb'
    },
    {
      class: 'Han Solo',
      name: '资料二',
      datetime: '2019.1.1',
      size: '632kb'
    }
  ];

  total_material_pages = 1;//总资料页
  current_material_page = 1;//当前资料页


  constructor(private courseinfservice: CourseInfService,private notification: NzNotificationService) { }

  ngOnInit() {
    this.courseinfservice.getCoursesMaterials(this.courseid).subscribe((res: any) => {
      this.setCoursesMaterials(res);
    }, error => {
      this.notification.create(
        'error',
        '错误！',
        `${error}`,
        { nzDuration: 100 }
      )
    });
  }

  setCoursesMaterials(res: any) {
    this.materials = res;
   // this.total_material_pages = res.data.total||0;
  }

  
  onPageChange_material(event?: any) {
    this.courseinfservice.getCoursesMaterials(this.courseid).subscribe((res: any) => {
      this.setCoursesMaterials(res);
    }, error => {
      this.notification.create(
        'error',
        '错误！',
        `${error}`,
        { nzDuration: 100 }
      )
    });
    window.scrollTo(0, 0);
  }

}
