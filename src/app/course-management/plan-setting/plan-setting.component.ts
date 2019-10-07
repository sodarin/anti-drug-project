import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-plan-setting',
  templateUrl: './plan-setting.component.html',
  styleUrls: ['./plan-setting.component.less']
})
export class PlanSettingComponent implements OnInit {

  courseId: string;

  planInfoEditForm: FormGroup;

  tagOptions = [];
  classificationOptions = [];

  targetList: any[] = [{ id: 1, target: "均分90" }, { id: 2, target: "达到及格线" }];


  constructor(
    private routerInfo: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.courseId = location.pathname.split('/')[3];
    this.tagOptions = [
      {label: '班级', value: 'class'},
      {label: '课程', value: 'course'},
      {label: '题库', value: 'que_base'},
      {label: '教育云', value: 'cloud'},
      {label: '毒品预防教育', value: 'predict'},
      {label: '互联网+', value: 'internet'},
      {label: '毒品危害', value: 'danger'},
    ];
    this.classificationOptions = [
      {label: '小学班级', value: 'primary'},
      {label: '初中班级', value: 'junior'},
      {label: '高中班级', value: 'senior'},
    ];
    this.planInfoEditForm = this.fb.group({
      name: ['', Validators.required],
      rule: ['1'],
      intro: [''],
      target: [''],
      tags: [[]]
    })
  }

  submitForm() {
    for (const i in this.planInfoEditForm.controls) {
      this.planInfoEditForm.controls[i].markAsDirty();
      this.planInfoEditForm.controls[i].updateValueAndValidity();
    }
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.targetList, event.previousIndex, event.currentIndex);
  }

  addCourseTarget() {
    this.targetList.push({id: this.targetList.length+1, target: this.planInfoEditForm.controls.target.value});
    this.planInfoEditForm.controls.target.setValue('')
  }

}
