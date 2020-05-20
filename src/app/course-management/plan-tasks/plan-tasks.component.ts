import {Component, OnInit, TemplateRef} from '@angular/core';
import {
  NzAutocompleteOptionComponent, NzContextMenuService, NzDropdownMenuComponent,
  NzFormatEmitEvent, NzMessageService, NzModalService, NzTreeNode, NzTreeNodeOptions, UploadChangeParam, notificationMotion,
} from 'ng-zorro-antd';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PlanTasksService} from '../../service/plan-tasks/plan-tasks.service';
import {NzNotificationService} from 'ng-zorro-antd';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {NzTreeComponent} from 'ng-zorro-antd';
import {PlanTasksDownLoadComponent} from './plan-tasks-down-load/plan-tasks-down-load.component';


@Component({
  selector: 'app-plan-tasks',
  templateUrl: './plan-tasks.component.html',
  styleUrls: ['./plan-tasks.component.less'],
  providers: [PlanTasksDownLoadComponent,],

})
export class PlanTasksComponent implements OnInit {
  testValue: any;
  testList: [];
  missionCount: number;
  index = 0;
  /*控制添加任务功能页面的三次跳转，以及生命线的跳转。
  *index = 0:四个按钮（生命线1）页面。按钮有 取消
  * index = 1:输入信息（生命线2）页面。按钮有 取消 下一步 上一步 保存
  * index = 2：完成条件页面（生命线3）页面。按钮有 取消 上一步 保存
  * */
  current = 0;
  /*控制添加功能页面具体的页面。
  *current = 0,就是index = 0 的初始页面。
  *current = 1/2/3/4就是四个按钮分别进入的页面。
  * current = 11/22/33/44是四个按钮分别的验收页面。
  * */
  isVisible = false;
  chapterForm: FormGroup;
  pictureForm: FormGroup;
  videoForm: FormGroup;
  testForm: FormGroup;
  homeWorkForm: FormGroup;
  returnResult: any;
  missionStatus: '未发布';
  loading: boolean;


  constructor(
    private _modal: NzModalService,
    public fb: FormBuilder,
    private msg: NzMessageService,
    private planTasksService$: PlanTasksService,
    private _notification: NzNotificationService,
    private PlanTasksDownLoadComponent: PlanTasksDownLoadComponent,
  ) {
  }

  ngOnInit(): void {
    this.pictureForm = this.fb.group({
      pictureTitleName: [null, [Validators.required]],
      pictureIntro: [null, [Validators.required]],
      pictureLeastWatchTime: [null],
    });
    this.videoForm = this.fb.group({
      videoTitleName: [null, [Validators.required]],
      leastWatchVideoTime: [null]
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
      homeWorkTitleName: [null, [Validators.required]],
      homeWorkIntro: [null, [Validators.required]],
    });
    this.ListAll(2);
  }

  showFirstPlan() {
    this.ListAll(1);
    return false;
  }

  showSecondPlan() {
    this.ListAll(2);
  }

  showThirdPlan() {
    this.ListAll(3);
  }

  chapterList: [];
  tasksList: [];
  planList: [{}];

  ListAll(courseId: number) {
    this.loading = true;
    this.planTasksService$.listAll(courseId).subscribe(
      result => {
        this.planList = result.data;
        this.chapterList = result.data.chapters;
        this.tasksList = result.data.tasks;
        this.missionCount = result.data.total;
        console.log(this.chapterList);
        if (result) {
          this._notification.success('获取计划成功！', '');
        }
      },
      err => {
        this._notification.error('获取任务列表失败!', `${err.error}`);
      }
    );
  }

  nzEvent(event: NzFormatEmitEvent): void {
    console.log('chapterList');
  }

  testButton() {

  }

  // addTree(judgeValue: string) {
  //   const nodeChapterService = new Array<NzTreeNode>();
  //   let chapterNum = 1;
  //   let lessonNum = 1;
  //   let missionNum = 1;
  //   let temp = [];
  //   if (this.judgeValue == 'addChapter') {
  //     this.nodes.forEach(item => {
  //       if (item.author == 'chapter') {
  //         chapterNum++;
  //       }
  //     });
  //     nodeChapterService.push(new NzTreeNode({
  //       title: '第 ' + `${chapterNum}` + '章: ' + `${this.returnResult.chapter}`,
  //       key: `${this.returnResult.chapter}`,
  //       isLeaf: false,
  //       author: 'chapter',
  //       icon: 'book',
  //       children: []
  //     }));
  //     this.nodes = this.nodes.concat(nodeChapterService);
  //     console.log('chapterNodes');
  //     console.log(this.nodes);
  //   }
  // activeNode: NzTreeNode;

  // ];
  courseId: number = 2;
  chapterTitle: string;
  chapterNumber: number;
  chapterType: string;
  chapterSeq: number = 99;
  chapterId: number;

  /*
  * 添加章和添加节
  * 章节都在一个表里
  * 唯一的区别就是type不一样
  * */
  openAddingChapter(template: TemplateRef<{}>) {
    this.chapterForm = this.fb.group({
      chapterTitle: ['', Validators.required],
    });
    const modal = this._modal.create({
      nzTitle: '添加章节',
      nzContent: template,
      nzOkText: '添加章节',
      nzOnOk: () => {
        this.chapterForm.controls.chapterTitle.markAsDirty();
        this.chapterForm.controls.chapterTitle.updateValueAndValidity();
        this.chapterTitle = this.chapterForm.controls.chapterTitle.value;
        if (this.chapterTitle) {
          this.chapterType = 'chapter';
          this.chapterSeq = this.chapterSeq++;
          this.planTasksService$.createChapter(this.courseId, this.chapterNumber, this.chapterTitle, this.chapterType, this.chapterSeq).subscribe(
            result => {
              if (result) {
                this._notification.success('添加章节成功！', '');
              }
            },
            error => {
              this._notification.error('添加章节失败！', `${error.error}`);
            }
          );
        } else {
          return false;
        }
      },
    });
    modal.afterClose.subscribe(() => {
      this.ListAll(this.courseId);
    });
  }

  openAddingLesson(template: TemplateRef<{}>) {
    this.chapterForm = this.fb.group({
      chapterTitle: ['', Validators.required],
    });
    const modal = this._modal.create({
      nzTitle: '添加章节',
      nzContent: template,
      nzOkText: '添加章节',
      nzOnOk: () => {
        this.chapterForm.controls.chapterTitle.markAsDirty();
        this.chapterForm.controls.chapterTitle.updateValueAndValidity();
        this.chapterTitle = this.chapterForm.controls.chapterTitle.value;
        if (this.chapterTitle) {
          this.chapterType = 'lesson';
          this.chapterSeq = this.chapterSeq++;
          this.planTasksService$.createChapter(this.courseId, this.chapterNumber, this.chapterTitle, this.chapterType, this.chapterSeq).subscribe(
            result => {
              if (result) {
                this._notification.success('添加章节成功！', '');
              }
            },
            error => {
              this._notification.error('添加章节失败！', `${error.error}`);
            }
          );
        } else {
          return false;
        }
      },
    });
    modal.afterClose.subscribe(() => {
      this.ListAll(this.courseId);
    });
  }

  editChpater() {
    this.planTasksService$.editChapter(this.chapterId, this.chapterTitle).subscribe(
      result => {
        this._notification.success('更新章节成功！', '');
      },
      err => {
        this._notification.error('更新章节失败！', `${err.error}`);
      }
    );
  }

  /*
  * 打开添加图文。
  * 初始化图文任务的变量。
  * 验证图文表单。
  * 添加图文操作。
  * */
  openAddingPicture() {
    this.index = 1;
    this.current = 1;
  }

  courseTaskPictureTitle: string;
  courseTaskType: string;
  courseTaskPictureIntro: any;
  courseTaskStatus: string;
  courseTaskPictureFromCourseId: number;
  courseTaskFromCourseId: number;
  courseTaskNum: string;
  courseTaskSeq: number;

  validPicture(): boolean {
    for (const i in this.pictureForm.controls) {
      this.pictureForm.controls[i].markAsDirty();
      this.pictureForm.controls[i].updateValueAndValidity();
    }
    return this.pictureForm.controls.pictureTitleName.value !== null &&
    this.pictureForm.controls.pictureIntro.value !== null ? true : null;
  }

  handlePictureOk(): void {
    this.isVisible = false;
    let pictureBody = {
      courseTaskPictureTitle: this.pictureForm.controls.pictureTitleName.value,
      courseTaskType : 'Text',
      courseTaskPictureIntro: this.pictureForm.controls.pictureIntro.value,
      courseTaskStatus: '未发布！',
      courseTaskFromCourseId: this.courseTaskPictureFromCourseId = this.courseId,
    };


    this.planTasksService$.createTask_Text(pictureBody).subscribe(
      result => {
        this.pictureForm.reset();
        this._notification.success(
          '添加成功！',
          ''
        );
      },
      error1 => {
        this._notification.error(
          '添加失败！',
          `${error1.error}`
        );
      });
    this.index = this.current = 0;
  }

  /*
 * 打开添加视频。
 * 初始化视频任务的变量。
 * 验证视频表单。
 * 添加视频操作。
 * */
  // this.videoForm  = this.fb.group({
  //   videoTitleName: [null, [Validators.required]],
  //   leastWatchVideoTime : [null]
  // });
  videoContent = 1;
  videoFromWhere = '公共资料';

  openAddingVideo() {
    this.index = 1;
    this.current = 2;
  }


  courseTaskVideoTitle: string;
  courseTaskVideoType: string;
  courseTaskVideoFinishCondition: string = '学习到最后';
  courseTaskVideoFromCourseId: number;

  validVideo(): boolean {
    for (const i in this.videoForm.controls) {
      this.videoForm.controls[i].markAsDirty();
      this.videoForm.controls[i].updateValueAndValidity();
    }
    return this.videoForm.controls.videoTitleName.value !== null ? true : null;
  }

  handleVideoOk(result = this.videoForm.controls.value): void {
    this.isVisible = false;
    this.courseTaskVideoTitle = this.videoForm.controls.videoTitleName.value;
    this.courseTaskVideoType = 'video';
    this.courseTaskStatus = '未发布';
    this.courseTaskFromCourseId = this.courseTaskVideoFromCourseId = this.courseId;
    this.planTasksService$.createTask_Video(this.courseTaskVideoTitle, this.courseTaskVideoType,
      this.courseTaskStatus, this.courseTaskFromCourseId,
      this.courseTaskNum, this.courseTaskSeq,
      this.courseTaskVideoFromCourseId).subscribe(
      result => {
        this.videoForm.reset();
        this._notification.success(
          '添加视频成功！',
          ''
        );
      },
      error1 => {
        this._notification.error(
          '添加视频失败！',
          `${error1.error}`
        );
      }
    );
    this.index = this.current = 0;
  }

  handleChange({file, fileList}: UploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }

  uploadVideo() {
    this.videoContent = 1;
  }

  databaseVideo() {
    this.videoContent = 2;
  }

  courseVideo() {
    this.videoContent = 3;
  }

  networkVideo() {
    this.videoContent = 4;
  }

  /*
  * 打开考试任务
  * 初始化考试任务的变量。
  * 验证考试表单。
  * 添加考试操作。
  * */

  openAddingTest() {
    this.index = 1;
    this.current = 3;
  }

  radioTestValue = '提交试卷';
  // this.testForm = this.fb.group({
  //   testTitleName: [null, [Validators.required]],
  //   testPaperChoose: [null],
  //   testTime: [null],
  //   testTimes: [null],
  //   testDuring: [null],
  //   testScoreSet: [null],
  // });
  validTest(): boolean {
    for (const i in this.testForm.controls) {
      this.testForm.controls[i].markAsDirty();
      this.testForm.controls[i].updateValueAndValidity();
    }
    return this.testForm.controls.testTitleName.value !== null ? true : null;
  }

  handleTestOk(): void {
    this.isVisible = false;
    let testBody = {};

    this.planTasksService$.createTask_Testpaper(testBody).subscribe(
      result => {
        this.testForm.reset();
        this._notification.success(
          '添加成功！',
          ''
        );
      },
      error1 => {
        this._notification.error(
          '添加失败！',
          `${error1.error}`
        );
      }
    );
    // this.addTree(this.judgeValue);
    this.index = this.current = 0;
  }


  /*
* 打开家庭作业
* 初始化作业任务的变量。
* 验证作业表单。
* 添加作业操作。
* */


  homeWorkBody: {
    courseTaskHomeworkTitle: string;
    courseTaskHomeworkIntro: string;
  };
  // courseTaskHomeworkTitle: string;
  // courseTaskHomeworkIntro: string;
  radioHomeWorkValue: string = '提交作业';
  // courseTaskType: string;
  // courseTaskStatus: string;
  courseTaskHomeworkFromCourseId: number;
  // courseTaskFromCourseId: number;
  // courseTaskNum : string;
  // courseTaskSeq : number;
  openAddingHomework() {
    this.index = 1;
    this.current = 4;
  }

  validHomeWork(): boolean {
    for (const i in this.homeWorkForm.controls) {
      this.homeWorkForm.controls[i].markAsDirty();
      this.homeWorkForm.controls[i].updateValueAndValidity();
    }
    return this.homeWorkForm.controls.homeWorkTitleName.value !== null && this.homeWorkForm.controls.homeWorkIntro.value !== null
      ? true : null;
  }

  handleHomeWorkOk(): void {
    this.isVisible = false;
    this.homeWorkBody = {
      courseTaskHomeworkTitle: this.homeWorkForm.controls.homeWorkTitleName.value,
      courseTaskHomeworkIntro: this.homeWorkForm.controls.homeWorkIntro.value,

    };
    this.planTasksService$.createTask_Homework(this.homeWorkBody).subscribe(
      result => {
        this.homeWorkForm.reset();
        this._notification.success(
          '添加成功！',
          ''
        );
      },
      error1 => {
        this._notification.error(
          '添加失败！',
          `${error1.error}`
        );
      }
    );
    // this.returnResult = {
    //   homeWorkTitleName: this.planTasksForm.controls.homeWorkTitleName.value,
    //   homeWorkIntro: this.planTasksForm.controls.homeWorkIntro.value
    // }
    // this.planTasksForm.controls.homeWorkTitleName.setValue('');
    // this.planTasksForm.controls.homeWorkIntro.setValue('');

    this.index = this.current = 0;
    this.missionCount++;
  }

  handleNext(): void {
    {
      switch (this.current) {
        case 1 : {
          if (this.validPicture()) {
            this.current = 11;
            this.index = 2;
          }
          break;
        }
        case 2 : {
          if (this.validVideo()) {
            this.current = 22;
            this.index = 2;
          }
          break;
        }
        case 3 : {
          if (this.validTest()) {
            this.current = 33;
            this.index = 2;
          }
          break;
        }
        case 4 : {
          if (this.validHomeWork()) {
            this.current = 44;
            this.index = 2;
          }
          break;
        }
        default: {
          this.current = 0;
        }
      }
    }
  }

  handleCancel(): void {
    this.isVisible = false;
    this.index = 0;
    this.current = 0;
  }

  handleLast(): void {
    this.index--;
    switch (this.current) {
      case 11 : {
        this.current = 1;
        break;
      }
      case 22 : {
        this.current = 2;
        break;
      }
      case 33 : {
        this.current = 3;
        break;
      }
      case 44 : {
        this.current = 4;
        break;
      }
      case 1 | 2 | 3 | 4 : {
        this.current = 0;
        break;
      }
      default: {
        this.current = 0;
      }
    }
  }


  editPicture(result = this.pictureForm.controls.value): void {
    this.planTasksService$.editTask_Text(result).subscribe(
      result => {
        this._notification.success(
          '编辑图文成功！',
          ''
        );
      },
      error1 => {
        this._notification.error(
          '编辑图文失败！',
          `${error1.error}`
        );
      }
    );
  }

  // editVideo(result = this.videoForm.controls.value): void {
  //   this.planTasksService$.editTask_Video(result).subscribe(
  //     result => {
  //       this._notification.success(
  //         '编辑视频成功！',
  //         ''
  //       );
  //     },
  //     error1 => {
  //       this._notification.error(
  //         '编辑视频失败！',
  //         `${error1.error}`
  //       );
  //     }
  //   );
  // }

  // editTest(result = this.downLoadForm.controls.value): void {
  //   this.planTasksService$.editTask_Testpaper(result).subscribe(
  //     result => {
  //       this._notification.success(
  //         '编辑测试成功！',
  //         ''
  //       );
  //     },
  //     error1 => {
  //       this._notification.error(
  //         '编辑测试失败！',
  //         `${error1.error}`);
  //     }
  //   );
  // }

  editHomework(result = this.homeWorkForm.controls.value): void {
    this.planTasksService$.editTask_Homework(result).subscribe(
      result => {
        this._notification.success(
          '编辑作业成功！',
          ''
        );
      },
      error1 => {
        this._notification.error(
          '编辑作业失败！',
          `${error1.error}`
        );
      }
    );
  }

  deleteChapter(id: number = 0) {
    this.planTasksService$.deleteChapter(id).subscribe(
      res => {
        this._notification.success('删除章节成功！', '');
      },
      err => {
        this._notification.error('删除章节失败', `${err.error}`);
      }
    );
  }

  deleteMission(courseChapterId: number = 0) {
    this.planTasksService$.deleteTask(courseChapterId).subscribe(
      res => {
        this._notification.success('删除任务成功！', '');
      },
      err => {
        this._notification.error('删除任务失败！', `${err.error}`);
      }
    );
  }

  publishTask(courseChapterId: number = 0) {
    this.planTasksService$.publishTask(courseChapterId).subscribe(
      res => {
        this._notification.success('发布成功！', '');
      },
      err => {
        this._notification.error('发布失败！', `${err.error}`);
      }
    );
  }

  unPublishTask(courseChapterId: number = 0) {
    this.planTasksService$.unpublishTask(courseChapterId).subscribe(
      result => {
        this._notification.success('取消发布成功！', '');
      },
      err => {
        this._notification.error('取消发布失败!', `${err.error}`);
      }
    );
  }

  sort(sortList: Array<any>) {
    this.planTasksService$.sort(sortList).subscribe(
      res => {
        this._notification.success('排序成功！', '');
      },
      err => {
        this._notification.error('排序失败！', `${err.error}`);
      }
    );
  }

  handleOk(): void {
    this.isVisible = false;
    this.index = this.current = 0;
  }

  openAddingMission() {
    this.isVisible = true;

  }


  openFolder(data: NzTreeNode | Required<NzFormatEmitEvent>): void {
    // do something if u want
    if (data instanceof NzTreeNode) {
      data.isExpanded = !data.isExpanded;
    } else {
      const node = data.node;
      if (node) {
        node.isExpanded = !node.isExpanded;
      }
    }
  }

  //
  //   if (this.judgeValue == 'addLesson') {
  //     this.nodes.forEach(item => {
  //       if (item.author == 'lesson') {
  //         lessonNum++;
  //       }
  //     });
  //     temp.push(new NzTreeNode({
  //       title: '第 ' + `${lessonNum}` + '节: ' + `${this.returnResult.lesson}`,
  //       key: `${this.returnResult.lesson}`,
  //       isLeaf: false,
  //       author: 'lesson',
  //       icon: 'calendar',
  //       children: [],
  //     }));
  //     this.nodes = this.nodes.concat(temp);
  //     console.log('lessonNodes');
  //     console.log(this.nodes);
  //   }
  //
  //   if (this.judgeValue == 'addPicture') {
  //     this.nodes.forEach(item => {
  //       if (item.author == 'pictureTitleName') {
  //         missionNum++;
  //       }
  //     });
  //     temp.push(new NzTreeNode({
  //       title: '图片任务： ' + `${this.returnResult.pictureTitleName}`,
  //       key: `${this.returnResult.pictureTitleName}`,
  //       isLeaf: true,
  //       author: 'pictureTitleName',
  //       icon: 'read',
  //     }));
  //     this.nodes = this.nodes.concat(temp);
  //   }
  //
  //   if (this.judgeValue == 'addVideo') {
  //     this.nodes.forEach(item => {
  //       if (item.author == 'videoTitle') {
  //         missionNum++;
  //       }
  //     });
  //     temp.push(new NzTreeNode({
  //       title: '视频任务： ' + `${this.returnResult.videoTitleName}`,
  //       key: `${this.returnResult.videoTitleName}`,
  //       isLeaf: true,
  //       author: 'videoTitle',
  //       icon: 'laptop',
  //     }));
  //     this.nodes = this.nodes.concat(temp);
  //   }
  //
  //   if (this.judgeValue == 'addTest') {
  //     this.nodes.forEach(item => {
  //       if (item.author == 'testTitle') {
  //         missionNum++;
  //       }
  //     });
  //     temp.push(new NzTreeNode({
  //       title: '考试任务： ' + `${this.returnResult.testTitleName}`,
  //       key: `${this.returnResult.testTitleName}`,
  //       isLeaf: true,
  //       author: 'testTitle',
  //       icon: 'form',
  //     }));
  //     this.nodes = this.nodes.concat(temp);
  //   }
  //
  //   if (this.judgeValue == 'addHomeWork') {
  //     this.nodes.forEach(item => {
  //       if (item.author == 'homeWorkTitle') {
  //         missionNum++;
  //       }
  //     });
  //     temp.push(new NzTreeNode({
  //       title: '作业任务： ' + `${this.returnResult.homeWorkTitleName}` + `${this.missionStatus}`,
  //       key: `${this.returnResult.homeWorkTitleName}`,
  //       isLeaf: true,
  //       author: 'homeWorkTitle',
  //       icon: 'edit',
  //     }));
  //     this.nodes = this.nodes.concat(temp);
  //   }
  //   this.treeNode = this.nodes;
  // }


  // contextMenu($event: MouseEvent, menuNode: NzDropdownMenuComponent): void {
  //   this.nzContextMenuService.create($event, menuNode);


  updateMission() {

  }

  showMission() {

  }


}
