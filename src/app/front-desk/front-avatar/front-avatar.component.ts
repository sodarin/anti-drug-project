import { Component, Output, EventEmitter, DoCheck } from "@angular/core";

@Component({
  selector: "app-front-avatar",
  templateUrl: "./front-avatar.component.html",
  styleUrls: ["./front-avatar.component.less"],
})
export class FrontAvatarComponent implements DoCheck {
  avatar: string;
  nickName: string;
  userId: string;

  constructor() {}

  ngDoCheck() {
    if (typeof this.nickName != "string") {
      this.avatar = window.localStorage.getItem("mediumAvatar");
      this.nickName = window.localStorage.getItem("nickName");
      this.userId = window.localStorage.getItem("id");
    }
  }

  @Output() logoutEvent = new EventEmitter();
  logout() {
    this.logoutEvent.emit();
  }

  @Output() navigateEvent = new EventEmitter();
  navigateByUrl(url: string) {
    this.navigateEvent.emit(url);
  }
}
