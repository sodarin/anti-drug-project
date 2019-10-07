import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {NzMessageService, NzModalService} from "ng-zorro-antd";
import {GroupmainlistService} from "../../service/groupmainlist/groupmainlist.service";

const count = 3;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';




@Component({
  selector: 'app-groupmainlist',
  templateUrl: './groupmainlist.component.html',
  styleUrls: ['./groupmainlist.component.less']
})
export class GroupmainlistComponent implements OnInit {
  data: any[] = [];
  list: Array<{ loading: boolean; name: any }> = [];
  search:string;

  filterOptions: {};
  checkOption = [];
  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};

  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;
  loading: boolean = false;

  team=1;
  message=2;
  study=1;
  fans=2;
  focuson=3;

  constructor(public router:Router,
              private http: HttpClient,
              private  _message: NzMessageService,
              private groupmainlistService$:GroupmainlistService,
  ) { }

  ngOnInit() {
    this.getData((res: any) => {
      this.data = res.results;
      this.list = res.results;
    });
  }
  getData(callback: (res: any) => void): void {
    this.http.get(fakeDataUrl).subscribe((res: any) => callback(res));
  }

  tclick(){
    this.router.navigateByUrl("client/groupmainlist/grouplist")
  }
  oclick(){
    this.router.navigateByUrl("client/groupcreate")
  }
  // 搜索

  filterTopicTable() {
    this.data = [];
    this.loading = true;
    this.filterOptions = {
      search: this.search
    };
    this.groupmainlistService$.filterTopicTableList(1, 10, this.filterOptions).subscribe(result => {
      this.loading = false;
      this.list = result;
      this.data = this.list;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
  }
  searchData(pageIndex: number = this.pageIndex) {
    this.data = [];
    this.loading = true;
    this.groupmainlistService$.getTopicTableList(pageIndex, 10).subscribe(result => {
      this.loading = false;
      this.total = result[0].totalUser;
      this.totalPage = Math.ceil(this.total / 10);
      this.list = result;
      this.data = this.list;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
  }
}
