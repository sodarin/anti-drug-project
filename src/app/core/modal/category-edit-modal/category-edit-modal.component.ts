import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../service/category/category.service';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';

@Component({
  selector: 'app-category-edit-modal',
  templateUrl: './category-edit-modal.component.html',
  styleUrls: ['./category-edit-modal.component.less']
})
export class CategoryEditModalComponent implements OnInit {

  @Input()
  item: any;

  @Input()
  isNewCategory: boolean;

  categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoryService$: CategoryService,
    private _message: NzMessageService,
    private _modal: NzModalRef
  ) { }

  ngOnInit() {
    if (!this.isNewCategory && this.item) {
      this.categoryForm = this.fb.group({
        name: [this.item.name, Validators.required],
        encode: [this.item.code, Validators.required],
        desc: [this.item.desc]
      })
    } else {
      this.categoryForm = this.fb.group({
        name: ['', Validators.required],
        encode: ['', Validators.required],
        desc: ['']
      })
    }
  }

  submit() {
    let shouldBeClosed = false;
    this.categoryForm.markAllAsTouched();
    this.categoryForm.controls.name.updateValueAndValidity();
    this.categoryForm.controls.encode.updateValueAndValidity();
    if (!this.categoryForm.controls.name.errors && !this.categoryForm.controls.encode.errors) {
      let result = {
        name: this.categoryForm.controls.name.value,
        code: this.categoryForm.controls.encode.value,
        description: this.categoryForm.controls.desc.value
      };
      this._modal.destroy(result)
    }
    return shouldBeClosed
  }

  destroy() {
    this._modal.destroy()
  }

}
