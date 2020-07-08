import { Injectable } from "@angular/core";
import { UserManagementService } from 'src/app/service/user-management/user-management.service';
import { MyteachingService } from 'src/app/service/admin-review/myteaching/myteaching.service';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private userManagementService: UserManagementService,
    private myteachingService: MyteachingService,
  ) {}

  userLoginChecker(): boolean {
    return typeof window.localStorage.getItem("id") == "string";
  }

  userIdentityChecker(identity: string): boolean {
    let localIdentities = window.localStorage.getItem("authorities");
    return localIdentities ? localIdentities.indexOf(identity) != -1 : false;
  }

  async userInGroupChecker(groupId: string): Promise<boolean> {
    // let groups = window.localStorage.getItem("myGroups").split(";");
    // for (const item of groups) {
    //   if (groupId == item) {
    //     return true;
    //   }
    // }
    // return false;
    let userId = window.localStorage.getItem("id");
    if (userId) {
      let res: any = await this.myteachingService.getMyJoinGroup(parseInt(userId)).toPromise();
      for (const groupItem of res.data) {
        if (groupItem.id == groupId) {
          return true;
        }
      }
    }
    return false;
  }

  async userOwnGroupChecker(groupId: string): Promise<boolean> {
    // let groups = window.localStorage.getItem("myOwnGroups").split(";");
    // for (const item of groups) {
    //   if (groupId == item) {
    //     return true;
    //   }
    // }
    // return false;

    let userId = window.localStorage.getItem("id");
    if (userId) {
      let res: any = await this.myteachingService.getMyOwnGroup(parseInt(userId)).toPromise();
      for (const groupItem of res.data) {
        if (groupItem.id == groupId) {
          return true;
        }
      }
    }
    return false;
  }
}
