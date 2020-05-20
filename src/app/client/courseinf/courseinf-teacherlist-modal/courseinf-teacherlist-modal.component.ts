import { Component, OnInit } from '@angular/core';
import { CourseInfService } from 'src/app/service/courseinf-frontend/courseinf-frontend.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import {Router} from '@angular/router';
@Component({
  selector: 'app-courseinf-teacherlist-modal',
  templateUrl: './courseinf-teacherlist-modal.component.html',
  styleUrls: ['./courseinf-teacherlist-modal.component.less'],
  inputs: ["courseid"],
})
export class CourseinfTeacherlistModalComponent implements OnInit {
  courseid = "0";
  data = [
    { id:"",name: "李丽", positionaltitles: "讲师", autograph: "没有签名", currentlearn: 10, follow: 10, fans: 10,smallAvatar:"",isfollowing:false },
  ];
  //私信
  privateletter_toid = "1";
  PrivatelettertVisible = false;
  PrivatelettertTitle: string="";
  PrivateletterContent: string="";
  loading: boolean = false;
  constructor(private courseinfservice: CourseInfService,private notification: NzNotificationService,private route: Router) { }

  ngOnInit() {
    this.loading = true;
    this.courseinfservice.getCoursesTeachers(this.courseid).subscribe((res: any) => {
      this.loading = false;
      this.setCourseTeachers(res);
    }, error => {
      this.notification.create(
        'error',
        '错误！',
        `${error}`,
        { nzDuration: 100 }
      )
    });
  }

  setCourseTeachers(res: any) {
    this.data = res.data.courseTeachers;

    for(let i=0;i<this.data.length;i++){
      if (this.data[i].smallAvatar == "") {
        this.data[i].smallAvatar = "../../../../assets/img/timg2.jpg";
      } else if (this.data[i].smallAvatar.substr(0, 6) == "public") {
        this.data[i].smallAvatar = "../../../../assets/img/timg2.jpg";
      } else if (this.data[i].smallAvatar.substr(7, 7) == "edusoho") {
        this.data[i].smallAvatar = "../../../../assets/img/timg2.jpg";
      }

        this.courseinfservice.isfollowing("1",this.data[i].id).subscribe((res: any) => {
          this.setstudentfollowing(res.data,i);
        }, error => {
          this.notification.create(
            'error',
            '发生错误！',
            `${error.error}`)
        })


    }
  }

  setstudentfollowing(res:boolean,index:number){
    this.data[index].isfollowing = res;
  }

  showPrivateletterfirm(toid:string): void {
    this.privateletter_toid = toid;
    console.log(toid);
    if(this.privateletter_toid!="1"){
      this.privateletter_toid=toid;
      this.PrivatelettertVisible = true;
    }else {
      this.notification.create(
        'error',
        '发生错误！',
        `不能自己给自己发私信`)
    }
  }

  handleOk_Privateletter(): void {
    if (this.PrivatelettertTitle != "" && this.PrivateletterContent != "") {
      this.courseinfservice.privateletter_submit("1",this.privateletter_toid,this.PrivatelettertTitle,this.PrivateletterContent).subscribe((res: any) => {
        this.notification.create(
          'success',
          '提交成功！',
          `提交成功`)
      }, error => {
        this.notification.create(
          'error',
          '发生错误！',
          `${error.error}`)
      });

      this.PrivatelettertVisible = false;
      //There are something
      this.PrivatelettertTitle = "";
      this.PrivateletterContent = "";
    } else {
      this.notification.create(
        'error',
        '发生错误！',
        `输入不能为空`);
    }
  }

  handleCancel_Privateletter(): void {
    console.log('Button cancel clicked!');
    this.PrivatelettertVisible = false;
    this.PrivatelettertTitle = "";
    this.PrivateletterContent = "";
  }

//关注
follow_submit(toid:string) {

  if(toid!="1"){
    this.courseinfservice.follow_submit("1",toid).subscribe((res: any) => {
      this.notification.create(
        'success',
        '提交成功！',
        `提交成功`)
  
        this.courseinfservice.getCoursesTeachers(this.courseid).subscribe((res: any) => {
          this.setCourseTeachers(res);
        }, error => {
          this.notification.create(
            'error',
            '错误！',
            `${error}`,
            { nzDuration: 100 }
          )
        });
    }, error => {
      this.notification.create(
        'error',
        '发生错误！',
        `${error.error}`)
    });
  }else{
    this.notification.create(
      'error',
      '发生错误！',
      `不能自己关注自己`)
  }
}

//取消关注
del_follow_submit(toid:string) {
  this.courseinfservice.delfollow_submit("1",toid).subscribe((res: any) => {
    this.notification.create(
      'success',
      '提交成功！',
      `提交成功`)

      this.courseinfservice.getCoursesTeachers(this.courseid).subscribe((res: any) => {
        this.setCourseTeachers(res);
      }, error => {
        this.notification.create(
          'error',
          '错误！',
          `${error}`,
          { nzDuration: 100 }
        )
      });
  }, error => {
    this.notification.create(
      'error',
      '发生错误！',
      `${error.error}`)
  });
}

  navigateByUrl(url: string) {
    this.route.navigateByUrl(url)
  }

}
