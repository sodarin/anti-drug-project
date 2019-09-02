import { Component, OnInit } from '@angular/core';
import {TagManagementService} from '../../../../service/tag-management/tag-management.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {FormBuilder} from '@angular/forms';
import {CreateTagModalComponent} from '../../../../core/modal/create-tag-modal/create-tag-modal.component';
import {TagInfoEditComponent} from '../../../../core/modal/tag-info-edit-modal/tag-info-edit.component';
import {CategoryEditModalComponent} from '../../../../core/modal/category-edit-modal/category-edit-modal.component';

@Component({
  selector: 'app-admin-course-category-management',
  templateUrl: './admin-course-category-management.component.html',
  styleUrls: ['./admin-course-category-management.component.less']
})
export class AdminCourseCategoryManagementComponent implements OnInit {


  dataList = [];
  displayData = [];
  loading: boolean = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;


  filterOptions: {};
  checkOption = [];


  constructor(
    private TagManagementService$: TagManagementService,
    private _message: NzMessageService,
    private _modalService: NzModalService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.searchData()
  }



  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.TagManagementService$.getTagList(pageIndex, 10).subscribe(result => {
      this.loading = false;
      this.total = result[0].totalUser;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
  }

  //新建分类
  openCreateCategoryModal() {
    const modal = this._modalService.create({
      nzTitle: '新建分类',
      nzContent: CategoryEditModalComponent,
      nzComponentParams: {
        isNewCategory: true
      },
      nzOkText: '提交',
      nzCancelText: '取消',
      nzOnOk: instance => instance.submit(),
      nzOnCancel: instance => instance.destroy()
    })
  }

  edit(id: string) {
    const modal = this._modalService.create({
      nzTitle: '编辑分类信息',
      nzContent: CategoryEditModalComponent,
      nzComponentParams: {
        id: id,
        isNewCategory: false
      },
      nzOkText: '提交',
      nzCancelText: '取消',
      nzOnOk: instance => instance.submit(),
      nzOnCancel: instance => instance.destroy()
    })
  }

  createChildren(id: string) {
    const modal = this._modalService.create({
      nzTitle: '编辑分类信息',
      nzContent: CategoryEditModalComponent,
      nzComponentParams: {
        id: id,
        isNewCategory: true
      },
      nzOkText: '提交',
      nzCancelText: '取消',
      nzOnOk: instance => instance.submit(),
      nzOnCancel: instance => instance.destroy()
    })
  }

  delete(id: string) {
    this._modalService.confirm({
      nzTitle: '是否删除分类？',
      nzOnOk: () => console.log('111')
    })
  }

}
