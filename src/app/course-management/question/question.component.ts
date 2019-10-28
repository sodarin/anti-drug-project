import { Component, OnInit } from '@angular/core';
import { NzEmptyService, NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { Router } from '@angular/router'
import { CourseManagementUtilService } from 'src/app/service/course-management-util/course-management-util.service';
import { QuestionCreateService } from 'src/app/service/question-create/question-create.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.less']
})
export class QuestionComponent implements OnInit {

  listOfQuestionTypes: any[] = [
    { label: "单选题", value: "single_choice" },
    { label: "多选题", value: "multiple_choice" },
    { label: "不定项选择题", value: "choice" },
    { label: "判断题", value: "determine" }
  ]


  total: number = 0;

  type: string;
  keyWord: string = '';

  courseId: any;

  questionList: any = [];

  loading: boolean = true;
  pageIndex: any = 1;

  constructor(
    private _courseManagementUtilService: CourseManagementUtilService,
    private _nzNotificationService: NzNotificationService,
    private _questionCreateService: QuestionCreateService,
    private modalService: NzModalService,
    private nzEmptyService: NzEmptyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.nzEmptyService.resetDefault();
    this.courseId = this._courseManagementUtilService.setCourseIdFrom(location);
    this.searchData(1, 10)

  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }


  searchData(pageIndex: number = this.pageIndex, pageSize: number = 10, keyWord: any = this.keyWord, type: string = (this.type == null) ? '' : this.type) {
    this.loading = true;
    this._questionCreateService.getCourseQuestionList(this.courseId, pageIndex, pageSize, keyWord, type).subscribe(res => {
      this.questionList = res.data.data;
      this.total = res.data.total;
      this.loading = false;
    })
  }


  confirmDelete(questionId: number = 1) {
    this.modalService.confirm({
      nzTitle: '真的要删除该题目吗?',
      nzContent: '<b style="color: red;">此题目将不会出现在本课程中</b>',
      nzOkText: '确定',
      nzOkType: 'danger',
      nzOnOk: () => this.delete(questionId),
      nzCancelText: '取消',
      nzOnCancel: () => console.log('Cancel')
    });
  }



  delete(questionId: number = 1) {
    this._questionCreateService.deleteQuestion(questionId).subscribe(res => {
      this._nzNotificationService.success('删除成功!', '');
      this.searchData();
    }, err => {
      this._nzNotificationService.error('删除失败!', '');
    })
  }

}
