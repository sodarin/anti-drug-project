import { Component, OnInit } from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {UserMessageManagementService} from '../../../service/userMessageManagement/user-message-management.service';
@Component({
  selector: 'app-user-message-management',
  templateUrl: './user-message-management.component.html',
  styleUrls: ['./user-message-management.component.less']
})
export class UserMessageManagementComponent implements OnInit {

  dateRange = [];
  inputSendName: string = '';
  inputKey: string = '';

  dataList = [];
  displayData = [];
  loading = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;

  filterOptions = {};
  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;


  mapOfEllipsis: { [key: string]: boolean } = {};
  constructor(
    private userMessageManagementService$: UserMessageManagementService,
    private _message: NzMessageService,
  ) {
  }
  ngOnInit() {
    this.searchData();
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.userMessageManagementService$.getMessageList(pageIndex, 10).subscribe(result => {
      this.loading = false;
      this.total = result[0].total? result[0].total: 0;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
      this.displayData.forEach(item => {
        this.mapOfEllipsis[item.id] = true;
      })
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    });
  }
  filterRecord() {
    let startTime = 0;
    let endTime = new Date().getTime() / 1000;
    if (this.dateRange.length == 2) {
      startTime = new Date(this.dateRange[0]).getTime() / 1000;
      endTime = new Date(this.dateRange[1]).getTime() / 1000;
    }
    this.displayData = [];
    this.loading = true;
    this.filterOptions = {
      starTime: startTime,
      endTime: endTime,
      sendName: this.inputSendName,
      KEY: this.inputKey,
    };
    this.userMessageManagementService$.filterUserList(1, 10, this.filterOptions).subscribe(result => {
      this.loading = false;
      this.total = result[0].total? result[0].total: 0;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => this._message.error(error1.error))
  }
  checkAll(value: boolean): void {
    this.displayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.displayData
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.displayData.some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.dataList.filter(item => this.mapOfCheckedId[item.id]).length;
  }
  deleteData(): void {
    // 删除数据操作
    this.isOperating = true;
    // setTimeout(() => {
    //   this.dataList.forEach(item => (this.mapOfCheckedId[item.id] = false));
    //   this.refreshStatus();
    //   this.isOperating = false;
    // }, 1000);
  }

  unfoldOrFoldContent(id: string) {
    this.mapOfEllipsis[id] = !this.mapOfEllipsis[id];
  }
}
