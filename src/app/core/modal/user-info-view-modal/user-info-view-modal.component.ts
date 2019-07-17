import {Component, Input, OnInit} from '@angular/core';
import {NzModalRef} from 'ng-zorro-antd';

@Component({
  selector: 'app-user-info-view-modal',
  templateUrl: './user-info-view-modal.component.html',
  styleUrls: ['./user-info-view-modal.component.less']
})
export class UserInfoViewModalComponent implements OnInit {


  @Input()
  userId: string;

  constructor(
    private _modal: NzModalRef
  ) { }

  ngOnInit() {
    console.log(this.userId)
  }


}
