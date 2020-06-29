import { Component, OnInit } from '@angular/core';
import {  FollowManagementService  } from "src/app/service/follow-management/follow-management.service";
import { ActivatedRoute } from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';
@Component({
  selector: 'app-fans',
  templateUrl: './fans.component.html',
  styleUrls: ['./fans.component.less']
})
export class FansComponent implements OnInit {
  userID:string;
  pageIndex: number=1;
  pageSize:number=8;
  data:any[]=[];
  loading: boolean;
  total: number;
  constructor(
    private actrouter:ActivatedRoute,
    private message: NzMessageService,
    private followmanagementService:FollowManagementService
  ) { }

  ngOnInit() {
    this.userID = location.pathname.split('/')[3];
    this.searchData();
  }
  searchData() {
    this.data = [];
    this.loading = true;
    this.followmanagementService.getMyFellows(this.pageIndex, this.pageSize,this.userID).subscribe(result => {
      this.loading = false;
      this.total = result.data.total;
      this.data = result.data.userShowList;
    }, error1 => {
      this.loading = false;
      this.message.create('error',`${error1.error}`);
    })
   
  }
  
  changePageIndex(pageindex ) {
    this.pageIndex = pageindex;
    this.searchData();
  }
}
