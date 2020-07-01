import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  userIdentityChecker(identity: string): boolean {
    let localIdentities = window.localStorage.getItem("authorities");
    return localIdentities.indexOf(identity) != -1;
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
