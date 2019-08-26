import { Component, OnInit } from '@angular/core';
import {AdminTopicClassService} from '../../../../service/admin-topic-class/admin-topic-class.service';
import {NzMessageService, NzModalService} from "ng-zorro-antd";
import {UserInfoViewModalComponent} from '../../../../core/modal/user-info-view-modal/user-info-view-modal.component';

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
  mapOfEllipsis: { [key: string]: boolean } = {};

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
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
  }

  // 批量删除
  deleteData() {
    let deleteIdList = [];
    this.displayData.forEach(item => {
      if (this.mapOfCheckedId[item.id])
        deleteIdList.push(item.id)
    });
    this.isOperating = true;
    // setTimeout(() => {
    //   this.dataList.forEach(item => (this.mapOfCheckedId[item.id] = false));
    //   this.refreshStatus();
    //   this.isOperating = false;
    // }, 1000);
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
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
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
  }
  // 跳转到班级话题页面
  navigateToTopic(id: string) {
    window.open(``, '_blank')
  }

  // 展开和折叠信息
  unfoldOrFoldContent(id: string) {
    this.mapOfEllipsis[id] = !this.mapOfEllipsis[id];
  }
  // 打开个人介绍模态框
  openUserIntro(id: string) {
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
  delete(id: string): void {
    // 删除数据操作
    // setTimeout(() => {
    //   this.dataList.forEach(item => (this.mapOfCheckedId[item.id] = false));
    //   this.refreshStatus();
    //   this.isOperating = false;
    // }, 1000);
  }

}
