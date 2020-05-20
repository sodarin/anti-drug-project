import { Component, OnInit } from '@angular/core';
import { ClassInfService } from 'src/app/service/classinf-frontend/classinf-frontend.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Component({
  selector: 'app-teacherblock',
  templateUrl: './teacherblock.component.html',
  styleUrls: ['./teacherblock.component.less'],
  inputs: ['teacher']
})
export class TeacherblockComponent implements OnInit {
  teacher: any;

  //私信
  PrivatelettertVisible = false;
  PrivatelettertTitle: string="";
  PrivateletterContent: string="";
  constructor(private classinfservice: ClassInfService,private notification: NzNotificationService) { }

  ngOnInit() {
  }
  //私信
  showPrivateletterfirm(): void {
    this.PrivatelettertVisible = true;
  }

  handleOk_Privateletter(): void {
    if (this.PrivatelettertTitle != "" && this.PrivateletterContent != "") {
      this.classinfservice.privateletter_submit("1","1",this.PrivatelettertTitle,this.PrivateletterContent).subscribe((res: any) => {
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
 follow_submit() {
  this.classinfservice.follow_submit("1","2").subscribe((res: any) => {
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
}

//取消关注
del_follow_submit() {
  this.classinfservice.delfollow_submit("1","1").subscribe((res: any) => {
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
}
}
