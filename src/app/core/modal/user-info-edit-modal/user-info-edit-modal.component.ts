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
      this.userInfo = result.data;
      this.trueName = result.data.trueName;
      this.gender = result.data.gender;
      this.idcard = result.data.idcard;
      this.mobile = result.data.mobile;
      this.company = result.data.company;
      this.job = result.data.job;
      this.iam = result.data.iam;
      this.signature = result.data.signature;
      this.site = result.data.site;
      this.weibo = result.data.weibo;
      this.weixin = result.data.weixin;
      this.qq = result.data.qq;
      this.introductionContent = result.data.about
    })
  }

  submit() {
    let shouldBeClosed = false;
    this.userManagementService$.updateUserDetail(
      this.userId, this.trueName, this.gender, this.idcard, this.mobile, this.company, this.job, this.iam, this.signature, this.site, this.weibo, this.weixin, this.qq, this.introductionContent
    ).subscribe( result => {
      shouldBeClosed = true;
      this._message.success("修改成功！");
    }, error1 => {
      shouldBeClosed = false;
      this._message.error(error1.error)
    });
    return shouldBeClosed;
  }

  destroy() {
    this._modal.destroy()
  }

}
