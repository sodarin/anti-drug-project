import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { NzMessageService } from "ng-zorro-antd";
import { AuthService } from "./auth.service";
import { MyteachingService } from "src/app/service/admin-review/myteaching/myteaching.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private msg: NzMessageService,
    private authService: AuthService,
    private myteachingService: MyteachingService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let url: string = state.url;
    if (url == "/client/groupcreate") {
      return this.checkStatus(url, "SUPER_ADMIN");
    }
    if (url.indexOf("/groupthread/grouptopic") != -1) {
      return this.checkStatus(url, "SUPER_ADMIN");
    }

    return true;
  }

  checkStatus(url: string, identity = null): boolean {
    if (typeof window.localStorage.getItem("id") != "string") {
      this.msg.error("尚未登录");
      return false;
    }

    if (!this.authService.userIdentityContain(identity)) {
      this.msg.error("权限不足");
      return false;
    }

    return true;
  }

  getGroups(id: number) {
    this.myteachingService.getMyJoinGroup(id);
    this.myteachingService.getMyOwnGroup(id);
  }
}
