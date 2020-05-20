import { Component, OnInit } from '@angular/core';
import { ClassInfService } from 'src/app/service/classinf-frontend/classinf-frontend.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import {Router} from '@angular/router';
@Component({
  selector: 'app-classinf-studentlist',
  templateUrl: './classinf-studentlist.component.html',
  styleUrls: ['./classinf-studentlist.component.less'],
  inputs: ["classid"]
})
export class ClassinfStudentlistComponent implements OnInit {
  classid = "0";
  //最新学员列表
  studentdata = [{id:"1", name: "Nana", autograph: "没有签名", currentlearn: 10, follow: 10, fans: 10,smallavatar:"",ratingnum:"4",isfollowing:false }];
  //私信
  privateletter_toid = "1";
  PrivatelettertVisible = false;
  PrivatelettertTitle: string="";
  PrivateletterContent: string="";
  constructor(private classinfservice: ClassInfService,private notification: NzNotificationService,private route: Router) { }

  ngOnInit() {
    this.classinfservice.getstudents(this.classid).subscribe((res: any) => {
      this.setstudents(res);
    }, error => {
      this.notification.create(
        'error',
        '发生错误！',
        `${error.error}`)
    })
  }

  setstudents(res: any) {
    this.studentdata = res.data.studentList;
    for(let i=0;i<this.studentdata.length;i++){
      if (this.studentdata[i].smallavatar == "") {
        this.studentdata[i].smallavatar = "../../../../assets/img/timg2.jpg";
      } else if (this.studentdata[i].smallavatar.substr(0, 6) == "public") {
        this.studentdata[i].smallavatar = "../../../../assets/img/timg2.jpg";
      } else if (this.studentdata[i].smallavatar.substr(7, 7) == "edusoho") {
        this.studentdata[i].smallavatar = "../../../../assets/img/timg2.jpg";
      }
      
      this.classinfservice.isfollowing("1",this.studentdata[i].id).subscribe((res: any) => {
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
      this.classinfservice.privateletter_submit("1", this.privateletter_toid,this.PrivatelettertTitle,this.PrivateletterContent).subscribe((res: any) => {
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
  this.classinfservice.follow_submit("1",toid).subscribe((res: any) => {
    this.notification.create(
      'success',
      '提交成功！',
      `提交成功`)

      this.classinfservice.getstudents(this.classid).subscribe((res: any) => {
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
  this.classinfservice.delfollow_submit("1",toid).subscribe((res: any) => {
    this.notification.create(
      'success',
      '提交成功！',
      `提交成功`)

      this.classinfservice.getstudents(this.classid).subscribe((res: any) => {
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

  navigateByUrl(url: string) {
    this.route.navigateByUrl(url)
  }
}
