import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {CourseManagementBackHalfService} from '../../service/course-management-back-half/course-management-back-half.service';
import {NzNotificationService} from 'ng-zorro-antd';

@Component({
  selector: 'app-plan-setting',
  templateUrl: './plan-setting.component.html',
  styleUrls: ['./plan-setting.component.less']
})
export class PlanSettingComponent implements OnInit {

  courseId: string;

  planInfoEditForm: FormGroup;

  planId: string;

  tagOptions = [];
  classificationOptions = [];

  targetList = [];

  audienceList = [];

  planList = [];

  learnMode: string = '';


  constructor(
    private routerInfo: ActivatedRoute,
    private fb: FormBuilder,
    private courseManagement$: CourseManagementBackHalfService,
    private _notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.courseId = location.pathname.split('/')[3];
    this.planInfoEditForm = this.fb.group({
      name: ['', Validators.required],
      rule: [],
      intro: [''],
      target: [''],
      tags: ['']
    });
    this.searchPlanList()
  }

  searchPlanList() {
    this.courseManagement$.getTeachingPlan(this.courseId).subscribe(result => {
      this.planList = result.data;
      this.planInfoEditForm.controls.name.setValue(this.planList[0].title);
      this.planId = this.planList[0].id;
      this.getBasicInfo(this.planId)
    }, error1 => {
      this._notification.error(
        '获取计划列表出错！',
        `${error1.error}`
      )
    })
  }

  getBasicInfo(id: string) {
    this.courseManagement$.getPlanBasicInfo(id).subscribe(result => {
      let data = result.data;
      this.planInfoEditForm.controls.name.setValue(data.title);
      this.targetList = data.goals;
      this.audienceList = data.audiences;
      this.learnMode = data.learnMode == 'freeMode'? '自由式学习': '解锁式学习';
      this.planInfoEditForm.controls.intro.setValue(data.summary);
      this.planInfoEditForm.controls.rule.setValue(data.enableFinish)
    }, error1 => {
      this._notification.error(
        '获取教学计划详情出错！',
        `${error1.error}`
      )
    })
  }

  submitForm() {
    for (const i in this.planInfoEditForm.controls) {
      this.planInfoEditForm.controls[i].markAsDirty();
      this.planInfoEditForm.controls[i].updateValueAndValidity();
    }
    if (this.planInfoEditForm.controls.name.value !== '') {
      let tagString = '';
      if (this.targetList.length > 0) {
        tagString = '|';
        this.targetList.forEach(item => {
          tagString += item;
          tagString += '|'
        });
      }
      let audienceString = '';
      if (this.audienceList.length > 0) {
        audienceString = '|';
        this.audienceList.forEach(item => {
          audienceString += item;
          audienceString += '|'
        });
      }
      this.courseManagement$.setPlanBasicInfo(this.planId, audienceString, this.planInfoEditForm.controls.rule.value, tagString, this.planInfoEditForm.controls.intro.value, this.planInfoEditForm.controls.name.value).subscribe(result => {
        this._notification.success(
          '教学计划设置成功！',
          ''
        )
      }, error1 => {
        this._notification.error(
          '教学计划设置失败！',
          `${error1.error}`
        )
      })
    } else {
      this._notification.error(
        '教学计划名称不能为空！',
        ``
      )
    }
  }

  dropTarget(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.targetList, event.previousIndex, event.currentIndex);
  }
  dropAudience(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.audienceList, event.previousIndex, event.currentIndex);
  }

  addCourseTarget() {
    this.targetList.push(this.planInfoEditForm.controls.target.value);
    this.planInfoEditForm.controls.target.setValue('')
  }

  addCourseAudience() {
    this.audienceList.push(this.planInfoEditForm.controls.tags.value);
    this.planInfoEditForm.controls.tags.setValue('')
  }

  onChange(data: any) {
    this.planId = data.nzValue;
    this.getBasicInfo(this.planId)
  }

  deletetargetItem(data: any) {
    this.targetList = this.targetList.filter(item => item !== data)
  }

  deleteAudienceItem(data: any) {
    this.audienceList = this.audienceList.filter(item => item !== data)
  }

}
