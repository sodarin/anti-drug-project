import { Component, OnInit } from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {UserMessageManagementService} from '../../../service/userMessageManagement/user-message-management.service';
@Component({
  selector: 'app-user-message-management',
  templateUrl: './user-message-management.component.html',
  styleUrls: ['./user-message-management.component.less']
})
export class UserMessageManagementComponent implements OnInit {

  selectedTimeFilterValue: string = 'selectedTime';
  dateRange = [];
  inputSendName: string = '';
  inputKey: string = '';

  dataList = [];
  displayData = [];
  loading = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;

  filterOptions: {};
  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;
  constructor(
    private userMessageManagementService$: UserMessageManagementService,
    private _message: NzMessageService,
    private _modalService: NzModalService
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
      this.total = result[0].totalUser;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => this._message.error(error1.error));
  }
    filterRecord() {
    let startTime = 0;
    let endTime = new Date().getTime();
    if (this.dateRange.length == 2) {
      startTime = new Date(this.dateRange[0]).getTime();
      endTime = new Date(this.dateRange[1]).getTime();
    }
    this.displayData = [];
    this.loading = true;
    this.filterOptions = {
      searchTimeType: this.selectedTimeFilterValue,
      starTime: startTime,
      endTime: endTime,
      sendName: this.inputSendName,
      KEY: this.inputKey,
    };
    this.userMessageManagementService$.filterUserList(1, 10, this.filterOptions).subscribe(result => {
      this.loading = false;
      this.total = result[0].total;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => this._message.error(error1.error))
  }
  checkAll(value: boolean): void {
    this.displayData.filter(item => !item.disabled).forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.displayData
      .filter(item => !item.disabled)
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.displayData.filter(item => !item.disabled).some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.dataList.filter(item => this.mapOfCheckedId[item.id]).length;
  }
  operateData(): void {
    // 删除数据操作
    this.isOperating = true;
    setTimeout(() => {
      this.dataList.forEach(item => (this.mapOfCheckedId[item.id] = false));
      this.refreshStatus();
      this.isOperating = false;
    }, 1000);
  }
}
