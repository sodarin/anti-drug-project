import { Component, OnInit } from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {WebsitesAnnouncementService} from '../../../service/websites-announcement/websites-announcement.service';

@Component({
  selector: 'app-websites-announcement-management',
  templateUrl: './websites-announcement-management.component.html',
  styleUrls: ['./websites-announcement-management.component.less']
})
export class WebsitesAnnouncementManagementComponent implements OnInit {
  dataList = [];
  displayData = [];
  loading = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;

  constructor(
    private websitesAnnouncementService$: WebsitesAnnouncementService ,
    private _message: NzMessageService,
    private _modalService: NzModalService
  ) { }

  ngOnInit() {
    this.searchData();
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.websitesAnnouncementService$.getMessageList(pageIndex, 10).subscribe(result => {
      this.loading = false;
      this.total = result[0].totalUser;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => this._message.error(error1.error));
  }

}
