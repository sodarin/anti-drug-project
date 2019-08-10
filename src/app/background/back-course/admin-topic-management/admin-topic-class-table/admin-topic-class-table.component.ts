import { Component, OnInit } from '@angular/core';
import {AdminTopicClassService} from '../../../../service/admin-topic-class/admin-topic-class.service';
import {NzMessageService, NzModalService} from "ng-zorro-antd";

@Component({
  selector: 'app-admin-topic-class-table',
  templateUrl: './admin-topic-class-table.component.html',
  styleUrls: ['./admin-topic-class-table.component.less']
})
export class AdminTopicClassTableComponent implements OnInit {

  title: string = '';
  inputValue: string;
  keyWord: string;
  creator: string;

  dataList = [];
  displayData = [];
  loading: boolean = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;

  filterOptions: {};
  checkOption = [];

  // 全选功能
  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;

  constructor(
    private adminTopicClassService$: AdminTopicClassService,
    private _message: NzMessageService,
    private _modalService: NzModalService
  ) { }

  ngOnInit() {
    this.searchData()
  }
  // 搜索
  filterClass() {
    this.displayData = [];
    this.loading = true;
    this.filterOptions = {
      keyWord: this.keyWord,
      title: this.title,
      creator: this.creator,
    };
    this.adminTopicClassService$.filterPostList(1, 10, this.filterOptions).subscribe(result => {
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
    this.adminTopicClassService$.getPostList(pageIndex, 10).subscribe(result => {
      this.loading = false;
      this.total = result[0].totalNews;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => this._message.error(error1.error))
  }

  // 全选功能
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
  delete(): void {
    // 删除数据操作
    this.isOperating = true;
    setTimeout(() => {
      this.dataList.forEach(item => (this.mapOfCheckedId[item.id] = false));
      this.refreshStatus();
      this.isOperating = false;
    }, 1000);
  }
  // 新增帖子
  plus(id: string) {

  }

}
