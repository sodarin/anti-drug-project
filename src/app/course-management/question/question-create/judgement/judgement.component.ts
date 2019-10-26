import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { NzMessageService, NzNotificationService } from 'ng-zorro-antd';
import { QuestionCreateService } from 'src/app/service/question-create/question-create.service';
import { CourseBaseInfoEditService } from 'src/app/service/course-base-info-edit/course-base-info-edit.service';
import { CourseManagementUtilService } from 'src/app/service/course-management-util/course-management-util.service';

@Component({
  selector: 'app-judgement',
  templateUrl: './judgement.component.html',
  styleUrls: ['./judgement.component.less']
})
export class JudgementComponent implements OnInit {

  //栅格的长度
  lblLength: number = 3;
  conLength: number = 18;

  //选择器的隐藏
  selectVisible: boolean = true;
  //高级选项的可见性
  isCollapse: boolean = false;
  //表单冒号可见性
  colonVisible: boolean = false;

  validateForm: FormGroup;

  courseId: any = 105;
  categoryId: any;

  submitForm(): void {
    let check: boolean = true;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
      if (this.validateForm.controls[i].hasError('required')) {
        check = false;
      }
    }
    if (check) {
      this.validateForm.patchValue({
        courseId: this.courseId,
        categoryId: this.categoryId
      })
      this._questionCreateService.createQuestion(this.validateForm.value).subscribe(result => {
        this._nzNotificationService.create('success', '添加成功!', ``);
      }, err => {
        this._nzNotificationService.create('error', '添加失败!', ``);
      })
    }
    console.log(this.validateForm.value);

  }

  constructor(
    private fb: FormBuilder,
    private _questionCreateService: QuestionCreateService,
    private _nzNotificationService: NzNotificationService,
    private _courseBaseInfoEditService: CourseBaseInfoEditService,
    private _courseManagementUtilService: CourseManagementUtilService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      type: ['determine', []],
      stem: [null, [Validators.required]],
      score: [2, [Validators.min(0)]],
      answer: [null, [Validators.required]],
      analysis: [null, []],
      metas: [null, []],
      categoryId: [1, []],
      difficulty: ['normal', []],
      targetID: [null, []],
      courseSetId: [105, []],
      courseId: [105, []]
    });

    this.courseId = this._courseManagementUtilService.setCourseIdFrom(location);
    this.getCourseInfo();
  }
  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  getCourseInfo() {
    this._courseBaseInfoEditService.getCourseInfo(this.courseId).subscribe(res => {
      this.categoryId = res.data.baseData.categoryid;
    });
  }
}
