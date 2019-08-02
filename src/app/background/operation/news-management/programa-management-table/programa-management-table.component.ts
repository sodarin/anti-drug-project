import { Component, OnInit } from '@angular/core';
import {ProgramaManagementService} from '../../../../service/programa-management/programa-management.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-programa-management-table',
  templateUrl: './programa-management-table.component.html',
  styleUrls: ['./programa-management-table.component.less']
})
export class ProgramaManagementTableComponent implements OnInit {

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

  constructor(
    private programaManagementService$: ProgramaManagementService,
    private _message: NzMessageService,
    private _modalService: NzModalService
  ) { }

  ngOnInit() {
    this.searchData()
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.programaManagementService$.getProgramaList(pageIndex, 10).subscribe(result => {
      this.loading = false;
      this.total = result[0].totalNews;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => this._message.error(error1.error))
  }
}
