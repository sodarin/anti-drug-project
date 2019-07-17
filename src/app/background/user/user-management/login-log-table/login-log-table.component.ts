import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-login-log-table',
  templateUrl: './login-log-table.component.html',
  styleUrls: ['./login-log-table.component.less']
})
export class LoginLogTableComponent implements OnInit {

  selectedKeywordType: string = 'nickname';
  inputValue: string;
  dateRange: string;

  dataList = [];
  displayData = [];
  loading: boolean = false;
  total: number;
  totalPage: number;
  pageIndex: number = 1;

  constructor(
    private _message: NzMessageService,
  ) { }

  ngOnInit() {
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  searchData(pageIndex: number = this.pageIndex) {
    // this.displayData = [];
    // this.loading = true;
    // this.userManagementService$.getUserList(pageIndex, 10).subscribe( result => {
    //   this.loading = false;
    //   this.total = result[0].totalUser;
    //   this.totalPage = Math.ceil( this.total / 10);
    //   this.dataList = result;
    //   this.displayData = this.dataList;
    //   console.log(result)
    // }, error1 => this._message.error(error1.error))
  }
}
