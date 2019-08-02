import { Component, OnInit } from '@angular/core';
import {GroupTopicManagementTableService} from '../../../../service/group-topic-management-table/group-topic-management-table.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';


@Component({
  selector: 'app-group-topic-management-table',
  templateUrl: './group-topic-management-table.component.html',
  styleUrls: ['./group-topic-management-table.component.less']
})

export class GroupTopicManagementTableComponent implements OnInit {
  selectedStateFilterValue   = 'open';
  inputValue: string;

  dataList = [];
  displayData = [];
  loading: boolean = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;

  filterOptions: {};
  checkOption = [];
  topicTableListTable: any;
  constructor(
    private groupTopicManagementTableService$: GroupTopicManagementTableService,
    private  _message: NzMessageService,
    private  _modalService: NzModalService
  ) { }

  ngOnInit() {
    this.searchData();
  }
  // 搜索

  filterTopicTable() {
    this.displayData = [];
    this.loading = true;
    this.filterOptions = {
      state: this.selectedStateFilterValue,
      searchParameter: this.inputValue
    };
    this.groupTopicManagementTableService$.filterTopicTableList(1, 10, this.filterOptions).subscribe(result => {
      this.loading = false;
      this.total = result[0].total;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => this._message.error(error1.error))
  }
  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.groupTopicManagementTableService$.getTopicTableList(pageIndex, 10).subscribe(result => {
      this.loading = false;
      this.total = result[0].totalUser;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => this._message.error(error1.error))
  }
}
