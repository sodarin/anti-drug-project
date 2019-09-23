import { Component, OnInit } from '@angular/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { LoginPasswdEditModelComponent } from '../../../core/modal/login-passwd-edit-model/login-passwd-edit-model.component';
import { LoginModalComponent } from '../../../core/modal/login-modal/login-modal.component';

@Component({
  selector: 'app-security-setting',
  templateUrl: './security-setting.component.html',
  styleUrls: ['./security-setting.component.less']
})
export class SecuritySettingComponent implements OnInit {

  list: any[] = [
    { title: '登录密码', description: '经常修改密码有著有保护您的账号安全', setup: true, avatar: { type: 'lock', theme: 'outline' }, type: 'login' },
    { title: '安全问题', description: '设置安全问题，保护帐号密码安全，也可用于找回支付密码', setup: false, avatar: { type: 'safety', theme: 'outline' }, type: 'security' },
  ];

  loading: boolean = false;


  constructor(private _modalService: NzModalService) { }

  ngOnInit() {
  }

  edit(command) {
    if (command == 'login') { this.editLoginPasswd() }
  }

  editLoginPasswd() {
    const modal = this._modalService.create({
      nzTitle: '密码修改',
      nzContent: LoginPasswdEditModelComponent,
      nzFooter: null
    })
  }


}
