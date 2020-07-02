import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { NzMessageService } from "ng-zorro-antd";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private msg: NzMessageService,
    private authService: AuthService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let url: string = state.url;

    // 创建小组，仅限管理员访问
    if (url == "/client/groupcreate") {
      return this.checkStatus(url, "SUPER_ADMIN");
    }

    // 创建小组话题，仅限小组成员访问
    if (url.indexOf("/groupthread/grouptopic") != -1) {
      let targetGroupId = url.split("/")[3];
      if (!this.authService.userInGroupChecker(targetGroupId)) {
        this.msg.error("您不在此小组内");
        return false;
      }
      return true;
    }
    return true;
  }

  checkStatus(url: string, identity = null): boolean {
    if (!this.authService.userLoginChecker()) {
      this.msg.error("尚未登录");
      return false;
    }
    if (!this.authService.userIdentityChecker(identity)) {
      this.msg.error("权限不足");
      return false;
    }
    return true;
  }
}
