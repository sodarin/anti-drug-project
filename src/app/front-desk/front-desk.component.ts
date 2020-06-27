import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NzMessageService, NzModalService } from "ng-zorro-antd";
import { LoginModalComponent } from "../core/modal/login-modal/login-modal.component";
import { RegisterModalComponent } from "../core/modal/register-modal/register-modal.component";
import { FrontAvatarComponent } from "./front-avatar/front-avatar.component";

@Component({
  selector: "app-front-desk",
  templateUrl: "./front-desk.component.html",
  styleUrls: ["./front-desk.component.less"],
})
export class FrontDeskComponent implements OnInit {
  isLogin: boolean = typeof window.localStorage.getItem("id") == "string";
  isCollapsed: boolean = true;

  constructor(
    private router: Router,
    private _modalService: NzModalService,
    private msg: NzMessageService
  ) {}

  ngOnInit() {}

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
    console.log(url);
    this.router.navigateByUrl(url);
  }

  onResize() {
    if (!this.isCollapsed) {
      this.isCollapsed = true;
    }
  }
}
