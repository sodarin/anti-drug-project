import { Component, OnInit } from '@angular/core';
import { ClassInfService } from 'src/app/service/classinf-frontend/classinf-frontend.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-classinf-teachers',
  templateUrl: './classinf-teachers.component.html',
  styleUrls: ['./classinf-teachers.component.less'],
  inputs: ["classid"],
})
export class ClassinfTeachersComponent implements OnInit {
  classid = "0";
  //师资
  teachersdata = [
    { name: "李丽", positionaltitles: "讲师", autograph: "流星划破天空，贯穿虚伪之泪 \n ————————Astar", currentlearn: 10, follow: 10, fans: 10,largeAvatar:"" },
    { name: "李丽", positionaltitles: "讲师", autograph: "没有签名", currentlearn: 10, follow: 10, fans: 10,largeAvatar:"" },
    { name: "李丽", positionaltitles: "讲师", autograph: "没有签名", currentlearn: 10, follow: 10, fans: 10,largeAvatar:"" }
  ];

  //几个页码
  total_teachers_pages = 50;//总老师页
  current_teachers_page = 1;//当前老师页

  constructor(private classinfservice: ClassInfService,private notification: NzNotificationService) { }

  ngOnInit() {
    this.classinfservice.getclassTeachers(this.classid,this.current_teachers_page).subscribe((res: any) => {
      this.setclassTeachers(res);
    }, error => {
      this.notification.create(
        'error',
        '发生错误！',
        `${error.error}`)
    })
  }

  setclassTeachers(res: any) {
    this.teachersdata = res.data.teacherList;
    this.total_teachers_pages = res.data.total;

    for(var i=0;i<this.teachersdata.length;i++){
      if (this.teachersdata[i].largeAvatar == "") {
        this.teachersdata[i].largeAvatar = "../../../../assets/img/timg2.jpg";
      } else if (this.teachersdata[i].largeAvatar.substr(0, 6) == "public") {
        this.teachersdata[i].largeAvatar = "../../../../assets/img/timg2.jpg";
      } else if (this.teachersdata[i].largeAvatar.substr(7, 7) == "edusoho") {
        this.teachersdata[i].largeAvatar = "../../../../assets/img/timg2.jpg";
      }
    }
  }

  onPageChange_teacher(event?: any) {
    this.classinfservice.getclassTeachers(this.classid,this.current_teachers_page).subscribe((res: any) => {
      this.setclassTeachers(res);
    }, error => {
      this.notification.create(
        'error',
        '发生错误！',
        `${error.error}`)
    })
    window.scrollTo(0, 0);
  }

}
