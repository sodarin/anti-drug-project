import { Component, OnInit } from '@angular/core';
import {UserStatisticsService} from '../../../service/user-statistics/user-statistics.service';
import {NzMessageService} from 'ng-zorro-antd';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-user-statistics',
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.less']
})
export class UserStatisticsComponent implements OnInit {

  usernameInput: string;

  dateRange = [];

  dataList = [];
  displayData = [];
  loading: boolean = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;

  filterOptions = {};

  constructor(
    private userStatisticsService$: UserStatisticsService,
    private _message: NzMessageService
  ) { }

  ngOnInit() {
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.userStatisticsService$.getUserStatisticTable(pageIndex, 10).subscribe(result => {
      this.loading = false;
      this.total = result[0].total? result[0].total: 0;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
  }

  search() {
    let startTime = 0;
    let endTime = new Date().getTime() / 1000;
    if (this.dateRange.length == 2) {
      startTime = Math.floor(new Date(this.dateRange[0]).getTime() / 1000);
      endTime = Math.floor(new Date(this.dateRange[1]).getTime() / 1000)
    }
    this.displayData = [];
    this.loading = true;
    this.filterOptions = {
      starTime: startTime,
      endTime: endTime,
      searchParameter: this.usernameInput
    };
  }

  exportDta() {
    this.userStatisticsService$.exportData().subscribe(result => {
      let blob = new Blob([result], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'});
      saveAs(blob, 'user-statistics.xlsx');
    })
  }

}
