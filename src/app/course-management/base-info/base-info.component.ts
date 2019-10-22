import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseBaseInfoEditService } from 'src/app/service/course-base-info-edit/course-base-info-edit.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseManagementUtilService } from 'src/app/service/course-management-util/course-management-util.service';

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.less']
})
export class BaseInfoComponent implements OnInit {
  promptVisable: boolean = false;
  isLoading: boolean = false;
  listOfTag: Object = [{ id: 1, name: "互联网" }, { id: 2, name: "禁毒" }];
  listOfCategories: any[] = [];
  validateForm: FormGroup;

  location: Location;

  courseId: string;

  submitForm(): void {
    this.isLoading = true;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    
    if (!(this.validateForm.controls.title.errors)) {
      const baseInfo = this.validateForm.value;
      let tags = this.validateForm.controls.tags.value.join('|');
      baseInfo.tags = tags;
      console.log(baseInfo);
      baseInfo.courseId = this.courseId;
      this._courseBaseInfoEditService.setBaseInfo(baseInfo).subscribe(result => {
        this.isLoading = false;
        this.promptVisable = true;
        this._nzNotificationService.create('success', '保存成功', `${result}`);
      }, error => {
        this.isLoading = false;
        this.promptVisable = false;
        this._nzNotificationService.create('error', '保存失败', `${error}`);
      })
    }

    this.isLoading = false;
  }

  constructor(
    private router: ActivatedRoute,
    private fb: FormBuilder,
    private _courseBaseInfoEditService: CourseBaseInfoEditService,
    private _nzNotificationService: NzNotificationService,
    private _courseManagementUtilService: CourseManagementUtilService
  ) { }

  ngOnInit(): void {
    this.location = location;
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      subtitle: [null, [Validators.nullValidator]],
      serializeMode: ['非连载教程', [Validators.nullValidator]],
      tags: [null, [Validators.nullValidator]],
      categoryId: [null, [Validators.nullValidator]]
    });
    this.getAllTags();
    this.getAllCategories();
    this.courseId=this._courseManagementUtilService.setCourseIdFrom(this.location)
  }

  getAllCategories() {
    this._courseBaseInfoEditService.getAllCategories().subscribe(result => {
      this.listOfCategories = result.data;
      
    })
  }

  getAllTags() {
    this._courseBaseInfoEditService.getAllTags().subscribe(result => {
      this.listOfTag = result;
      
    })
  }




}
