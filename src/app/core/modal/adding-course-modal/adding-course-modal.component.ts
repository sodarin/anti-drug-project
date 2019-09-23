import {Component, Input, OnInit} from '@angular/core';
import {NzModalRef} from 'ng-zorro-antd';

@Component({
  selector: 'app-adding-course-modal',
  templateUrl: './adding-course-modal.component.html',
  styleUrls: ['./adding-course-modal.component.less']
})
export class AddingCourseModalComponent implements OnInit {

  @Input()
  classroomId: string;

  title: string;
  courseList = [];
  displayData = [];

  loading: boolean = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;

  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};

  constructor(
    private _modal: NzModalRef
  ) { }

  ngOnInit() {
  }

  submit() {

  }

  destroy() {
    this._modal.destroy()
  }

  filterCourse() {

  }

  searchData(pageIndex: number = this.pageIndex) {

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

}
