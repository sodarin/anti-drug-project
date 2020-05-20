import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, ViewRef, Input } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { CourseInfService } from 'src/app/service/courseinf-frontend/courseinf-frontend.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Component({
  selector: 'app-courseinf-topic',
  templateUrl: './courseinf-topic.component.html',
  styleUrls: ['./courseinf-topic.component.less'],
  inputs: ["courseid"],
  outputs: ["responseClick"]
})
export class CourseinfTopicComponent implements OnInit {
  courseid = "0";
  //话题
  topics = [
    {
      id: "1",
      type: "问题",
      title: "Question",
      userName: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      createdTime: '2019.1.1',
      hitNum: 10,
      postNum: 10,
      largeAvatar:""
    }
  ];

  //回复
  currenttopicid = "0";
  currentresponse = [
    {
      responser: 'AAA',
      time: '2019.1.1',
      content: '内容',
      smallAvatar:""
    }
  ];

  //排序相关
  topicytpe: string = "All";
  topicorder: string = "New";

  total_course_top_page = 1;//总话题页码
  currenttopicpage = 1;//当前话题页码

  //表单相关
  editorTitle = "";
  editorContent = "";

  //话题
  @ViewChild("notescontainer", { read: ViewContainerRef, static: true }) notescontainer: ViewContainerRef;
  @ViewChild("noteslisttemplate", { read: TemplateRef, static: true }) topiclisttemplate: TemplateRef<any>;
  @ViewChild("notesquestion", { read: TemplateRef, static: true }) notesquestion: TemplateRef<any>;
  @ViewChild("publishtopic", { read: TemplateRef, static: true }) publishtopic: TemplateRef<any>;
  @ViewChild("responsetemplate", { read: TemplateRef, static: true }) responsetemplate: TemplateRef<any>;

  constructor(private modalService: NzModalService, private courseinfservice: CourseInfService, private notification: NzNotificationService) {

  }

  ngOnInit() {
    this.courseinfservice.getCoursesTopic(this.courseid, this.currenttopicpage).subscribe((res: any) => {
      this.setCoursesTopic(res);
    }, error => {
      this.notification.create(
        'error',
        '错误！',
        `${error}`,
        { nzDuration: 100 }
      )
    });

  }

  setCoursesTopic(res: any) {
    this.topics = res;
    //this.total_course_top_page = res.data.total;

    for (var i = 0; i < this.topics.length; i++) {
      if (this.topics[i].largeAvatar == undefined) {
        this.topics[i].largeAvatar = "../../../../assets/img/timg2.jpg";
      }else if (this.topics[i].largeAvatar == "") {
        this.topics[i].largeAvatar = "../../../../assets/img/timg2.jpg";
      } else if (this.topics[i].largeAvatar.substr(0, 6) == "public") {
        this.topics[i].largeAvatar = "../../../../assets/img/timg2.jpg";
      } else if (this.topics[i].largeAvatar.substr(7, 7) == "edusoho") {
        this.topics[i].largeAvatar = "../../../../assets/img/timg2.jpg";
      }
    }
  }

  setTopicResponses(res: any) {
    if(res.data.data[0]==undefined){
      this.currentresponse =[];
    }else{
      this.currentresponse = res.data.data[0].threadPostDTOList;
      if(this.currentresponse!=null){
        for (var i = 0; i < this.currentresponse.length; i++) {
          if (this.currentresponse[i].smallAvatar == undefined) {
            this.currentresponse[i].smallAvatar = "../../../../assets/img/timg2.jpg";
          }else if (this.currentresponse[i].smallAvatar == "") {
            this.currentresponse[i].smallAvatar = "../../../../assets/img/timg2.jpg";
          } else if (this.currentresponse[i].smallAvatar.substr(0, 6) == "public") {
            this.currentresponse[i].smallAvatar = "../../../../assets/img/timg2.jpg";
          } else if (this.currentresponse[i].smallAvatar.substr(7, 7) == "edusoho") {
            this.currentresponse[i].smallAvatar = "../../../../assets/img/timg2.jpg";
          }
        }
      }
    }
  }

  from_init() {
    this.editorTitle = "";
    this.editorContent = "";
  }

  //信息提交
  topic_submit() {
    if (this.editorContent != ""&&this.editorTitle!="") {
      this.courseinfservice.topic_submit(this.courseid, this.editorContent,this.editorTitle, "1").subscribe((res: any) => {
        this.notification.create(
          'success',
          '提交成功！',
          `提交成功`)
        this.return_topic();
      }, error => {
        this.notification.create(
          'error',
          '发生错误！',
          `${error.error}`)
      });
    } else {
      this.notification.create(
        'error',
        '发生错误！',
        `输入不能为空`);
    }
    this.from_init();
  }

  questoin_submit() {
    if (this.editorContent != ""&&this.editorTitle!="") {
      this.courseinfservice.questoin_submit(this.courseid, this.editorContent,this.editorTitle, "1").subscribe((res: any) => {
        this.notification.create(
          'success',
          '提交成功！',
          `提交成功`)
        this.return_topic();
      }, error => {
        this.notification.create(
          'error',
          '发生错误！',
          `${error.error}`)
      });
    } else {
      this.notification.create(
        'error',
        '发生错误！',
        `输入不能为空`);
    }
    this.from_init();
  }



  //界面跳转-------------------------------------------------------------------------------
  return_topic() {
    this.courseinfservice.getCoursesTopic(this.courseid, this.currenttopicpage).subscribe((res: any) => {
      this.setCoursesTopic(res);
    }, error => {
      this.notification.create(
        'error',
        '错误！',
        `${error}`,
        { nzDuration: 100 }
      )
    });

    this.notescontainer.clear();
    const noteslist: ViewRef = this.topiclisttemplate.createEmbeddedView(null);
    this.notescontainer.insert(noteslist);
  }

  write_topic() {
    this.notescontainer.clear();
    const item: ViewRef = this.publishtopic.createEmbeddedView(null);
    this.notescontainer.insert(item);
  }

  write_question() {
    this.notescontainer.clear();
    const item: ViewRef = this.notesquestion.createEmbeddedView(null);
    this.notescontainer.insert(item);
  }

   //排序
   changeType_Topic(type: string): void {
    this.topicytpe = type;
    this.currenttopicpage = 1;
    this.courseinfservice.getCoursesTopic(this.courseid, this.currenttopicpage,this.topicytpe).subscribe((res: any) => {
      this.setCoursesTopic(res);
    }, error => {
      this.notification.create(
        'error',
        '错误！',
        `${error}`,
        { nzDuration: 100 }
      )
    });
  }

  changeOrder_Topic(order: string): void {
    this.topicorder = order;
    this.currenttopicpage = 1;
    this.courseinfservice.getCoursesTopic(this.courseid, this.currenttopicpage).subscribe((res: any) => {
      this.setCoursesTopic(res);
    }, error => {
      this.notification.create(
        'error',
        '错误！',
        `${error}`,
        { nzDuration: 100 }
      )
    });
  }

  onPageChange_topic(event?: any) {
    this.courseinfservice.getCoursesTopic(this.courseid, this.currenttopicpage).subscribe((res: any) => {
      this.setCoursesTopic(res);
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


  //界面跳转-------------------------------------------------------------------------------
  return_response() {
    this.notescontainer.clear();
    const noteslist: ViewRef = this.topiclisttemplate.createEmbeddedView(null);
    this.notescontainer.insert(noteslist);
  }

  write_response(topicid: string) {
    this.notescontainer.clear();
    this.currenttopicid = topicid;
    console.log(this.currenttopicid)
    this.courseinfservice.getTopicResponses(topicid).subscribe((res: any) => {
      this.setTopicResponses(res);
    }, error => {
      this.notification.create(
        'error',
        '错误！',
        `${error}`,
        { nzDuration: 100 }
      )
    });
    const item: ViewRef = this.responsetemplate.createEmbeddedView(null);
    this.notescontainer.insert(item);
  }

  response_submit() {
    if (this.editorContent != "") {
      this.courseinfservice.response_submit(this.courseid,this.currenttopicid ,this.editorContent,"1").subscribe((res: any) => {
        this.notification.create(
          'success',
          '提交成功！',
          `提交成功`)
        this.return_topic();
      }, error => {
        this.notification.create(
          'error',
          '发生错误！',
          `${error.error}`)
      });
    } else {
      this.notification.create(
        'error',
        '发生错误！',
        `输入不能为空`);
    }
    this.from_init();
  }

}
