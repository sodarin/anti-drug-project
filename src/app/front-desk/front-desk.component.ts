import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NzMessageService, NzModalService, NzNotificationService} from 'ng-zorro-antd';
import { LoginModalComponent } from '../core/modal/login-modal/login-modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PrivateChatService} from '../service/private-chat/private-chat.service';
import {FrontDeskService} from '../service/front-desk/front-desk.service';

@Component({
  selector: 'app-front-desk',
  templateUrl: './front-desk.component.html',
  styleUrls: ['./front-desk.component.less']
})
export class FrontDeskComponent implements OnInit {
  isLogin: boolean = false;
  isCollapsed: boolean = true;


  sixin = [];
  notificationData = [];

  userId: string = '1';

  constructor(
    private router: Router,
    private _modalService: NzModalService,
    private frontdeskServise: FrontDeskService,
    private privateChatService: PrivateChatService,
    private error: NzNotificationService
  ) { }

  serch(){
    this.frontdeskServise.getMessages('0' ,1,5,1).subscribe(result =>{
      this.sixin = result.data;
    },error1 => {
      this.error.create(
        'error',
        '发生错误',
        `${error1.error}`
      )
    })
    this.frontdeskServise.getNotifications('0',1, 5, 1).subscribe( result => {
      this.notificationData = result.data;
    }, error1 => {
      this.error.create(
        'error',
        '发生错误！',
        `${error1.error}`
      )
    })
  }
  ngOnInit() {
    this.privateChatService.changeStatus.subscribe(value => {
      this.serch();
    })
  }

  login() {
    const modal = this._modalService.create({
      nzTitle: '登录',
      nzContent: LoginModalComponent,
      nzFooter: null
    })
  }

  logout() {
    // 注销相关逻辑
    console.log('已注销');

  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    str = unescape(str);
    var reg = new RegExp("%","g");
    str = str.replace(reg,"");
    return str;
  }


}
