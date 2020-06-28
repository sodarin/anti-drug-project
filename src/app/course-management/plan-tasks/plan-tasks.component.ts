import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseManagementBackHalfService } from 'src/app/service/course-management-back-half/course-management-back-half.service';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService, NzNotificationService } from 'ng-zorro-antd';
@Component({
  selector: 'app-plan-tasks',
  templateUrl: './plan-tasks.component.html',
  styleUrls: ['./plan-tasks.component.less'],
})
export class PlanTasksComponent implements OnInit {
  courseId: any = 0;
  teachplanId: any = 0;
  tasklist = [];

  soursedata = [
    { id: "001", name: "Test1", date: "2020.2.4", size: 0 },
    { id: "002", name: "Test2", date: "2020.2.4", size: 0 },
    { id: "003", name: "Test3", date: "2020.2.4", size: 0 },
    { id: "004", name: "Test3", date: "2020.2.4", size: 0 },
    { id: "005", name: "Test3", date: "2020.2.4", size: 0 },
    { id: "006", name: "Test3", date: "2020.2.4", size: 0 },
    { id: "007", name: "Test3", date: "2020.2.4", size: 0 },
    { id: "008", name: "Test3", date: "2020.2.4", size: 0 },
    { id: "009", name: "Test3", date: "2020.2.4", size: 0 },
  ]



  //表单控制变量
  addchapter_visible = false;//添加章
  addtask_visible = false;//添加任务
  addsubject_visible = false;//添加题目
  addtask_currentpage = 0;
  addtssk_currenttype = "None";
  //图文类型
  pt_title = "";
  pt_content = "";
  //视频/资料类型
  soursepage = 1;
  currentselect = null;
  selectsource(data) {
    this.currentselect = data;
  }
  //考试类型
  testForm: FormGroup;

  //作业类型
  homeWorkForm: FormGroup;
  mapOfCheckedId: { [key: string]: boolean } = {};

  refreshStatus(): void {
    console.log(this.mapOfCheckedId);
  }
  //完成条件
  iselective = false

  constructor(public fb: FormBuilder,
    private routerInfo: ActivatedRoute,
    private courseManagement$: CourseManagementBackHalfService,
    private message: NzMessageService,
    private notification: NzNotificationService,
  ) {

  }
  ngOnInit() {
    this.testForm = this.fb.group({
      testTitleName: [null, [Validators.required]],
      testPaperChoose: [null],
      testTime: [null],
      testTimes: [null],
      testDuring: [null],
      testScoreSet: [null],
    });
    this.homeWorkForm = this.fb.group({
      homeWorkTitleName: [null, [Validators.required]],
      homeWorkIntro: [null, [Validators.required]],
    });
    this.courseId = location.pathname.split('/')[3];
    this.teachplanId = location.pathname.split('/')[5];
    this.getTaskList();
  }


  getTaskList() {
    this.tasklist = []
    this.courseManagement$.getPlanTaskNew(this.teachplanId).subscribe(res => {
      for(const key of Object.keys(res.data)) {
        console.log(res.data[key])
        this.tasklist.push(res.data[key]);
      }
    })
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.tasklist, event.previousIndex, event.currentIndex);
    let idList = [];
    let taskIdlist = []
    this.tasklist.forEach((item, index) => {
      idList.push(item)
      taskIdlist.push(parseInt(item[0].taskId))//sequence可能需要改变
    });
    this.tasklist = idList;
    console.log(taskIdlist)
    //保存到后端
    this.courseManagement$.sortPlanTask(this.teachplanId,taskIdlist).subscribe(result => {
      if(result.code==200){
        this.getTaskList();
        this.notification.success(
          '排序成功！',
          '排序成功'
        )
      }else{
        this.getTaskList();
        this.notification.error(
          '排序失败！',
          '排序失败！'
        )
      }

    }, error1 => {
      this.notification.error(
        '发生错误！',
        `${error1.error}`
      )
    })
  }


  //表单控制函数
  //---------------------------------添加章
  //---------------------------------添加任务
  handleOpen_addtask(): void {
    this.addtask_visible = true;
    this.initform_addtask();
  }

  handleOk_addtask(): void {
    this.addtask_visible = false;
    switch (this.addtssk_currenttype) {
      case "picture_text": {
        this.courseManagement$.addPlanTask_Text("1", this.courseId, this.teachplanId, this.pt_title,
          this.pt_content, this.iselective, "2", this.tasklist.length).subscribe((res: any) => {
            this.notification.create(
              'success',
              '发送成功',
              `发送成功`)
            this.getTaskList();
          }, error => {
            this.notification.create(
              'error',
              '发生错误！',
              `${error.error}`)
          })
        break;
      }
    }
    this.initform_addtask();
  }

  handleCancel_addtask(): void {
    this.addtask_visible = false;
    this.initform_addtask();
  }


  //添加任务
  handleOpen_addsubject(): void {
    this.addsubject_visible = true;
  }

  handleOk_addsubject(): void {
    this.addsubject_visible = false;
    this.initnomework_subject();
  }

  handleCancel_subject(): void {
    this.addsubject_visible = false;
    this.initnomework_subject();
  }

  //表单初始化
  initform_addtask(): void {
    this.addtask_currentpage = 0;
    this.addtssk_currenttype = "";
    this.pt_title = "";
    this.pt_content = "";
    this.iselective = false;
  }

  initnomework_subject(): void {
    this.mapOfCheckedId = {};
  }

  settask(inf: string): void {
    this.addtssk_currenttype = inf;
    this.addtask_currentpage += 1;
  }

  nextpage() {
    if (this.checkContent()) {
      this.addtask_currentpage += 1;
    }

  }

  lastpage() {
    this.addtask_currentpage -= 1;
    if (this.addtask_currentpage == 0) {
      this.initform_addtask();
    }
  }


  //自定义管道太麻烦，用函数代替
  TaskType(type: string) {
    switch (type) {
      case "lesson":
        return "课程";
      case "video":
        return "视频";
    }
    return "None";
  }

  checkContent() {
    if (this.addtssk_currenttype == "picture_text") {
      if (this.pt_title == "") {
        this.message.error("标题不能为空")
        return false;
      }
      var reg = /\s/;
      if (reg.test(this.pt_title)) {
        this.message.error("标题不能含有空格")
        return false;
      }
      if (this.pt_content == "") {
        this.message.error("内容不能为空")
        return false;
      }
    }
    return true
  }

  publishTask(taskid){

  }
}
