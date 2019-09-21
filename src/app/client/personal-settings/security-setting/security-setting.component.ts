import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-setting',
  templateUrl: './security-setting.component.html',
  styleUrls: ['./security-setting.component.less']
})
export class SecuritySettingComponent implements OnInit {

  list: any[] = [
    { title: '登录密码', description: '经常修改密码有著有保护您的账号安全', setup: true, avatar: { type: 'lock', theme: 'outline' }, type: 'login' },
    { title: '支付密码', description: '用于支付时的二次密码校验，加强账户安全性', setup: false, avatar: { type: 'wallet', theme: 'outline' }, type: 'pay' },
    { title: '安全问题', description: '设置安全问题，保护帐号密码安全，也可用于找回支付密码', setup: false, avatar: { type: 'safety', theme: 'outline' }, type: 'security' },
    { title: '邮箱设置', description: '设置邮箱，用于接收通知和修改密码', setup: true, avatar: { type: 'mail', theme: 'outline' }, type: 'email' }
  ]

  loading: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  edit(command) {
  }

  editLoginPasswd() { }

}
