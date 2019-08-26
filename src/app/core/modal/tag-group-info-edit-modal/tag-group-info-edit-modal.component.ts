import {Component, Input, OnInit} from '@angular/core';
import {TagGroupManagementService} from '../../../service/tag-group-management/tag-group-management.service'
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';

@Component({
  selector: 'app-tag-group-info-edit-modal',
  templateUrl: './tag-group-info-edit-modal.component.html',
  styleUrls: ['./tag-group-info-edit-modal.component.less']
})
export class TagGroupInfoEditModalComponent implements OnInit {

  @Input()
  id: string;
  name: string;

  constructor(
    private TagGroupManagementService$: TagGroupManagementService,
    private _modal: NzModalRef,
    private _message: NzMessageService
  ) {}

  ngOnInit() {

    this.TagGroupManagementService$.getTagGroupDetailById(this.id).subscribe(result => {
      this.name=result.name;
    })
  }

  submit() {
    this.TagGroupManagementService$.updateTagGroupDetail(
      this.id, this.name
    ).subscribe( result => {
      this._message.success("修改成功！");
    }, error1 => this._message.error(error1.error))
  }

  destroy() {
    this._modal.destroy()
  }

}
