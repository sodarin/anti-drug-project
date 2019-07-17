import { Component, OnInit } from '@angular/core';
import {OnlineUserManagementService} from '../../../../service/online-user-management/online-user-management.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-online-user-table',
  templateUrl: './online-user-table.component.html',
  styleUrls: ['./online-user-table.component.less']
})
export class OnlineUserTableComponent implements OnInit {

  inputValue: string;

  dataList = [];
  displayData = [];
  loading: boolean = false;
  pageIndex: number = 1;
  totalPage: number;
  total: number = 1;

  listOfUserRange = [{ text: '所有用户', value: 'all', byDefault: true }, { text: '注册用户', value: 'registered' }, { text: '游客', value: 'visitor' }];
  searchUserRange: string;

  constructor(
    private onlineUserManagementService$: OnlineUserManagementService,
    private _message: NzMessageService
  ) { }

  ngOnInit() {
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.onlineUserManagementService$.getOnlineUserList(pageIndex, 10).subscribe(result => {
      this.loading = false;
      this.total = result[0].totalUser;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => this._message.error(error1.error))
  }

  filter(data: string) {
    this.searchUserRange = data;
  }

}
