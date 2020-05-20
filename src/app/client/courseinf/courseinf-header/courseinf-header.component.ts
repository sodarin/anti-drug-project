import { Component, OnInit,EventEmitter } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CourseInfService } from 'src/app/service/courseinf-frontend/courseinf-frontend.service';
import {TestuserService} from '../../../Test/testuser.service'
@Component({
  selector: 'app-courseinf-header',
  templateUrl: './courseinf-header.component.html',
  styleUrls: ['./courseinf-header.component.less'],
  inputs: ["courseid", "user"],
  outputs: ["joinCourse", "exitCourse"]
})
export class CourseinfHeaderComponent implements OnInit {
  courseid = "0"
  currentcourse= {
    id: '001',
    name: '首领选举(记得加确认退出框,私信框)',
    cover: "../../../../assets/img/timg.jpg",
    //课程数
    course_num: 10,
    //二维吗
    qrcode: "../../../../assets/img/timg.jpg",
    //课程是否完结
    isfinish: 'true',
    //参与数
    participants: "10",
    //讨论数
    discussions: "10",
    //热度
    heat: "",
    //更新日期
    update_date: "",
    //教学计划
    teachingplan: "默认教学计划",
    //时效
    term: "永久有效",
    //承诺服务
    commitmentservice: [false, true, true, true],
    serializemode:"none"
  };
  user: any;
  teaching_plan:any;


  iscollect = true;//之后放在user里

  //页头显示用变量
  commitmentservice = ["grey", "", "", ""];
  //退出课程
  CourseExitVisible = false;
  selectedExitReason: string;
  CourseExitinputValue: string;

  //页头显示用变量
  iscollection = "outline";
  islearned = "outline";
  isJoin = false;

  //
  joinCourse: EventEmitter<any>;
  exitCourse: EventEmitter<any>;

  constructor(private notification: NzNotificationService, private courseinfservice: CourseInfService,
    private testuserservice:TestuserService) {
      this.joinCourse = new EventEmitter();
      this.exitCourse = new EventEmitter();
  }

  ngOnInit() {
    this.courseinfservice.getCourse(this.courseid).subscribe((res: any) => {
      this.setcurrentcourse(res);
    }, error => {
      this.notification.create(
        'error',
        '错误！',
        `${error}`,
        { nzDuration: 100 }
      )
    });

    this.courseinfservice.get_teaching_plan(this.courseid).subscribe((res: any) => {
      this.setteaching_plan(res);
    }, error => {
      this.notification.create(
        'error',
        '错误！',
        `${error}`,
        { nzDuration: 100 }
      )
    });


    //仅测试用
    this.user = this.testuserservice.user;

    this.isJoin = this.testuserservice.isInCourse(this.courseid);
  }

  setcurrentcourse(res: any) {
    this.currentcourse = res.data;
    console.log(this.currentcourse.serializemode)

    if (this.currentcourse.cover == "") {
      this.currentcourse.cover = "../../../../assets/img/timg.jpg";
    } else if (this.currentcourse.cover.substr(0, 6) == "public") {
      this.currentcourse.cover = "../../../../assets/img/timg.jpg";
    } else if (this.currentcourse.cover.substr(7, 7) == "edusoho") {
      this.currentcourse.cover = "../../../../assets/img/timg.jpg";
    }else if(this.currentcourse.cover.substr(1,7)=='"large"'){
      this.currentcourse.cover = "../../../../assets/img/timg.jpg";
    }

    // for (var i = 0; i < 4; i++) {
    //   if (this.currentcourse.commitmentservice[i]) {
    //     this.commitmentservice[i] = "magenta";
    //   }
    // }
  }

  setteaching_plan(res:any){
    this.teaching_plan = res.data;
  }

  learnpercent = (percent: number) => `${percent} %`;
  //退学
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

  //加入课程
  joincourse_submit() {
    this.testuserservice.joinCourse(this.courseid);
    this.isJoin = this.testuserservice.isInCourse(this.courseid);
    this.joinCourse.emit("");
  }
  //退出学习
  exitlearn_submit() {
    this.testuserservice.exitCourse(this.courseid);
    this.isJoin = this.testuserservice.isInCourse(this.courseid);
    this.exitCourse.emit("");
  }

  //收藏
  collect_submit() {

  }

  //取消收藏
  uncollect_submit() {

  }

}
