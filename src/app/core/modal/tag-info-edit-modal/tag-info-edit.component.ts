import {Component, Input, OnInit} from '@angular/core';
import {UserManagementService} from '../../../service/user-management/user-management.service';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';
import {TagManagementService} from '../../../service/tag-management/tag-management.service';

@Component({
  selector: 'app-tag-info-edit',
  templateUrl: './tag-info-edit.component.html',
  styleUrls: ['./tag-info-edit.component.less']
})
export class TagInfoEditComponent implements OnInit {

  @Input()
  id: string;
  name: string;

  constructor(
    private TagManagementService$: TagManagementService,
    private _modal: NzModalRef,
    private _message: NzMessageService
  ) {}

  ngOnInit() {

    this.TagManagementService$.getTagDetailById(this.id).subscribe(result => {
      this.name=result.name;
    })
  }

  submit() {
    this.TagManagementService$.updateTagDetail(
      this.id, this.name
    ).subscribe( result => {
      this._message.success("修改成功！");
    }, error1 => this._message.error(error1.error))
  }

  destroy() {
    this._modal.destroy()
  }



}
