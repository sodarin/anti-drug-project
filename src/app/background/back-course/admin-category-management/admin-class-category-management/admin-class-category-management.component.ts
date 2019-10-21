import { Component, OnInit } from '@angular/core';
import {TagManagementService} from '../../../../service/tag-management/tag-management.service';
import {NzMessageService, NzModalService, NzNotificationService} from 'ng-zorro-antd';
import {FormBuilder} from '@angular/forms';
import {CategoryEditModalComponent} from '../../../../core/modal/category-edit-modal/category-edit-modal.component';
import {AdminCategoryService} from '../../../../service/admin-category/admin-category.service';

@Component({
  selector: 'app-admin-class-category-management',
  templateUrl: './admin-class-category-management.component.html',
  styleUrls: ['./admin-class-category-management.component.less']
})
export class AdminClassCategoryManagementComponent implements OnInit {

  dataList = [];
  displayData = [];
  loading: boolean = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;


  filterOptions: {};
  checkOption = [];

  mapOfExpandedData: { [key: string]: any[] } = {};


  constructor(
    private adminCategoryService$: AdminCategoryService,
    private _notification: NzNotificationService,
    private _modalService: NzModalService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.searchData()
  }


  // 处理树形表格
  collapse(array: any[], data: any, $event: boolean): void {
    if ($event === false) {
      if (data.children.length > 0) {
        data.children.forEach(d => {
          const target = array.find(a => a.id === d.id)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: any): any[] {
    const stack: any[] = [];
    const array: any[] = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: false });

    while (stack.length !== 0) {
      const node = stack.pop()!;
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[i], level: node.level! + 1, expand: false, parent: node });
        }
      }
    }

    return array;
  }

  visitNode(node: any, hashMap: { [key: string]: boolean }, array: any[]): void {
    if (!hashMap[node.id]) {
      hashMap[node.id] = true;
      array.push(node);
    }

  }



  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.adminCategoryService$.getClassCategory().subscribe(result => {
      this.loading = false;
      this.dataList = result.data;
      this.displayData = this.dataList;
      this.displayData.forEach(item => {
        this.mapOfExpandedData[item.id] = this.convertTreeToList(item);
      });
    }, error1 => {
      this.loading = false;
      this._notification.error(
        '发生错误！',
        `${error1.error}`)
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
    });
    modal.afterClose.subscribe(result => {
      if (result) {
        this.adminCategoryService$.addRootCategory(result.code, result.description, result.name, '2').subscribe(result =>{
          this.searchData();
          this._notification.success(
            '新建分类成功！',
            ''
          )
        }, error1 => {
          this._notification.error(
            '发生错误！',
            `${error1.error}`
          )
        })
      }
    })
  }

  edit(item: any) {
    const modal = this._modalService.create({
      nzTitle: '编辑分类信息',
      nzContent: CategoryEditModalComponent,
      nzComponentParams: {
        item: item,
        isNewCategory: false
      },
      nzOkText: '提交',
      nzCancelText: '取消',
      nzOnOk: instance => instance.submit(),
      nzOnCancel: instance => instance.destroy()
    });
    modal.afterClose.subscribe(result => {
      if (result) {
        this.adminCategoryService$.editCategory(result.code, result.description, item.id, result.name).subscribe(result => {
          this.searchData();
          this._notification.success(
            '编辑成功！',
            ''
          )
        }, error1 => {
          this._notification.error(
            '发生错误！',
            `${error1.error}`
          )
        })
      }
    })
  }

  createChildren(item: any) {
    const modal = this._modalService.create({
      nzTitle: '编辑分类信息',
      nzContent: CategoryEditModalComponent,
      nzComponentParams: {
        item: item,
        isNewCategory: true
      },
      nzOkText: '提交',
      nzCancelText: '取消',
      nzOnOk: instance => instance.submit(),
      nzOnCancel: instance => instance.destroy()
    });
    modal.afterClose.subscribe(result => {
      if (result) {
        this.adminCategoryService$.addChildCategory(result.code, result.description, result.name, item.id, '2').subscribe(result => {
          this.searchData();
          this._notification.success(
            '创建子分类成功！',
            ''
          )
        }, error1 => {
          this._notification.error(
            '发生错误！',
            `${error1.error}`
          )
        })
      }
    })
  }

  delete(id: string) {
    this._modalService.confirm({
      nzTitle: '是否删除分类？',
      nzOnOk: () => {
        this.adminCategoryService$.deleteCategory(id).subscribe(result => {
          this.searchData();
          this._notification.success(
            '删除分类成功！',
            ''
          )
        }, error1 => {
          this._notification.error(
            '发生错误！',
            `${error1.error}`
          )
        })
      }
    })
  }

}
