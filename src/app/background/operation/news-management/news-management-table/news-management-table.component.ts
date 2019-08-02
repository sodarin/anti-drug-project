import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {NewsManagementService} from '../../../../service/news-management/news-management.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';



@Component({
  selector: 'app-news-management-table',
  templateUrl: './news-management-table.component.html',
  styleUrls: ['./news-management-table.component.less']
})
export class NewsManagementTableComponent implements OnInit {

  selectedProgramaValue: string = '';
  selectedAttributeValue: string = '';
  selectedStateValue: string = '';
  inputValue: string;

  dataList = [];
  displayData = [];
  loading: boolean = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;

  popoverVisible: boolean;

  selectedNewsId: string;
  newsInfoPageVisible: boolean;

  filterOptions: {};
  checkOption = [];

  // 全选功能
  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;

  constructor(
    private newsManagementService$: NewsManagementService,
    private _message: NzMessageService,
    private _modalService: NzModalService
  ) { }

  ngOnInit() {
    this.searchData()
  }
   // 搜索
  filterNews() {
    this.displayData = [];
    this.loading = true;
    this.filterOptions = {  
      searchPrograma: this.selectedProgramaValue,
      searchParameter: this.inputValue,
      searchAttribute: this.selectedAttributeValue,
      searchState: this.selectedStateValue,
    };
    this.newsManagementService$.filterNewsList(1, 10, this.filterOptions).subscribe(result => {
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
    this.newsManagementService$.getNewsList(pageIndex, 10).subscribe(result => {
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
  operateData(): void {
    // 删除数据操作
    this.isOperating = true;
    setTimeout(() => {
      this.dataList.forEach(item => (this.mapOfCheckedId[item.id] = false));
      this.refreshStatus();
      this.isOperating = false;
    }, 1000);
  }

  // 取消发布
  cancelNews(id: string) {

  }
  // 移至回收站
  recycleNews(id: string) {

  }


}
