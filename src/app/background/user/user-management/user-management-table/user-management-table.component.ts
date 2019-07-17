import { Component, OnInit } from '@angular/core';
import {UserManagementService} from '../../../../service/user-management/user-management.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {UserInfoViewModalComponent} from '../../../../core/modal/user-info-view-modal/user-info-view-modal.component';
import {UserInfoEditModalComponent} from '../../../../core/modal/user-info-edit-modal/user-info-edit-modal.component';

@Component({
  selector: 'app-user-management-table',
  templateUrl: './user-management-table.component.html',
  styleUrls: ['./user-management-table.component.less']
})
export class UserManagementTableComponent implements OnInit {

  selectedTimeFilterValue: string;
  dateRange: string;
  selectedRoleFilterValue: string = 'all';
  selectedNameContaining: string = 'username';
  inputValue: string;

  dataList = [];
  displayData = [];
  loading: boolean = false;
  total: number;
  totalPage: number;
  pageIndex: number = 1;

  popoverVisible: boolean;

  selectedUserId: string;
  userInfoPageVisible: boolean;

  constructor(
    private userManagementService$: UserManagementService,
    private _message: NzMessageService,
    private _modalService: NzModalService
  ) { }

  ngOnInit() {
    this.searchData()
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.userManagementService$.getUserList(pageIndex, 10).subscribe( result => {
      this.loading = false;
      this.total = result[0].totalUser;
      this.totalPage = Math.ceil( this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
      console.log(result)
    }, error1 => this._message.error(error1.error))
  }

  viewUserInfo(id: string) {
    const modal = this._modalService.create({
      nzTitle: '个人详细信息',
      nzContent: UserInfoViewModalComponent,
      nzComponentParams: {
        userId: id
      },
      nzWidth: 600,
      nzFooter: null
    })
  }

  editUserInfo(id: string) {
    const modal = this._modalService.create({
      nzTitle: '编辑个人信息',
      nzContent: UserInfoEditModalComponent,
      nzComponentParams: {
        userId: id
      },
      nzWidth: 600,
      nzOkText: '提交',
      nzCancelText: '取消',
      nzOnOk: () => {},
      nzOnCancel: () => {}
    })
  }

}
