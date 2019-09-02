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
  id: string;

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
    if (!this.isNewCategory && this.id) {
      this.categoryService$.getCategoryDetail(this.id).subscribe(result => {
        this.categoryForm = this.fb.group({
          name: [result.name, Validators.required],
          encode: [result.encode, Validators.required],
          desc: [result.desc, Validators.required]
        })
      }, error1 => this._message.error(error1.error))
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
    // if (!this.categoryForm.errors) {
    //   this.categoryService$.editCategory(this.userCreatingForm.controls.username.value, this.userCreatingForm.controls.password.value, roleString).subscribe(result => {
    //     shouldBeClosed = true;
    //     this._message.success("新增用户成功！");
    //   }, error1 => {
    //     this._message.error(error1.error);
    //     shouldBeClosed = false;
    //   })
    //
    // }
    return shouldBeClosed
  }

  destroy() {
    this._modal.destroy()
  }

}
