import { Component, OnInit } from '@angular/core';
import {NotificationService} from "../../../service/notification/notification.service";
import {error} from "util";
import {Notification} from "rxjs";
import {NzNotificationService} from "ng-zorro-antd";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.less']
})
export class NotificationsComponent implements OnInit {
  pageIndex: number = 1;
  pageSize: number =8;
  total: number = 26;


  notification = [
  ];

  constructor(private notificationservice: NotificationService,
              private _notification: NzNotificationService) {
  }


  readNotification(notificationId: number){
    this.notificationservice.readNotification(notificationId).subscribe( result => {
      this.search();
    });
    let i;
    this.notificationservice.changeStatus.subscribe(value => i=value);
    this.notificationservice.changeStatus.next(i+1);
  }

  search() {
    this.notificationservice.getNotifications('1',this.pageIndex, this.pageSize, 1).subscribe( result => {
      this.notification = result.data;
      this.total= result.data[0].jsonContents.totalNum;
    }, error1 => {
      this._notification.create(
        'error',
        '发生错误！',
        `${error1.error}`
      )
    })
  }

  ngOnInit() {
    // this.loadData(1);
    this.search();
  }


  loadData(pi: number): void {
    this.pageIndex=pi;
    this.search();
  }

  decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    str = unescape(str);
    var reg = new RegExp("%","g");
    str = str.replace(reg,"");
    return str;
  }


}
