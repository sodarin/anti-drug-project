import {Component, OnInit, TemplateRef} from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {UserManagementService} from '../../../../service/user-management/user-management.service';

@Component({
  selector: 'app-login-log-table',
  templateUrl: './login-log-table.component.html',
  styleUrls: ['./login-log-table.component.less']
})
export class LoginLogTableComponent implements OnInit {

  selectedKeywordType: string = 'nickname';
  inputValue: string;
  dateRange: string;

  dataList = [];
  displayData = [];
  loading: boolean = false;
  total: number;
  totalPage: number;
  pageIndex: number = 1;

  logList = [];
  logListTotal = 0;
  modalPageIndex = 1;

  constructor(
    private _message: NzMessageService,
    private userManagementService$: UserManagementService,
    private _modal: NzModalService
  ) { }

  ngOnInit() {
  }

  search() {

  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.userManagementService$.getUserList(pageIndex, 10).subscribe( result => {
      this.loading = false;
      this.total = result[0].totalUser;
      this.totalPage = Math.ceil( this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
      console.log(result)
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
  }

  checkLoginLog(id: string, template: TemplateRef<{}>) {
    this.logList = [];
    this.userManagementService$.getUserDetailById(id).subscribe( result => {
      this.logList = result;
      this._modal.create({
        nzTitle: '查看登录日志',
        nzContent: template,
        nzFooter: null
      })
    })
  }

  turnToNewPage() {

  }
}
