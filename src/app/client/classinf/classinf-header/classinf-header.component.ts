import { Component, OnInit } from '@angular/core';
import { ClassInfService } from 'src/app/service/classinf-frontend/classinf-frontend.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import {TestuserService} from '../../../Test/testuser.service'
@Component({
  selector: 'app-classinf-header',
  templateUrl: './classinf-header.component.html',
  styleUrls: ['./classinf-header.component.less'],
  inputs: ["user","classid"],
})
export class ClassinfHeaderComponent implements OnInit {
  classid = "0";
  user: any;
  currentclass: any ;
    // =
    // {
    //   //二维吗
    //   qrcode: "../../../../assets/img/timg.jpg",
    //   //时效
    //   term: "None",
    //   //承诺服务
    //   commitmentservice: [false, false, false, false, false, false],
    //
    //   classroomCategory: "高中班级",
    //   courseNum: 1,
    //   id: 10,
    //   postNum: 2,
    //   recommended: 0,
    //   recommendedSeq: 100,
    //   recommendedTime: 0,
    //   recommendedTimeString: "1970-01-01 08:00:00",
    //   //service: "["event","liveAnswer","teacherAnswer","testpaperReview","homeworkReview"]",
    //   smallpicture: "public://course/2019/06-25/1753288228b6372843.jpg",
    //   status: "published",
    //   studentNum: 56,
    //   title: "沈阳市广全学校禁毒教学活动",
    //   totalNum: 1,
    //   ratingnum:1
    // };


  //页头显示用变量
  commitmentservice = ["grey", "", "", "", "", ""];
  isJoin:boolean = false;

  //退出班级
  CourseExitVisible = false;
  selectedExitReason: string;
  CourseExitinputValue: string;


  constructor(private classinfservice: ClassInfService, private notification: NzNotificationService,
    private testuserservice:TestuserService) {
  }

  ngOnInit() {
    //初始化当前页码数据
    this.classinfservice.getClass(this.classid).subscribe((res: any) => {
      this.setcurrentclass(res);
    }, error => {
      this.notification.create(
        'error',
        '发生错误！',
        `${error.error}`)
    });

    //仅测试用
    this.user = this.testuserservice.user;

    this.isJoin = this.testuserservice.isInClass(this.classid);


  }
  
  setcurrentclass(res: any) {
    this.currentclass = res.data;
    if (this.currentclass.smallpicture == "") {
      this.currentclass.smallpicture = "../../../../assets/img/timg.jpg";
    } else if (this.currentclass.smallpicture.substr(0, 6) == "public") {
      this.currentclass.smallpicture = "../../../../assets/img/timg.jpg";
    } else if (this.currentclass.smallpicture.substr(7, 7) == "edusoho") {
      this.currentclass.smallpicture = "../../../../assets/img/timg.jpg";
    }
    //console.log(this.currentclass);
    //服务相关
    // for (var i = 0; i < 6; i++) {
    //   if (this.currentclass.commitmentservice[i]) {
    //     this.commitmentservice[i] = "magenta";
    //   }
    // }
  }

  //退班级
  showExitCoursefirm(): void {
    this.CourseExitVisible = true;
  }

  handleOk_ExitCourse(): void {
    if (this.selectedExitReason!="其他"||this.CourseExitinputValue != "") {
      this.CourseExitVisible = false;
      this.exitlearn_submit();
      //There are something
      this.selectedExitReason = "";
      this.CourseExitinputValue = "";
    } else {
      this.notification.create(
        'error',
        '发生错误！',
        `输入不能为空`);
    }

  }

  handleCancel_ExitCourse(): void {
    this.CourseExitVisible = false;
    this.selectedExitReason = "";
    this.CourseExitinputValue = "";
  }

  //加入班级
  joinclass_submit() {
    this.testuserservice.joinClass(this.classid);
    this.isJoin = this.testuserservice.isInClass(this.classid);
    // this.classinfservice.joinclass_submit(this.classid, "0").subscribe((res: any) => {
    //   this.notification.create(
    //     'success',
    //     '提交成功！',
    //     `提交成功`)
    // }, error => {
    //   this.notification.create(
    //     'error',
    //     '发生错误！',
    //     `${error.error}`)
    // })
  }

  //退出学习
  exitlearn_submit() {
    this.testuserservice.exitClass(this.classid);
    this.isJoin = this.testuserservice.isInClass(this.classid);
    // this.classinfservice.exitlearn_submit(this.classid, "0").subscribe((res: any) => {
    //   this.notification.create(
    //     'success',
    //     '提交成功！',
    //     `提交成功`)
    // }, error => {
    //   this.notification.create(
    //     'error',
    //     '发生错误！',
    //     `${error.error}`)
    // })
  }

}
