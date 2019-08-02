import {Component, Input, OnInit} from '@angular/core';
import {UserApprovalService} from '../../../../service/user-approval/user-approval.service';
import {NzMessageService} from 'ng-zorro-antd';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-approval-pending-table',
  templateUrl: './approval-pending-table.component.html',
  styleUrls: ['./approval-pending-table.component.less']
})
export class ApprovalPendingTableComponent implements OnInit {

  @Input()
  status: number;


  selectedNameContaining: string = 'username';
  nameContainingKeyword: string = '';

  displayData = [];
  loading: boolean = false;
  pageIndex: number = 1;

  total: number = 0;

  dateRange = [];

  filterOptions: {};

  constructor(
    private userApproval$: UserApprovalService,
    private _message: NzMessageService,
  ) { }

  ngOnInit() {
    this.searchData();
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.filterOptions = {
      status: this.status
    };
    this.loading = true;
    this.userApproval$.getApprovingList(pageIndex, 10, this.filterOptions).subscribe( result => {
      this.loading = false;
      this.total = result[0].totalApproval;
      this.displayData = result;
    }, error1 => this._message.error(error1.error))
  }

  filter() {
    let startTime = 0;
    let endTime = Math.floor(new Date().getTime() / 1000);
    if (this.dateRange.length == 2) {
      startTime = Math.floor(new Date(this.dateRange[0]).getTime() / 1000);
      endTime = Math.floor(new Date(this.dateRange[1]).getTime() / 1000)
    }
    this.displayData = [];
    this.loading = true;
    this.filterOptions = {
      searchTimeType: 'createdTime',
      starTime: startTime,
      endTime: endTime,
      searchType: this.selectedNameContaining,
      searchParameter: this.nameContainingKeyword
    };
    this.userApproval$.filterApprovingList(this.pageIndex, 10, this.filterOptions).subscribe( result => {
      this.loading = false;
      this.total = result[0].totalApproval;
      this.displayData = result;
    }, error1 => this._message.error(error1.error))
  }

  approvalSuccess(userId: string) {

  }

  approvalFailed(userId: string) {

  }

}
