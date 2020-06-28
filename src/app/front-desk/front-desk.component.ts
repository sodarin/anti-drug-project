import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NzMessageService, NzModalService, NzNotificationService} from 'ng-zorro-antd';
import { LoginModalComponent } from '../core/modal/login-modal/login-modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PrivateChatService} from '../service/private-chat/private-chat.service';
import {FrontDeskService} from '../service/front-desk/front-desk.service';
import { RegisterModalComponent } from '../core/modal/register-modal/register-modal.component';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-front-desk',
  templateUrl: './front-desk.component.html',
  styleUrls: ['./front-desk.component.less'] 
})
export class FrontDeskComponent implements OnInit {
  isLogin: boolean = true;
  isCollapsed: boolean = true;

  userId: string = '1';

  constructor(
    private router: Router,
    private _modalService: NzModalService,
    private msg: NzMessageService
  ) { }

  ngOnInit() {
  }

  login() {
    const modal = this._modalService.create({
      nzTitle: '登录',
      nzContent: LoginModalComponent,
      nzFooter: null,
      nzOnOk: () => this.isLogin = (typeof window.localStorage.getItem('id') == "string")
    })
  }

  register() {
    const modal = this._modalService.create({
      nzTitle: '注册',
      nzContent: RegisterModalComponent,
      nzFooter: null
    })
  }

  logout() {
    if (window.localStorage.getItem('id')) {
      this.isLogin = false;
      window.localStorage.removeItem("id");
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("expires_time");
      this.msg.success('注销成功');
    }
  }

  navigateByUrl(url: string) {
    console.log(url);
    this.router.navigateByUrl(url);
  }

  onResize(event) {
    // 改变宽度时自动关闭侧边栏
    if (!this.isCollapsed) {
      this.isCollapsed = true;
    }
  }

}

// @Component({
//   selector: 'app-front-desk',
//   templateUrl: './front-desk.component.html',
//   styleUrls: ['./front-desk.component.less']
// })
// export class FrontDeskComponent implements OnInit {

//   isLogin: boolean = true;//应用时设置成false
//   isCollapsed: boolean = true;


//   sixin = [];
//   notificationData = [];

//   userId: string = '1';

//   constructor(
//     private router: Router,
//     private _modalService: NzModalService,
//     private frontdeskServise: FrontDeskService,
//     private privateChatService: PrivateChatService,
//     private error: NzNotificationService,
//     private msg: NzMessageService,
//     private authService: AuthService
//   ) { }

//   serch(){
//     this.frontdeskServise.getMessages('0' ,1,5,1).subscribe(result =>{
//       this.sixin = result.data;
//     },error1 => {
//       this.error.create(
//         'error',
//         '发生错误',
//         `${error1.error}`
//       )
//     })
//     this.frontdeskServise.getNotifications('0',1, 5, 1).subscribe( result => {
//       this.notificationData = result.data;
//     }, error1 => {
//       this.error.create(
//         'error',
//         '发生错误！',
//         `${error1.error}`
//       )
//     })
//   }
//   ngOnInit() {
//     this.privateChatService.changeStatus.subscribe(value => {
//       this.serch();
//     })
//   }

//   login() {
//     const modal = this._modalService.create({
//       nzTitle: '登录',
//       nzContent: LoginModalComponent,
//       nzFooter: null,
//       nzMaskClosable:false,
//       nzOnOk: () => this.isLogin = (typeof window.localStorage["id"] == "string")
//     })
//   }

//   register() {
//     const modal = this._modalService.create({
//       nzTitle: '注册',
//       nzContent: RegisterModalComponent,
//       nzMaskClosable:false,
//       nzFooter: null
//     })
//   }

//   logout() {
//     if (window.localStorage["id"]) {
//       this.isLogin = false;
//       window.localStorage.removeItem("id");
//       window.localStorage.removeItem("password");
//       window.localStorage.removeItem("salt");
//       window.localStorage.removeItem("nickname");
//       window.localStorage.removeItem("title");
//       window.localStorage.removeItem("smallavatar");
//       window.localStorage.removeItem("mediumavatar");
//       window.localStorage.removeItem("largeavatar");
//       window.localStorage.removeItem("roles");
//       this.msg.success('注销成功');
//     }
//   }

//   navigateByUrl(url: string) {
//     this.router.navigateByUrl(url);
//   }

//   decodeUnicode(str) {
//     str = str.replace(/\\/g, "%");
//     str = unescape(str);
//     var reg = new RegExp("%","g");
//     str = str.replace(reg,"");
//     return str;
//   }


// }
