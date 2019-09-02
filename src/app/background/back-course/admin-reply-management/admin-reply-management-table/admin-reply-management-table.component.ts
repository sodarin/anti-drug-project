import { Component, OnInit } from '@angular/core';
import {CourseReplyService} from '../../../../service/course-reply/course-reply.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {UserInfoViewModalComponent} from '../../../../core/modal/user-info-view-modal/user-info-view-modal.component';
@Component({
  selector: 'app-admin-reply-management-table',
  templateUrl: './admin-reply-management-table.component.html',
  styleUrls: ['./admin-reply-management-table.component.less']
})
export class AdminReplyManagementTableComponent implements OnInit {
  replyname   = '';
  keyword: string;
  inputValue: string;
  // author: string;
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
  mapOfEllipsis: { [key: string]: boolean } = {};

  constructor(
    private courseReplyService$: CourseReplyService,
    private  _message: NzMessageService,
    private  _modalService: NzModalService
  ) { }

  ngOnInit() {
    this.searchData();
  }
  // 搜索

  filterReply() {
    this.displayData = [];
    this.loading = true;
    this.filterOptions = {
      topic: this.replyname,
      searchParameter: this.inputValue,
      keyword: this.keyword
    };
    this.courseReplyService$.filterReplyList(1, 10, this.filterOptions).subscribe(result => {
      this.loading = false;
      this.total = result[0].total;
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
  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.courseReplyService$.getReplyList(pageIndex, 10).subscribe(result => {
      this.loading = false;
      this.total = result[0].totalUser;
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
  checkAll(value: boolean): void {
    this.displayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.displayData
      .filter(item => !item.disabled)
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.displayData.some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
   }

  // 导航至问答页面，在新窗口打开
  turnToDetailPage(id: string) {
    window.open(``, '_blank')
  }

  // 折叠和展开内容
  unfoldOrFoldContent(id: string) {
    this.mapOfEllipsis[id] = !this.mapOfEllipsis[id];
  }

  // 打开用户详细信息窗口
  openUserInfoModal(id: string) {
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
  // 批量删除数据
  deleteData(): void {
    // 删除数据操作
    this.isOperating = true;
    let deleteList = [];
    this.displayData.forEach(item => {
      if (this.mapOfCheckedId[item.id])
        deleteList.push(item.id)
    });
    // setTimeout(() => {
    //   this.dataList.forEach(item => (this.mapOfCheckedId[item.id] = false));
    //   this.refreshStatus();
    //   this.isOperating = false;
    // }, 1000);
  }
  // 提醒教师操作
  noticeTeacher(id: string){

  }
  // 删除单条数据
  deleteReply(id: string){

    // setTimeout(() => {
    //   this.dataList.forEach(item => (this.mapOfCheckedId[item.id] = false));
    //   this.refreshStatus();
    //   this.isOperating = false;
    // }, 1000);
  }
}
