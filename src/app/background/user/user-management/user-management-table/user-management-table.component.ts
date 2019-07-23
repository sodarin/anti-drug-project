import {Component, OnInit, TemplateRef} from '@angular/core';
import {UserManagementService} from '../../../../service/user-management/user-management.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {UserInfoViewModalComponent} from '../../../../core/modal/user-info-view-modal/user-info-view-modal.component';
import {UserInfoEditModalComponent} from '../../../../core/modal/user-info-edit-modal/user-info-edit-modal.component';

@Component({
  selector: 'app-user-management-table',
  templateUrl: './user-management-table.component.html',
  styleUrls: ['./user-management-table.component.less']
})
export class UserManagementTableComponent implements OnInit {

  selectedTimeFilterValue: string = 'creatTime';
  dateRange = [];
  selectedRoleFilterValue: string = '';
  selectedNameContaining: string = 'nickname';
  inputValue: string;

  dataList = [];
  displayData = [];
  loading: boolean = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;

  popoverVisible: boolean;

  selectedUserId: string;
  userInfoPageVisible: boolean;

  filterOptions: {};
  checkOption = [];

  constructor(
    private userManagementService$: UserManagementService,
    private _message: NzMessageService,
    private _modalService: NzModalService
  ) {
  }

  ngOnInit() {
    this.searchData()
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
    console.log(this.dateRange)
  }

  filterUser() {
    let startTime = 0;
    let endTime = new Date().getTime();
    if (this.dateRange.length == 2) {
      startTime = new Date(this.dateRange[0]).getTime();
      endTime = new Date(this.dateRange[1]).getTime()
    }
    this.displayData = [];
    this.loading = true;
    this.filterOptions = {
      searchTimeType: this.selectedTimeFilterValue,
      starTime: startTime,
      endTime: endTime,
      role: this.selectedRoleFilterValue,
      searchType: this.selectedNameContaining,
      searchParameter: this.inputValue
    };
    this.userManagementService$.filterUserList(1, 10, this.filterOptions).subscribe(result => {
      this.loading = false;
      this.total = result[0].total;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => this._message.error(error1.error))
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.userManagementService$.getUserList(pageIndex, 10).subscribe(result => {
      this.loading = false;
      this.total = result[0].totalUser;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => this._message.error(error1.error))
  }

  openCreateUserModal() {

  }

  viewUserInfo(id: string) {
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

  editUserInfo(id: string) {
    const modal = this._modalService.create({
      nzTitle: '编辑个人信息',
      nzContent: UserInfoEditModalComponent,
      nzComponentParams: {
        userId: id
      },
      nzWidth: 600,
      nzOkText: '提交',
      nzCancelText: '取消',
      nzOnOk: instance => instance.submit(),
      nzOnCancel: instance => instance.destroy()
    })
  }

  showUserRoleGroupModal(data: any, template: TemplateRef<{}>) {
    this.userManagementService$.getAllUserRoles().subscribe( result => {
      console.log(result);
      result.forEach(item => {
        this.checkOption.push({
          label: item.name,
          value: item.code,
          checked: `${data.roles.indexOf(item.name) > -1}`
        })
      });
      const modal = this._modalService.create( {
        nzTitle: '设置用户组',
        nzContent: template,
        nzOnOk: () => {
          console.log(this.checkOption)
        }
      });
      modal.afterClose.subscribe( () => {
        this.checkOption = [];
      })
    })
  }
  showLockedConfirmModal(id: string, status: number) {
    this._modalService.confirm({
      nzTitle: `确认${status == 0? '解禁': '封禁'}用户？`,
      nzOnOk: () => {
        this.userManagementService$.updateLockedStatus(id, status).subscribe( result => {
          this._message.success("修改成功！")
        }, error1 => this._message.error(error1.error))
      }
    })
  }

}
