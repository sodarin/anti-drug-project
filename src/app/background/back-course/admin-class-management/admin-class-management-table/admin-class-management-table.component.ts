import { Component, OnInit } from '@angular/core';
import {ClassManagementService} from '../../../../service/class-management/class-management.service';
import {NzMessageService, NzModalService} from "ng-zorro-antd";


@Component({
  selector: 'app-admin-class-management-table',
  templateUrl: './admin-class-management-table.component.html',
  styleUrls: ['./admin-class-management-table.component.less']
})
export class AdminClassManagementTableComponent implements OnInit {
  className: string;
  classNum = 99;
  publishNum = 99;
  closeNum = 99;
  unPublishNum = 99;

  dataList = [];
  displayData = [];
  loading = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;

  filterOptions: {};

  constructor(
    private classManagementService$: ClassManagementService,
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
    this.classManagementService$.getMessageList(pageIndex, 10).subscribe(result => {
      this.loading = false;
      this.total = result[0].totalUser;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => this._message.error(error1.error));
  }
  filterClass() {
    this.displayData = [];
    this.loading = true;
    this.filterOptions = {
      className: this.className,
    };
    this.classManagementService$.filterUserList(1, 10, this.filterOptions).subscribe(result => {
      this.loading = false;
      this.total = result[0].total;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => this._message.error(error1.error))
  }
  // 发布班级
  publishClass() {}
  // 推荐班级
  recommendationClass() {}
  // 管理
  management() {}
}
