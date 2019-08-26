import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {CreateTagModalComponent} from '../../../../core/modal/create-tag-modal/create-tag-modal.component';
import {TagInfoEditComponent} from '../../../../core/modal/tag-info-edit-modal/tag-info-edit.component';
import {TagGroupManagementService} from '../../../../service/tag-group-management/tag-group-management.service';

@Component({
  selector: 'app-tag-group-management-table',
  templateUrl: './tag-group-management-table.component.html',
  styleUrls: ['./tag-group-management-table.component.less']
})
export class TagGroupManagementTableComponent implements OnInit {

  selectedTimeFilterValue: string = 'loginTime';
  dateRange = [];
  selectedRoleFilterValue: string = '';
  selectedNameContaining: string = 'nickname';
  inputValue: string;

  dataList = [];
  displayData = [];
  loading: boolean = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;

  popoverVisible: boolean;

  selectedUserId: string;
  userInfoPageVisible: boolean;

  filterOptions: {};
  checkOption = [];

  avatarUrl: string;

  previewImage = '';
  previewVisible = false;

  modifyPasswordForm: FormGroup;

  constructor(
    private TagGroupManagementService$: TagGroupManagementService,
    private _message: NzMessageService,
    private _modalService: NzModalService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.searchData()
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.TagGroupManagementService$.getTagGroupList(pageIndex, 10).subscribe(result => {
      this.loading = false;
      this.total = result[0].totalUser;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => this._message.error(error1.error))
  }

  //新建标签
  openCreateTagGroupModal() {
    const modal = this._modalService.create({
      nzTitle: '新建标签组',
      nzContent: CreateTagModalComponent,
      nzOkText: '提交',
      nzCancelText: '取消',
      nzOnOk: instance => instance.submit(),
      nzOnCancel: instance => instance.cancel()
    })
  }

  edit(id: string) {
    const modal = this._modalService.create({
      nzTitle: '编辑标签组信息',
      nzContent: TagInfoEditComponent,
      nzComponentParams: {
        id: id
      },
      nzWidth: 600,
      nzOkText: '提交',
      nzCancelText: '取消',
      nzOnOk: instance => instance.submit(),
      nzOnCancel: instance => instance.destroy()
    })
  }

}
