import {Component, Input, OnInit} from '@angular/core';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';
import {UserManagementService} from '../../../service/user-management/user-management.service';

@Component({
  selector: 'app-user-info-view-modal',
  templateUrl: './user-info-view-modal.component.html',
  styleUrls: ['./user-info-view-modal.component.less']
})
export class UserInfoViewModalComponent implements OnInit {

  userInfo: any;



  @Input()
  userId: string;

  constructor(
    private _modal: NzModalRef,
    private userManagementService$: UserManagementService,
    private _message: NzMessageService
  ) { }

  ngOnInit() {
    this.userManagementService$.getUserDetailById(this.userId).subscribe(result => {
      this.userInfo = result;
      document.getElementById('introduction').innerHTML = this.userInfo.about

    }, error1 => this._message.error(error1.error))
  }


}
