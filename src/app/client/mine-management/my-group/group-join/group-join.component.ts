import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NzMessageService, NzModalService, NzNotificationService} from 'ng-zorro-antd';
import {MyteachingService} from '../../../../service/myteaching/myteaching.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-group-join',
  templateUrl: './group-join.component.html',
  styleUrls: ['./group-join.component.less']
})
export class GroupJoinComponent implements OnInit {

  MyGroupList:[];
  dataList:[];
  userId:number=1;
  loading:boolean;

  constructor(
    private http: HttpClient,
    private msg: NzMessageService,
    private _notification: NzNotificationService,
    private MyteachingService$: MyteachingService,
    private router: Router,
    private message: NzMessageService,

    private modalService: NzModalService
  ) { }

  ngOnInit() {
  }


  searchData() {
    this.MyGroupList = [];
    this.loading = true;
    this.MyteachingService$.getMyJoinGroup(this.userId).subscribe(result => {
        this.loading = false;
        this.dataList = result.data;
        this.MyGroupList = this.dataList;
      },
      error1 => {
        this.loading = false;
        this._notification.create(
          'error',
          '发生错误',
          `${error1.error}`
        )

      })
  }
}
