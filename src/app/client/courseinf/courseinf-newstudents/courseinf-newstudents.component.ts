import { Component, OnInit } from '@angular/core';
import { CourseInfService } from 'src/app/service/courseinf-frontend/courseinf-frontend.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import {Router} from '@angular/router';
@Component({
  selector: 'app-courseinf-newstudents',
  templateUrl: './courseinf-newstudents.component.html',
  styleUrls: ['./courseinf-newstudents.component.less'],
  inputs: ["courseid","studentdata"],
})
export class CourseinfNewstudentsComponent implements OnInit {
  courseid = "0";
  studentdata: any;
  //私信
  privateletter_toid = "1";
  PrivatelettertVisible = false;
  PrivatelettertTitle: string="";
  PrivateletterContent: string="";
  constructor(private courseinfservice: CourseInfService,private notification: NzNotificationService,private route: Router) { }

  ngOnInit() {
    this.courseinfservice.getstudents(this.courseid).subscribe((res: any) => {
      this.setstudents(res);
    }, error => {
      this.notification.create(
        'error',
        '错误！',
        `${error}`,
        { nzDuration: 100 }
      )
    });
  }

  setstudents(res: any) {
    this.studentdata = res.data;

    for(let i=0;i<this.studentdata.length;i++){
      if (this.studentdata[i].smallAvatar == "") {
        this.studentdata[i].smallAvatar = "../../../../assets/img/timg2.jpg";
      } else if (this.studentdata[i].smallAvatar.substr(0, 6) == "public") {
        this.studentdata[i].smallAvatar = "../../../../assets/img/timg2.jpg";
      } else if (this.studentdata[i].smallAvatar.substr(7, 7) == "edusoho") {
        this.studentdata[i].smallAvatar = "../../../../assets/img/timg2.jpg";
      }

      this.courseinfservice.isfollowing("1",this.studentdata[i].id).subscribe((res: any) => {
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
    this.studentdata[index].isfollowing = res;
  }

  //私信
  showPrivateletterfirm(toid:string): void {
    this.privateletter_toid = toid;

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
    this.form_init();
  }

 //关注
 follow_submit(toid:string) {
  if(toid!="1"){
  this.courseinfservice.follow_submit("1",toid).subscribe((res: any) => {
    this.notification.create(
      'success',
      '提交成功！',
      `提交成功`)

      this.courseinfservice.getstudents(this.courseid).subscribe((res: any) => {
        this.setstudents(res);
      }, error => {
        this.notification.create(
          'error',
          '发生错误！',
          `${error.error}`)
      }) 
  }, error => {
    this.notification.create(
      'error',
      '发生错误！',
      `${error.error}`)
  });}else{
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

      this.courseinfservice.getstudents(this.courseid).subscribe((res: any) => {
        this.setstudents(res);
      }, error => {
        this.notification.create(
          'error',
          '发生错误！',
          `${error.error}`)
      })
  }, error => {
    this.notification.create(
      'error',
      '发生错误！',
      `${error.error}`)
  });
}

  form_init(){
    this.PrivatelettertTitle="";
    this.PrivateletterContent="";
  }

  navigateByUrl(url: string) {
    this.route.navigateByUrl(url)
  }
}
