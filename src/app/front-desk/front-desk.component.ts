import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NzModalService, NzMessageService } from "ng-zorro-antd";
import { LoginModalComponent } from "../core/modal/login-modal/login-modal.component";
import { RegisterModalComponent } from "../core/modal/register-modal/register-modal.component";
import { AuthService } from "./auth/auth.service";

@Component({
  selector: "app-front-desk",
  templateUrl: "./front-desk.component.html",
  styleUrls: ["./front-desk.component.less"],
})
export class FrontDeskComponent implements OnInit {
  isLogin: boolean = false;
  isCollapsed: boolean = true;

  userId: string = "1";

  constructor(
    private router: Router,
    private _modalService: NzModalService,
    private msg: NzMessageService,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  login() {
    const modal = this._modalService.create({
      nzTitle: "登录",
      nzContent: LoginModalComponent,
      nzFooter: null,
      nzOnOk: () =>
        (this.isLogin = typeof window.localStorage["id"] == "string"),
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
    if (window.localStorage["id"]) {
      this.isLogin = false;
      this.authService.logout();
      window.localStorage.removeItem("id");
      window.localStorage.removeItem("password");
      window.localStorage.removeItem("salt");
      window.localStorage.removeItem("nickname");
      window.localStorage.removeItem("title");
      window.localStorage.removeItem("smallavatar");
      window.localStorage.removeItem("mediumavatar");
      window.localStorage.removeItem("largeavatar");
      window.localStorage.removeItem("roles");
      this.msg.success("注销成功");
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
