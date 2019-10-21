import {Component, Input, OnInit} from '@angular/core';
import {UserManagementService} from '../../../service/user-management/user-management.service';
import {NzMessageService, NzModalRef, NzNotificationService} from 'ng-zorro-antd';
import {TagManagementService} from '../../../service/tag-management/tag-management.service';

@Component({
  selector: 'app-tag-info-edit',
  templateUrl: './tag-info-edit.component.html',
  styleUrls: ['./tag-info-edit.component.less']
})
export class TagInfoEditComponent implements OnInit {

  @Input()
  item: any;
  name: string;

  constructor(
    private TagManagementService$: TagManagementService,
    private _modal: NzModalRef,
    private _notification: NzNotificationService
  ) {}

  ngOnInit() {

    this.name = this.item.name;
  }

  submit() {
    if (this.name !== '') {
      let info = {
        id: this.item.id,
        name: this.name
      };
      this._modal.destroy(info)
    } else {
      this._notification.error(
        '发生错误！',
        '名称不能为空!'
      );
      return false;
    }

  }

  destroy() {
    this._modal.destroy()
  }



}
