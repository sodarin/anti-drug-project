import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  userIdentityContain(identity: string): boolean {
    let localIdentities = window.localStorage.getItem("authorities");
    return localIdentities.indexOf(identity) != -1;
  }
}
