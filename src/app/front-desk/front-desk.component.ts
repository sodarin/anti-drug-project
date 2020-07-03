import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NzMessageService, NzModalService } from "ng-zorro-antd";
import { LoginModalComponent } from "../core/modal/login-modal/login-modal.component";
import { RegisterModalComponent } from "../core/modal/register-modal/register-modal.component";

@Component({
  selector: "app-front-desk",
  templateUrl: "./front-desk.component.html",
  styleUrls: ["./front-desk.component.less"],
})
export class FrontDeskComponent implements OnInit {
  isLogin: boolean = true;//typeof window.localStorage.getItem("id") == "string";
  isCollapsed: boolean = true;

  constructor(
    private router: Router,
    private _modalService: NzModalService,
    private msg: NzMessageService
  ) {}

  ngOnInit() {
    if (this.isLogin) {
      this.checkLoginStatus();
    }
  }

  checkLoginStatus() {
    const expireTime =
      (parseInt(window.localStorage.getItem("exp")) +
        parseInt(window.localStorage.getItem("expires_in"))) *
      1000;
    const expireDate = new Date(expireTime);
    const now = new Date();

    if (expireDate.getTime() < now.getTime()) {
      window.localStorage.clear();
      this.isLogin = false;
    }
  }

  login() {
    const modal = this._modalService.create({
      nzTitle: "登录",
      nzContent: LoginModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        this.isLogin = typeof window.localStorage.getItem("id") == "string";
      },
    });
  }

  register() {
    const modal = this._modalService.create({
      nzTitle: "注册",
      nzContent: RegisterModalComponent,
      nzFooter: null,
    });
  }

  logout() {
    if (window.localStorage.getItem("id")) {
      window.localStorage.clear();
      this.isLogin = false;
      this.msg.success("注销成功");
    }
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  onResize() {
    if (!this.isCollapsed) {
      this.isCollapsed = true;
    }
  }
}
