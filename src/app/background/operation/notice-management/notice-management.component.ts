import {Component, OnInit, TemplateRef} from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {NoticeManagementService} from '../../../service/notice-management/notice-management.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-notice-management',
  templateUrl: './notice-management.component.html',
  styleUrls: ['./notice-management.component.less']
})
export class NoticeManagementComponent implements OnInit {
  dataList = [];
  displayData = [];
  loading = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;

  newNoticeForm: FormGroup;
  content: string = '';

  title: string = '';
  time: string = '';
  noticeContent: string = '';

  constructor(
    private noticeManagementService$: NoticeManagementService ,
    private _message: NzMessageService,
    private _modalService: NzModalService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.searchData();
    this.newNoticeForm = this.fb.group({
      title: ['', Validators.required]
    })
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.noticeManagementService$.getMessageList(pageIndex, 10).subscribe(result => {
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

  openCreateNoticeModal(template: TemplateRef<{}>) {
    const modal = this._modalService.create({
      nzTitle: '发布站内信通告',
      nzContent: template,
      nzOnOk: () => console.log('111')
    })
  }

  checkDetail(id: string, template: TemplateRef<{}>) {

  }

  publish(id: string) {
    this._modalService.confirm({
      nzTitle: '是否要发布该条通知？',
      nzOnOk: () => console.log('111')
    })
  }

  delete(id: string) {
    this._modalService.confirm({
      nzTitle: '是否要删除该条通知？',
      nzOnOk: () => console.log('111')
    })
  }
}
