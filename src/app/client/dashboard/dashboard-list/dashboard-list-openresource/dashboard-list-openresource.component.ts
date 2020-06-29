import { Component, OnInit } from '@angular/core';
import { OpenresourceService } from 'src/app/service/openresource/openresource.service';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-dashboard-list-openresource',
  templateUrl: './dashboard-list-openresource.component.html',
  styleUrls: ['./dashboard-list-openresource.component.less']
})
export class DashboardListOpenresourceComponent implements OnInit {

  displayData = [];
  // resourse = {
  //   picture: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  //   hitNum: 4,
  //   postNum: 4,
  //   id: 1,
  //   title: "禁毒宣传视频",
  //   description: "",
  // };

  constructor(private router: Router,
    private openService$: OpenresourceService,
    private _notification: NzNotificationService) { }

  ngOnInit() {
    this.openService$.getOpenCourseList().subscribe(result => {
      this.displayData = result;
      this.displayData.splice(4, 16);
    }, error1 => {
      this._notification.create(
        'error',
        '发生错误！',
        `${error1.error}`
      )
    })
  }

  navigateByUrl(url) {
    this.router.navigateByUrl(url);
  }
}
