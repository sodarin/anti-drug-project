import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { FrontDeskService } from 'src/app/service/front-desk/front-desk.service';
import { PrivateChatService } from 'src/app/service/private-chat/private-chat.service';

@Component({
  selector: 'app-front-notification',
  templateUrl: './front-notification.component.html',
  styleUrls: ['./front-notification.component.less']
})
export class FrontNotificationComponent implements OnInit {
  sixin = [];
  notificationData = [];

  constructor(
    private frontdeskServise: FrontDeskService,
    private privateChatService: PrivateChatService,
    private error: NzNotificationService
  ) { }

  ngOnInit() {
    this.privateChatService.changeStatus.subscribe(value => {
      this.search();
    })
  }

  search() {
    this.frontdeskServise.getMessages('0', 1, 5, 1).subscribe(result => {
      this.sixin = result.data;
    }, error1 => {
      this.error.create(
        'error',
        '发生错误',
        `${error1.error}`
      )
    })
    this.frontdeskServise.getNotifications('0', 1, 5, 1).subscribe(result => {
      this.notificationData = result.data;
    }, error1 => {
      this.error.create(
        'error',
        '发生错误！',
        `${error1.error}`
      )
    })
  }

  decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    str = unescape(str);
    var reg = new RegExp("%", "g");
    str = str.replace(reg, "");
    return str;
  }

  @Output() navigateEvent = new EventEmitter();
  navigateByUrl(url: string) {
    this.navigateEvent.emit(url);
  }
}
