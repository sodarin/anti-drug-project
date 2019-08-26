import {Component, OnInit, TemplateRef} from '@angular/core';
import {UserManagementService} from '../../../../service/user-management/user-management.service';
import {NzMessageService, NzModalService, UploadFile} from 'ng-zorro-antd';
import {UserInfoViewModalComponent} from '../../../../core/modal/user-info-view-modal/user-info-view-modal.component';
import {UserInfoEditModalComponent} from '../../../../core/modal/user-info-edit-modal/user-info-edit-modal.component';
import {Observable, Observer} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CreateUserModalComponent} from '../../../../core/modal/create-user-modal/create-user-modal.component';

@Component({
  selector: 'app-user-management-table',
  templateUrl: './user-management-table.component.html',
  styleUrls: ['./user-management-table.component.less']
})
export class UserManagementTableComponent implements OnInit {

  selectedTimeFilterValue: string = 'loginTime';
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

  avatarUrl: string;

  previewImage = '';
  previewVisible = false;

  modifyPasswordForm: FormGroup;

  constructor(
    private userManagementService$: UserManagementService,
    private _message: NzMessageService,
    private _modalService: NzModalService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.searchData();
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
    console.log(this.dateRange)
  }

  //搜索用户
  filterUser() {
    let startTime = 0;
    let endTime = new Date().getTime() / 1000;
    if (this.dateRange.length == 2) {
      startTime = Math.floor(new Date(this.dateRange[0]).getTime() / 1000);
      endTime = Math.floor(new Date(this.dateRange[1]).getTime() / 1000)
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
      this.total = result[0].totalUser ? result[0].totalUser: 0;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => this._message.error(error1.error))
  }

  //获取用户列表
  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.userManagementService$.getUserList(pageIndex, 10).subscribe(result => {
      this.loading = false;
      this.total = result[0].totalUser ? result[0].totalUser: 0;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.message)
    })
  }

  //新建用户
  openCreateUserModal() {
    const modal = this._modalService.create({
      nzTitle: '新建用户',
      nzContent: CreateUserModalComponent,
      nzOkText: '提交',
      nzCancelText: '取消',
      nzOnOk: instance => instance.submit(),
      nzOnCancel: instance => instance.cancel()
    })
  }

  //查看个人信息
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

  //编辑个人信息
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

  //修改用户组
  showUserRoleGroupModal(data: any, template: TemplateRef<{}>) {
    this.userManagementService$.getAllUserRoles().subscribe( result => {
      result.forEach(item => {
        this.checkOption.push({
          label: item.name,
          value: item.code,
          checked: data.roles.indexOf(item.name) > -1
        })
      });
      const modal = this._modalService.create( {
        nzTitle: '设置用户组',
        nzContent: template,
        nzOnOk: () => {
          let flag = false;
          let roleString = '|';
          let tempList = [];
          let updateRoleList = [];
          this.checkOption.forEach(item => {
            if (item.checked) {
              flag = true;
              roleString = roleString + item.value + '|';
              updateRoleList.push(item.label)
            }
          });
          if (!flag)
            roleString = '';
          this.userManagementService$.updateUserRoles(roleString, data.userId).subscribe( result => {
            tempList = this.displayData;
            tempList.forEach(item => {
              if (item.userId == data.userId)
                item.roles = updateRoleList
            });
            this.displayData = tempList;
            this._message.success("修改成功")
          }, error1 => this._message.error(error1.error))
        }
      });
      modal.afterClose.subscribe( () => {
        this.checkOption = [];
      })
    })
  }

  showAvatarUploadModal(data: any, template: TemplateRef<{}>) {
    const modal = this._modalService.create( {
      nzTitle: '上传头像',
      nzContent: template,
      nzFooter: null
    })

  }

  //修改头像上传相关
  beforeUpload = (file: File) => {
    return new Observable((observer: Observer<boolean>) => {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this._message.error('图片大小不能超过2M！');
        observer.complete();
        return;
      }
      observer.next(isLt2M);
      observer.complete();
    });
  };

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }
  handleChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this._message.error('网络错误');
        this.loading = false;
        break;
    }
  }
  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };


  //弹出封禁解禁用户框，处理相应逻辑
  showLockedConfirmModal(id: string, status: number) {
    this._modalService.confirm({
      nzTitle: `确认${status == 0? '解禁': '封禁'}用户？`,
      nzOnOk: () => {
        this.userManagementService$.updateLockedStatus(id, status).subscribe( result => {
          let tempList = this.displayData;
          tempList.forEach(item => {
            if (item.userId == id) {
              item.locked = status;
            }
          });
          this.displayData = tempList;
          this._message.success("修改成功！")
        }, error1 => this._message.error(error1.error))
      }
    })
  }

  //修改密码
  showPasswordModifyModal(data: any, template: TemplateRef<{}>) {
    this.modifyPasswordForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, this.confirmationValidator]]
    });
    const modal = this._modalService.create({
      nzTitle: '修改密码',
      nzContent: template,
      nzOnOk: () => {
        if (!(this.modifyPasswordForm.controls.password.errors || this.modifyPasswordForm.controls.confirmPassword.errors)) {
          this.userManagementService$.updatePassword(this.modifyPasswordForm.controls.password.value, data.userId).subscribe( result => {
            this._message.success("修改成功！")
          }, error1 => this._message.error(error1.error))
        }
      }
    })
  }

  //确认密码
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.modifyPasswordForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.modifyPasswordForm.controls.confirmPassword.updateValueAndValidity());
  }

}
