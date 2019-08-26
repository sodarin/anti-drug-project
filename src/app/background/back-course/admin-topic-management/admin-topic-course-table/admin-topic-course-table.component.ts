import { Component, OnInit } from '@angular/core';
import {AdminTopicCourseService} from '../../../../service/admin-topic-course/admin-topic-course.service';
import {NzMessageService, NzModalService} from "ng-zorro-antd";

@Component({
  selector: 'app-admin-topic-course-table',
  templateUrl: './admin-topic-course-table.component.html',
  styleUrls: ['./admin-topic-course-table.component.less']
})
export class AdminTopicCourseTableComponent implements OnInit {

  postType: string;
  attribute: string;
  title: string;
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
    private adminTopicCourseService$: AdminTopicCourseService,
    private _message: NzMessageService,
    private _modalService: NzModalService
  ) { }

  ngOnInit() {
    this.searchData()
  }
  // 搜索
  filterPost() {
    this.displayData = [];
    this.loading = true;
    this.filterOptions = {
      postType: this.postType,
      attribute: this.attribute,
      title: this.title,
      creator: this.creator,
      keyWord: this.keyWord,
    };
    this.adminTopicCourseService$.filterPostList(1, 10, this.filterOptions).subscribe(result => {
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
    // 删除数据操作
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
    this.adminTopicCourseService$.getPostList(pageIndex, 10).subscribe(result => {
      this.loading = false;
      this.total = result[0].totalNews;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
      this.displayData.forEach(item => {
        this.mapOfEllipsis[item.id] = true
      })
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
  }

  // 全选功能
  checkAll(value: boolean): void {
    this.displayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.displayData.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.displayData.filter(item => !item.disabled).some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
  }

  // 跳转到课程话题页面
  navigateToTopic(id: string) {
    window.open(``, '_blank')
  }

  // 展开和折叠信息
  unfoldOrFoldContent(id: string) {
    this.mapOfEllipsis[id] = !this.mapOfEllipsis[id];
  }

  // 加精
  setElaborate(id: string, data: any) {

  }

  // 置顶
  setTop(id: string, data: any) {

  }

  delete(id: string): void {
    this._modalService.confirm({
      nzTitle: '是否要删除该条记录？',
      nzOnOk: () => {
        console.log('111')
      }
    })
  }

}
