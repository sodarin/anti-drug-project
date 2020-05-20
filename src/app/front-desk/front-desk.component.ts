import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { LoginModalComponent } from '../core/modal/login-modal/login-modal.component';
import { RegisterModalComponent } from '../core/modal/register-modal/register-modal.component';

@Component({
  selector: 'app-front-desk',
  templateUrl: './front-desk.component.html',
  styleUrls: ['./front-desk.component.less']
})
export class FrontDeskComponent implements OnInit {
  isLogin: boolean = false;
  isCollapsed: boolean = true;

  userId: string = '1';

  constructor(
    private router: Router,
    private _modalService: NzModalService,
  ) { }

  ngOnInit() {
  }

  login() {
    const modal = this._modalService.create({
      nzTitle: '登录',
      nzContent: LoginModalComponent,
      nzFooter: null
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
    // 注销相关逻辑
    console.log('已注销');

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
