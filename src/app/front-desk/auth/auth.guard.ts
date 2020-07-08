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

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    let url: string = state.url;
    let canActivate: boolean = true;
    console.log(url);

    if (!this.authService.userLoginChecker()) {
      this.msg.error("尚未登录");
      canActivate = false;
    } else {
      // 页面：创建小组，仅限管理员访问
      if (url == "/client/groupcreate") {
        canActivate = this.checkIdentity("SUPER_ADMIN");
      }

      // 页面：后台管理，仅限管理员访问
      if (url == "/admin") {
        canActivate = this.checkIdentity("SUPER_ADMIN");
      }

      // 页面：我的教学系列，限管理员、教师访问
      if (
        url == "/client/mine/teachingcourse" ||
        url == "/client/mine/createcourse" ||
        url == "/client/mine/teachingclass" ||
        url == "/client/mine/studentQA" ||
        url == "/client/mine/studenttopic" ||
        url == "/client/mine/papermarking" ||
        url == "/client/mine/teachingdatabase"
      ) {
        canActivate = this.checkIdentity("ROLE_TEACHER");
      }

      // 页面：创建小组话题，仅限小组成员访问
      if (url.indexOf("/groupthread/grouptopic") != -1) {
        let targetGroupId = url.split("/")[3];
        let res: any = await this.authService.userInGroupChecker(targetGroupId);
        if (!res) {
          this.msg.error("您不在此小组内");
          canActivate = false;
        }
      }
    }

    if (!canActivate && this.router.url == "/") {
      this.router.navigate(["404"], { skipLocationChange: true });
    }

    return canActivate;
  }

  checkIdentity(identity = null): boolean {
    if (!this.authService.userIdentityChecker(identity)) {
      this.msg.error("权限不足");
      return false;
    }
    return true;
  }
}
