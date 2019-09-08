import { Component, OnInit } from '@angular/core';
import {GroupTopicManagementService} from '../../../../service/group-topic-management/group-topic-management.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-group-topic',
  templateUrl: './group-topic.component.html',
  styleUrls: ['./group-topic.component.less']
})
export class GroupTopicComponent implements OnInit {
  selectedStateFilterValue   = 'open';
  inputValue: string;
  selectedAttributeFilterValue = 'best';

  dataList = [];
  displayData = [];
  loading: boolean = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;

  filterOptions: {};
  checkOption = [];
  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;


  constructor(
    private groupTopicManagementService$: GroupTopicManagementService,
    private  _message: NzMessageService,
    private  _modalService: NzModalService
  ) { }

  ngOnInit() {
    this.searchData();
  }
  // 搜索

  filterTopic() {
    this.displayData = [];
    this.loading = true;
    this.filterOptions = {
      state: this.selectedStateFilterValue,
      searchParameter: this.inputValue,
      attribute: this.selectedAttributeFilterValue
    };
    this.groupTopicManagementService$.filterTopicList(1, 10, this.filterOptions).subscribe(result => {
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
    this.groupTopicManagementService$.getTopicList(pageIndex, 10).subscribe(result => {
      this.loading = false;
      this.total = result[0].totalUser;
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

  // 修改置顶加精属性
  checkChange(data: any) {

  }
  // 关闭小组
  closeGroup(id: any){
    this._modalService.confirm({
      nzTitle: '是否关闭该小组？',
      nzOnOk: () => console.log('111')
    })
  }

  // 开放小组
  openGroup(id: string) {
    this._modalService.confirm({
      nzTitle: '是否开放该小组？',
      nzOnOk: () => console.log('111')
    })
  }

  // 删除话题
  delete(id: string) {
    this._modalService.confirm({
      nzTitle: '是否删除该话题？',
      nzOnOk: () => console.log('111')
    })
  }
}
