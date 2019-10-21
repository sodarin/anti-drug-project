import { Component, OnInit } from '@angular/core';
import {OnlineUserManagementService} from '../../../../service/online-user-management/online-user-management.service';
import {NzMessageService, NzNotificationService} from 'ng-zorro-antd';

@Component({
  selector: 'app-online-user-table',
  templateUrl: './online-user-table.component.html',
  styleUrls: ['./online-user-table.component.less']
})
export class OnlineUserTableComponent implements OnInit {

  inputValue: string = '';

  dataList = [];
  displayData = [];
  loading: boolean = false;
  pageIndex: number = 1;
  totalPage: number;
  total: number = 1;

  constructor(
    private onlineUserManagementService$: OnlineUserManagementService,
    private _notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.searchData()
  }

  search() {
    this.pageIndex = 1;
    this.displayData = [];
    this.loading = true;
    this.onlineUserManagementService$.getOnlineUserList(this.pageIndex, 10, this.inputValue).subscribe(result => {
      this.loading = false;
      this.total = result.total;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result.data;
      this.displayData = this.dataList;
    }, error1 => {
      this.loading = false;
      this._notification.create(
        'error',
        '发生错误！',
        `${error1.error}`)
    })
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.onlineUserManagementService$.getOnlineUserList(pageIndex, 10, this.inputValue).subscribe(result => {
      this.loading = false;
      this.total = result.total;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result.data;
      this.displayData = this.dataList;
    }, error1 => {
      this.loading = false;
      this._notification.create(
        'error',
        '发生错误',
        `${error1.error}`
      )
    })
  }


}
