import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, ViewRef, Input } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import {
  ActivatedRoute,
  Router,
  Params
} from '@angular/router';
import { CourseService } from 'src/app/service/courselist-frontend/courselist-frontend.service';
import { CourseInfService } from 'src/app/service/courseinf-frontend/courseinf-frontend.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import {TestuserService} from '../../Test/testuser.service'
@Component({
  selector: 'app-courseinf',
  templateUrl: './courseinf.component.html',
  styleUrls: ['./courseinf.component.less']
})
export class CourseinfComponent implements OnInit {
  [x: string]: any;
  courseid = '0';

  //当前用户
  user = {
    isJoin: false,
    iscollection: true,
    islearned: true,
    finished: 5,
    currented: 5,
  }

  isJoin = false;

  //课程特点列表  暂时不做
  //coursefeaturedata = [{ title: "没有特色" }];
  
  //公告历史记录
  // noticeHistory = [{ id: '1', teachplan: "默认教学计划", content: "通知", startdate: "2019-3-3", enddate: "2019-3-5" },
  // { id: '1', teachplan: "默认教学计划", content: "通知2", startdate: "2019-3-5", enddate: "2019-3-5" }
  // ];


  constructor(private courseservice: CourseService, private modalService: NzModalService, private courseinfservice: CourseInfService,
    private router: Router, private activateInfo: ActivatedRoute, private message: NzMessageService, 
    private notification: NzNotificationService,private testuserservice:TestuserService) {
    // route.queryParams.subscribe(queryParams => {
    //   this.coursepage_number = queryParams.coursepage || "1";
    //   this.currenttopicpage = queryParams.topicpage || "1";
    //   this.current_notespage = queryParams.notepage || "1";
    //   this.current_comment_page = queryParams.commentpage || "1";
    //   this.current_material_page = queryParams.materialpage || "1";
    //   this.type_topic = queryParams.topic_type || "All";
    //   this.order_topic = queryParams.topic_order || "New";
    //   this.order_note = queryParams.note_order || "New";
    //   this.select_note = this.currentcourse.name;
    // })
  }

  ngOnInit() {
    //获取当前页id
    this.activateInfo.params.subscribe(
      (params: Params) => {
        this.courseid = params["id"];
      }, error => {
        this.notification.create(
          'error',
          '发生错误！',
          `${error.error}`)
      }
    )
    //仅测试用
    //this.user = this.testuserservice.user;
    this.isJoin = this.testuserservice.isInCourse(this.courseid);
    //初始化当前页码数据

    // this.courseinfservice.getUser(this.courseid).subscribe((res: any) => {
    //   this.setuser(res);
    // }, error => {
    //   this.notification.create(
    //     'error',
    //     '错误！',
    //     `${error}`,
    //     { nzDuration: 100 }
    //   )
    // });

    // this.courseinfservice.getCoursesFeatures(this.courseid).subscribe((res: any) => {
    //   this.setCoursesFeatures(res);
    // }, error => {
    //   this.notification.create(
    //     'error',
    //     '错误！',
    //     `${error}`,
    //     { nzDuration: 100 }
    //   )
    // });

    // this.courseinfservice.getCoursesNotice(this.courseid).subscribe((res: any) => {
    //   this.setCoursesNotes(res);
    // }, error => {
    //   this.notification.create(
    //     'error',
    //     '错误！',
    //     `${error}`,
    //     { nzDuration: 100 }
    //   )
    // });

    // this.notescontainer.clear();
    // // 创建一个插入式视图， 一般插入式视图都对应的是模版视图
    // const noteslist: ViewRef = this.noteslisttemplate.createEmbeddedView(null);
    // // 插入到容器当中 使用视图容器操作视图的方法insert
    // this.notescontainer.insert(noteslist);
  }


  setuser(res: any) {
    this.user = res;
  }

  updataload(){
    this.isJoin = this.testuserservice.isInCourse(this.courseid);
  }


  // setCoursesFeatures(res: any) {
  //   this.relativecourseList = res.courses;
  // }

  // setCoursesNotice(res: any) {
  //   this.relativecourseList = res.courses;
  // }

  // settotal_coursepages(res: any) {

  // }

  // settotal_topicpages(res: any) {

  // }

  // settotal_notespages(res: any) {

  // }

  // settotal_commentspages(res: any) {

  // }

  // settotal_materialspages(res: any) {

  // }



  //表单相关
  // editorTitle = "";
  // editorContent = "";
  // commentnumber = 0;
  // editorstartTime_date = "";
  // editorstartTime_time = "";
  // editorendTime_date = "";
  // editorendTime_time = "";
  // editorSendToStudent;

  // from_init() {
  //   this.editorTitle = "";
  //   this.editorContent = "";
  //   this.commentnumber = 0;
  //   this.editorstartTime_date = "";
  //   this.editorstartTime_time = "";
  //   this.editorendTime_date = "";
  //   this.editorendTime_time = "";
  //   this.send_tostudent = false;
  // }



  // createErrorMessage(content: string): void {
  //   this.message.error(content, {
  //     nzDuration: 1000
  //   });
  // }

  //  refreshPage(): void {
  // this.router.navigate([], {
  //   relativeTo: this.route,
  //   queryParams: {
  //     coursepage: this.coursepage_number,
  //     topicpage: this.currenttopicpage,
  //     notepage: this.current_notespage,
  //     commentpage: this.current_comment_page,
  //     materialpage: this.current_material_page,
  //     topic_type: this.type_topic,
  //     topic_order: this.order_topic,
  //     note_order: this.order_note,
  //     select_note: this.select_note,
  //   }
  // });
  // }


  //公告  ---暂不用
  // NoticeVisible = false;
  // currentNoticetag = 0;
  // editid = "-1";
  // showNoticeconfirm(): void {
  //   this.NoticeVisible = true;
  // }

  // handleOk_Notice(): void {
  //   if (this.currentNoticetag == 0) {
  //     console.log('Button ok clicked!');
  //     if (this.editorContent != "" && this.editorstartTime_date != "" && this.editorstartTime_time != "" && this.editorendTime_date != ""
  //       && this.editorendTime_time != "") {
  //       this.NoticeVisible = false;
  //       //There are something
  //       this.from_init();
  //       this.editid = "-1";
  //     } else {
  //       this.notification.create(
  //         'error',
  //         '发生错误！',
  //         `输入不能为空`);
  //     }
  //   } else {
  //     console.log('Button ok clicked!2');
  //     this.handleCancel_Notice();
  //   }

  // }

  // handleCancel_Notice(): void {
  //   console.log('Button cancel clicked!');
  //   this.NoticeVisible = false;
  //   this.from_init();
  //   this.editid = "-1";
  // }

  // showDeleteNoticeconfirm(): void {
  //   this.modalService.confirm({
  //     nzTitle: '<i>是否确认删除公告？</i>',
  //     nzContent: '<b>真的要删除该公告吗?</b>',
  //     nzOnOk: () => { console.log('OK'); this.notice_delete() }
  //   });
  // }

  // editNotice(index: number): void {
  //   this.editid = this.noticeHistory[index].id;
  //   this.currentNoticetag = 0;
  //   this.editorstartTime_date = this.noticeHistory[index].startdate;
  //   //this.editorstartTime_time = this.noticeHistory[index].starttime;
  //   this.editorendTime_date = this.noticeHistory[index].enddate;
  //   //this.editorendTime_time = this.noticeHistory[index].endtime;
  //   this.editorContent = this.noticeHistory[index].content;
  // }


}

