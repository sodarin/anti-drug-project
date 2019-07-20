import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserManagementService} from '../../../service/user-management/user-management.service';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';

@Component({
  selector: 'app-user-info-edit-modal',
  templateUrl: './user-info-edit-modal.component.html',
  styleUrls: ['./user-info-edit-modal.component.less']
})
export class UserInfoEditModalComponent implements OnInit {

  @Input()
  userId: string;

  userInfo: any;
  trueName: string;
  gender: string;
  idcard: string;
  iam: string;
  mobile: string;
  company: string;
  job: string;
  signature: string;
  site: string;
  weibo: string;
  weixin: string;
  qq: string;


  introductionContent: any;

  constructor(
    private userManagementService$: UserManagementService,
    private _modal: NzModalRef,
    private _message: NzMessageService
  ) {}

  ngOnInit() {

    this.userManagementService$.getUserDetailById(this.userId).subscribe(result => {
      this.userInfo = result;
      this.trueName = result.trueName;
      this.gender = result.gender;
      this.idcard = result.idcard;
      this.mobile = result.mobile;
      this.company = result.company;
      this.job = result.job;
      this.iam = result.iam;
      this.signature = result.signature;
      this.site = result.site;
      this.weibo = result.weibo;
      this.weixin = result.weixin;
      this.qq = result.qq;
      this.introductionContent = result.about
    })
  }

  submit() {
    this.userManagementService$.updateUserDetail(
      this.userId, this.trueName, this.gender, this.idcard, this.mobile, this.company, this.job, this.iam, this.signature, this.site, this.weibo, this.weixin, this.qq, this.introductionContent
    ).subscribe( result => {
      this._message.success("修改成功！");
    }, error1 => this._message.error(error1.error))
  }

  destroy() {
    this._modal.destroy()
  }

}
