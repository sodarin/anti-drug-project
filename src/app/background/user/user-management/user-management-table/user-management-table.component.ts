import { Component, OnInit } from '@angular/core';
import {UserManagementService} from '../../../../service/user-management/user-management.service';
import {NzMessageService} from 'ng-zorro-antd';

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

  constructor(
    private userManagementService$: UserManagementService,
    private _message: NzMessageService
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
    console.log(id)
  }

}
