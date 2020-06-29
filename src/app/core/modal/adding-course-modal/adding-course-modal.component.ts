import {Component, Input, OnInit} from '@angular/core';
import {NzModalRef, NzNotificationService} from 'ng-zorro-antd';
import {ClientClassManagementService} from '../../../service/client-class-management/client-class-management.service';

@Component({
  selector: 'app-adding-course-modal',
  templateUrl: './adding-course-modal.component.html',
  styleUrls: ['./adding-course-modal.component.less']
})
export class AddingCourseModalComponent implements OnInit {

  @Input()
  classroomId: string;

  title: string = '';
  courseList = [];
  displayData = [];

  loading: boolean = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;

  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  selectedValue: { [key: string]: string } = {};

  constructor(
    private _modal: NzModalRef,
    private classManagement$: ClientClassManagementService,
    private _notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.searchData()
  }

  submit() {
    let courseIdList = [];
    this.courseList.forEach(item => {
      if (this.mapOfCheckedId[item.courseSetId]) {
        let courseList = {
          courseId: this.selectedValue[item.courseSetId],
          courseSetId: item.courseSetId
        };
        courseIdList.push(courseList)
      }
    });
    this._modal.destroy(courseIdList)
  }

  destroy() {
    this._modal.destroy()
  }

  filterCourse() {
    this.loading = true;
    this.pageIndex = 1;
    this.classManagement$.searchCourseNotInClass(this.classroomId, 8, 1, this.title).subscribe(result => {
      this.loading = false;
      this.courseList = result.data.CouerseSetList;
      this.total = result.data.total;
      this.courseList.forEach(item => {
        this.mapOfCheckedId[item.courseSetId] = false;
        this.selectedValue[item.courseSetId] = item.courseVOJOList[0].courseId;
      });
      this.isAllDisplayDataChecked = false;
      this.isIndeterminate = false;
    }, error1 => {
      this.loading = false;
      this._notification.error(
        '发生错误',
        `${error1.error}`
      )
    })
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.loading = true;
    this.classManagement$.getCoursesNotInClass(this.classroomId, 8, pageIndex).subscribe(result => {
      this.loading = false;
      this.courseList = result.data.CouerseSetList;
      this.total = result.data.total;
      this.courseList.forEach(item => {
        this.mapOfCheckedId[item.courseSetId] = false;
        this.selectedValue[item.courseSetId] = item.courseVOJOList[0].courseId;
      });
      this.isAllDisplayDataChecked = false;
      this.isIndeterminate = false;
    }, error1 => {
      this.loading = false;
      this._notification.error(
        '发生错误',
        `${error1.error}`
      )
    })
  }

  checkAll(value: boolean): void {
    this.courseList.forEach(item => (this.mapOfCheckedId[item.courseSetId] = value));
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.courseList
      .every(item => this.mapOfCheckedId[item.courseSetId]);
    console.log(this.mapOfCheckedId);
    this.isIndeterminate =
      this.courseList.some(item => this.mapOfCheckedId[item.courseSetId]) &&
      !this.isAllDisplayDataChecked;
  }

}
