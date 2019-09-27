import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-class-info-management',
  templateUrl: './class-info-management.component.html',
  styleUrls: ['./class-info-management.component.less']
})
export class ClassInfoManagementComponent implements OnInit {

  classroomId: number;

  classInfoEditForm: FormGroup;

  tagOptions = [];
  classificationOptions = [];

  usefulLife: number;
  expirationDate: Date;

  constructor(
    private routerInfo: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.classroomId = this.routerInfo.snapshot.params['id'];
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
    this.classInfoEditForm = this.fb.group({
      name: ['', Validators.required],
      intro: [''],
      tags: [[]],
      isShow: [true],
      expireType: ['usefulLife'],
      classification: ['junior']
    })
  }

  submitForm() {
    for (const i in this.classInfoEditForm.controls) {
      this.classInfoEditForm.controls[i].markAsDirty();
      this.classInfoEditForm.controls[i].updateValueAndValidity();
    }
    if (this.classInfoEditForm.status == 'VALID') {
      console.log(this.classInfoEditForm)
      console.log(this.classInfoEditForm.controls.name.value)
      console.log(this.classInfoEditForm.controls.intro.value)
      console.log(this.classInfoEditForm.controls.tags.value)
      console.log(this.classInfoEditForm.controls.isShow.value)
      console.log(this.classInfoEditForm.controls.expireType.value)
      console.log(this.classInfoEditForm.controls.classification.value)
    }
  }

}
