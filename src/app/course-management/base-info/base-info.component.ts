import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseBaseInfoEditService } from 'src/app/service/course-base-info-edit/course-base-info-edit.service';

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.less']
})
export class BaseInfoComponent implements OnInit {
  listOfTag: any[] = [
    { label: "班级", value: "班级" },
    { label: "课程", value: "课程" },
    { label: "教育云", value: "教育云" },
    { label: "互联网+", value: "互联网+" },
    { label: "毒品危害", value: "毒品危害" }];
  listOfCategories: any[] = [];
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm.value);
  }

  constructor(private fb: FormBuilder, private _courseBaseInfoEditService: CourseBaseInfoEditService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      status: ['非连载教程', [Validators.nullValidator]],
      tags: [[], [Validators.nullValidator]],
      category: [null, [Validators.nullValidator]]
    });
    this.getAllCategories();
  }

  getAllCategories() {
    this._courseBaseInfoEditService.getAllCategories().subscribe(result => {
      this.listOfCategories = result.data;
      console.log(result.data);

    })
  }



}
