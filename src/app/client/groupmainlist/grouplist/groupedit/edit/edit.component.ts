import { Component, OnInit } from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {GroupmemberService} from "../../../../../service/groupmember/groupmember.service";
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {
  inputValue:string;
  content: string = '';

  constructor(private _modalService: NzModalService,
              private GroupmemberService$:GroupmemberService,
              private _message: NzMessageService,
              ) { }

  ngOnInit() {
  }
  //修改
  edit(){
    this._modalService.confirm({
      nzTitle: '是否修改？',
      nzOnOk: () => console.log('111')
    })
  }

}
