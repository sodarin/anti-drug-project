import { Component, OnInit } from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {WebsitesAnnouncementService} from '../../../service/websites-announcement/websites-announcement.service';
import {AnnouncementEditModalComponent} from '../../../core/modal/announcement-edit-modal/announcement-edit-modal.component';

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
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    });
  }

  openCreateAnnouncementModal() {
    const modal = this._modalService.create({
      nzTitle: '新建公告',
      nzContent: AnnouncementEditModalComponent,
      nzWidth: 600,
      nzOnOk: instance => instance.submit(),
      nzOnCancel: instance => instance.destroy()
    })
  }

  edit(id: string) {
    const modal = this._modalService.create({
      nzTitle: '编辑公告',
      nzContent: AnnouncementEditModalComponent,
      nzWidth: 600,
      nzComponentParams: {
        id: id
      },
      nzOnOk: instance => instance.submit(),
      nzOnCancel: instance => instance.destroy()
    })
  }

  delete(id: string) {
    this._modalService.confirm({
      nzTitle: '是否要删除该条公告？',
      nzOnOk: () => console.log('1111')
    })
  }

}
