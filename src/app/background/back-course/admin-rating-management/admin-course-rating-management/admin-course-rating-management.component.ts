import { Component, OnInit } from '@angular/core';
import {CourseReplyService} from '../../../../service/course-reply/course-reply.service';
import {NzMessageService, NzModalService, NzNotificationService} from 'ng-zorro-antd';
import {UserInfoViewModalComponent} from '../../../../core/modal/user-info-view-modal/user-info-view-modal.component';
import {AdminReviewService} from '../../../../service/admin-review/admin-review.service';

@Component({
  selector: 'app-admin-course-rating-management',
  templateUrl: './admin-course-rating-management.component.html',
  styleUrls: ['./admin-course-rating-management.component.less']
})
export class AdminCourseRatingManagementComponent implements OnInit {

  rating  = '0';
  keyword: string = '';
  authorName: string = '';
  courseName: string = '';
  // author: string;
  dataList = [];
  displayData = [];
  loading: boolean = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;

  filterOptions = {
    rating: '',
    author: '',
    course: '',
    keyword: ''
  };
  checkOption = [];
  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  mapOfEllipsis: { [key: string]: boolean } = {};

  constructor(
    private adminReviewService$: AdminReviewService,
    private  _notification: NzNotificationService,
    private  _modalService: NzModalService
  ) { }

  ngOnInit() {
    this.searchData()
  }

  navigateTo(url: string) {
    window.open(url, '_blank')
  }

  search() {
    this.displayData = [];
    this.loading = true;
    this.filterOptions = {
      rating: this.rating,
      author: this.authorName,
      course: this.courseName,
      keyword: this.keyword
    };
    this.pageIndex = 1;
    this.adminReviewService$.getCourseReviews(1, 10, this.filterOptions).subscribe(result => {
      this.loading = false;
      this.total = result.data.total;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result.data.data;
      this.displayData = this.dataList;
      this.displayData.forEach(item => {
        this.mapOfEllipsis[item.id] = true;
        this.mapOfCheckedId[item.id] = false
      });
      this.isAllDisplayDataChecked = false;
      this.isIndeterminate = false;
    }, error1 => {
      this.loading = false;
      this._notification.error(
        '发生错误！',
        `${error1.error}`)
    })
  }
  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.adminReviewService$.getCourseReviews(pageIndex, 10, this.filterOptions).subscribe(result => {
      this.loading = false;
      this.total = result.data.total;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result.data.data;
      this.displayData = this.dataList;
      this.displayData.forEach(item => {
        this.mapOfEllipsis[item.id] = true;
        this.mapOfCheckedId[item.id] = false
      });
      this.isAllDisplayDataChecked = false;
      this.isIndeterminate = false;
    }, error1 => {
      this.loading = false;
      this._notification.error(
        '发生错误！',
        `${error1.error}`)
    })
  }
  checkAll(value: boolean): void {
    this.displayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.displayData
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.displayData.some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
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
    this.adminReviewService$.deleteCourseReviewList(deleteList).subscribe(result => {
      this.isOperating = false;
      if (this.isAllDisplayDataChecked && this.pageIndex === this.totalPage) {
        this.pageIndex --;
      }
      this.searchData();
      this._notification.create(
        'success',
        '删除成功！',
        ''
      )
    }, error1 => {
      this.isOperating = false;
      this._notification.create(
        'error',
        '发生错误！',
        `${error1.error}`
      )
    })
  }

  // 删除单条数据
  deleteRatingRecord(id: string){

    this.adminReviewService$.deleteCourseReview(id).subscribe(result => {
      if (this.displayData.length === 1) {
        this.pageIndex --;
      }
      this.searchData();
      this._notification.success(
        '成功删除！',
        ''
      )
    }, error1 => {
      this._notification.error(
        '发生错误！',
        `${error1.error}`
      )
    })
  }

}
