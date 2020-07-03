/**
 * 添加任务的流程
 * 1.设置任务类型 settask
 * 2.填写任务内容表单  pt_title  pt_content  handleOk_addtask提交
 * 
 */


import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseManagementBackHalfService } from 'src/app/service/course-management-back-half/course-management-back-half.service';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService, NzNotificationService, NzModalService } from 'ng-zorro-antd';
import { QuestionCreateService } from 'src/app/service/question-create/question-create.service';
enum QUSTIONTYPE {
  single_choice = '单选题',
  mutiple_choice = '多选题',
  choice = '不定项选择题',
  determine = '判断题'
}
@Component({
  selector: 'app-plan-tasks',
  templateUrl: './plan-tasks.component.html',
  styleUrls: ['./plan-tasks.component.less'],
})
export class PlanTasksComponent implements OnInit {
  courseId: any = 0;
  teachplanId: any = 0;
  tasklist = [];

  //题目相关
  questionPageIndex = 0;
  questionTotalpage = 0;
  questionlist: any;
  questionKeyword: any;
  questionType: any;
  questiontypeToChinese = QUSTIONTYPE;
  listOfQuestionTypes: any[] = [
    { label: "单选题", value: "single_choice" },
    { label: "多选题", value: "mutiple_choice" },
    { label: "不定项选择题", value: "choice" },
    { label: "判断题", value: "determine" }
  ]
  selectedQuestions: any;
  questionsIds: any;


  //表单控制变量
  addchapter_visible = false;//添加章
  addtask_visible = false;//添加任务
  addsubject_visible = false;//添加题目
  addtask_currentpage = 0;
  addtssk_currenttype = "None";
  //图文类型
  pt_Form: FormGroup;

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
    private _questionCreateService: QuestionCreateService,
    private modalService: NzModalService,
  ) {

  }
  ngOnInit() {
    this.pt_Form = this.fb.group({
      content: [null, [Validators.required]],
      createdUserId: [null],
      finishDetail: [null],
      fromCourseId: [null],
      fromCourseSetId: [null],
      isOptional: [null],
      remark: [null],
      seq: [null],
      title: [null, [Validators.required]]
    });
    this.testForm = this.fb.group({
      testTitleName: [null, [Validators.required]],
      testPaperChoose: [null],
      testTime: [null],
      testTimes: [null],
      testDuring: [null],
      testScoreSet: [null],
    });
    this.homeWorkForm = this.fb.group({
      content: [null, [Validators.required]],
      fromCourseId: [null],
      fromCourseSetId: [null],
      fromUserId: [null],
      isOptional: [null],
      itemCount: [null],
      itemsDtos: [null],
      limitedTime: [null],
      mediaType: [null],
      mode: [null],
      remark: [null],
      seq: [null],
      title: [null, [Validators.required]]
    });
    this.courseId = location.pathname.split('/')[3];
    this.teachplanId = location.pathname.split('/')[5];
    this.getTaskList();
  }


  getTaskList() {
    this.tasklist = []
    this.courseManagement$.getPlanTaskNew(this.teachplanId).subscribe(res => {
      for (const key of Object.keys(res.data)) {
        this.tasklist.push(res.data[key]);
      }
      this.tasklist.sort(function (a, b) {
        return a[0].sequence - b[0].sequence;
      })
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
    this.courseManagement$.sortPlanTask(this.teachplanId, taskIdlist).subscribe(result => {
      if (result.code == 200) {
        this.getTaskList();
        this.notification.success(
          '排序成功！',
          '排序成功'
        )
      } else {
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
        var optional = 0;
        if (this.iselective) {
          optional = 1;
        }
        if (this.pt_Form.valid) {
          this.pt_Form.patchValue({
            createdUserId: 1,
            finishDetail: "",
            fromCourseId: parseInt(this.teachplanId),
            fromCourseSetId: parseInt(this.courseId),
            isOptional: optional,
            remark: "",
            seq: this.tasklist.length + 1,
          })
          this.courseManagement$.addPlanTask_Text(this.pt_Form.value).subscribe((res: any) => {
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
        } else {
          this.notification.create(
            'error',
            '请完成表单再提交',
            `请完成表单再提交`)
        }
        break;
      }
      case "homework": {
        this.createTask_homework();
        break;
      }
    }
    this.initform_addtask();
  }

  createTask_homework() {
    var optional = 0;
    if (this.iselective) {
      optional = 1;
    }
    var questionitems = []
    for(let i=0;i<this.selectedQuestions.length;i++){
      questionitems.push(
        {
          copyid:0,
          migrateitemid:0,
          missscore:0,
          parentid:0,
          questionid:this.selectedQuestions[i].id,
          questiontype:this.selectedQuestions[i].type,
          score:this.selectedQuestions[i].score,
          seq:i+1,
          testid:0,
          tpye:this.selectedQuestions[i].type,
        }
      )
    }
    this.homeWorkForm.patchValue({
      fromCourseId: parseInt(this.teachplanId),
      fromCourseSetId: parseInt(this.courseId),
      fromUserId: 1,
      isOptional: optional,
      itemCount: questionitems.length,
      itemsDtos: questionitems,
      limitedTime: 0,
      mediaType: "",
      mode:"",
      remark:"",
      seq: this.tasklist.length + 1,
    })
    this.courseManagement$.addPlanTask_Homework(this.homeWorkForm.value).subscribe((res: any) => {
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
  }


  handleCancel_addtask(): void {
    this.addtask_visible = false;
    this.initform_addtask();
  }


  //添加任务
  handleOpen_addsubject(): void {
    this.searchData();
    this.addsubject_visible = true;
  }

  handleOk_addsubject(): void {
    this.addsubject_visible = false;
  }

  handleCancel_subject(): void {
    this.addsubject_visible = false;
  }

  //表单初始化
  initform_addtask(): void {
    this.addtask_currentpage = 0;
    this.addtssk_currenttype = "";
    this.pt_Form = this.fb.group({
      content: [null, [Validators.required]],
      createdUserId: [null],
      finishDetail: [null],
      fromCourseId: [null],
      fromCourseSetId: [null],
      isOptional: [null],
      remark: [null],
      seq: [null],
      title: [null, [Validators.required]]
    });
    this.iselective = false;
    this.selectedQuestions = [];
    this.questionsIds = [];
    this.mapOfCheckedId = {};
    this.homeWorkForm = this.fb.group({
      content: [null, [Validators.required]],
      fromCourseId: [null],
      fromCourseSetId: [null],
      fromUserId: [null],
      isOptional: [null],
      itemCount: [null],
      itemsDtos: [null],
      limitedTime: [null],
      mediaType: [null],
      mode: [null],
      remark: [null],
      seq: [null],
      title: [null, [Validators.required]]
    });
  }

  //1.设置任务类型
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
      if (this.pt_Form.controls['title'].valid && this.pt_Form.controls['content'].valid) {
        return true;
      } else {
        return false;
      }
    } else if (this.addtssk_currenttype == "homework") {
      if (this.homeWorkForm.controls['title'].valid && this.homeWorkForm.controls['content'].valid && this.selectedQuestions.length > 0) {
        return true;
      } else {
        return false;
      }
    }
    return true
  }

  publishTask(taskid) {

  }

  //题目相关--------------------------------------------------

  searchData(pageIndex: number = this.questionPageIndex, pageSize: number = 10, keyWord: any = this.questionKeyword, type: string = (this.questionType == null) ? '' : this.questionType) {
    this._questionCreateService.getCourseQuestionList(this.courseId, pageIndex, pageSize, keyWord, type).subscribe(res => {
      this.questionlist = res.data.data;
      this.questionTotalpage = res.data.total;
    })
  }

  check(question: any) {
    var key = true;
    for (var i = 0; i < this.selectedQuestions.length; i++) {
      if (this.selectedQuestions[i].id == question.id) {
        key = false;
        this.selectedQuestions.splice(i, 1);
      }
    }
    if (key) {
      this.selectedQuestions.push(question)
    }

    console.log(this.selectedQuestions);
  }

  check2(questionId: number) {
    var key = true;
    for (var i = 0; i < this.questionsIds.length; i++) {
      if (this.questionsIds[i] == questionId) {
        key = false;
        this.questionsIds.splice(i, 1);
      }
    }
    if (key) {
      this.questionsIds.push(questionId)
    }
  }



  confirmDelete(questionId: number = 1) {
    this.modalService.confirm({
      nzTitle: '真的要删除该题目吗?',
      nzContent: '<b style="color: red;">此题目将不会出现在本课程中</b>',
      nzOkText: '确定',
      nzOkType: 'danger',
      nzOnOk: () => {
        for (var i = 0; i < this.selectedQuestions.length; i++) {
          if (this.selectedQuestions[i].id == questionId) {
            this.selectedQuestions.splice(i, 1);
            this.mapOfCheckedId[questionId] = false;
            break;
          }
        }
      },
      nzCancelText: '取消',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  confirmDeleteList() {
    this.modalService.confirm({
      nzTitle: '真的要删除这些题目吗?',
      nzContent: '<b style="color: red;">此题目将不会出现在本课程中</b>',
      nzOkText: '确定',
      nzOkType: 'danger',
      nzOnOk: () => {
        var j = 0;
        var i = 0;
        var isdelete = false;
        while (i < this.questionsIds.length) {
          isdelete = false;
          while (j < this.selectedQuestions.length) {
            if (this.selectedQuestions[j].id == this.questionsIds[i]) {
              this.selectedQuestions.splice(j, 1);
              this.mapOfCheckedId[this.questionsIds[i]] = false;
              this.questionsIds.splice(i, 1);
              isdelete = true;
              break;
            }
          }
          if (isdelete == false) {
            i++;
          }
        }
      },
      nzCancelText: '取消',
      nzOnCancel: () => console.log('Cancel')
    });
  }
}
