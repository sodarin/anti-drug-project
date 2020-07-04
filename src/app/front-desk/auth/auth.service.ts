import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  userLoginChecker(): boolean {
    return typeof window.localStorage.getItem("id") == "string";
  }

  userIdentityChecker(identity: string): boolean {
    let localIdentities = window.localStorage.getItem("authorities");
    return localIdentities ? localIdentities.indexOf(identity) != -1 : false;
  }

  userInGroupChecker(groupId: string): boolean {
    let groups = window.localStorage.getItem("myGroups").split(";");
    for (const item of groups) {
      if (groupId == item) {
        return true;
      }
    }
    return false;
  }

  userOwnGroupChecker(groupId: string): boolean {
    let groups = window.localStorage.getItem("myOwnGroups").split(";");
    for (const item of groups) {
      if (groupId == item) {
        return true;
      }
    }
    return false;
  }
}
