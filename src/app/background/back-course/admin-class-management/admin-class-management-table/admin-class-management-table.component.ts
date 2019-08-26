import { Component, OnInit } from '@angular/core';
import {ClassManagementService} from '../../../../service/class-management/class-management.service';
import {NzMessageService, NzModalService} from "ng-zorro-antd";
import {TeacherRecommendModalComponent} from '../../../../core/modal/teacher-recommend-modal/teacher-recommend-modal.component';


@Component({
  selector: 'app-admin-class-management-table',
  templateUrl: './admin-class-management-table.component.html',
  styleUrls: ['./admin-class-management-table.component.less']
})
export class AdminClassManagementTableComponent implements OnInit {
  className: string;

  classNum = 0;

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
    private _modalService: NzModalService,
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
      this.classNum = this.total;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    });
  }
  filterClass() {
    this.displayData = [];
    this.loading = true;
    this.filterOptions = {
      className: this.className,
    };
    this.classManagementService$.filterUserList(1, 10, this.filterOptions).subscribe(result => {
      this.loading = false;
      this.total = result[0].total ? result[0].total: 0;
      this.classNum = this.total;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
  }

  // 查看班级课程的详情
  checkCourseDetail(id: string) {
    window.open(``, '_blank')
  }
  // 发布班级
  publishClass(id: string) {
    this._modalService.confirm({
      nzTitle: '是否确定要发布班级？',
      nzOnOk: () => console.log('111')
    })
  }

  // 关闭班级
  closeClass(id: string) {
    this._modalService.confirm({
      nzTitle: '是否确定要关闭班级？',
      nzOnOk: () => console.log('111')
    })
  }

  // 推荐班级
  recommendationClass(id: string) {
    const modal = this._modalService.create({
      nzTitle: '设置班级的推荐序号',
      nzContent: TeacherRecommendModalComponent,
      nzComponentParams: {
        id: id
      },
      nzOnOk: instance => {
        console.log(instance.recommendOrder)
      },
      nzOnCancel: instance => instance.destroy()
    })
  }

  // 取消推荐
  cancelRecommendation(id: string) {
    this._modalService.confirm({
      nzTitle: '是否取消班级的推荐？',
      nzOnOk: () => console.log('111')
    })
  }

  // 管理
  management(id: string) {
    window.open(``, '_blank')
  }

}
