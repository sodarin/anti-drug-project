import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NzMessageService, NzModalService} from "ng-zorro-antd";
import {GroupfirstService} from "../../../../service/groupfirst/groupfirst.service";

const count = 5;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';


@Component({
  selector: 'app-groupfirst',
  templateUrl: './groupfirst.component.html',
  styleUrls: ['./groupfirst.component.less']
})
export class GroupfirstComponent implements OnInit {
  selectedStateFilterValue   = 'all';
  inputValue: string;
  selectedAttributeFilterValue = 'new';

  loading: boolean = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;
  data: any[] = [];
  list: Array<{
    id: any;
    loading: boolean; name: any }> = [];

  filterOptions: {};
  checkOption = [];
  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;

  img='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';
  name='admin';
  date='2019-8-9';
  date1='2019-8-7';
  study=1;
  fans=2;
  focuson=3;

  constructor(
    private http: HttpClient,
    private groupfirstService$: GroupfirstService,
    private  _message: NzMessageService,
    private  _modalService: NzModalService
  ) { }

  ngOnInit():void {
    this.getData((res: any) => {
      this.data = res.results;
      this.list = res.results;
      this.loading = false;
    });
  }

  getData(callback: (res: any) => void): void {
    this.http.get(fakeDataUrl).subscribe((res: any) => callback(res));
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.data
      .filter(item => !item.disabled)
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.data.filter(item => !item.disabled).some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.list.filter(item => this.mapOfCheckedId[item.id]).length;
  }

  //下拉框
  /*
  filterTopic() {
    this.data = [];
    this.loading = true;
    this.filterOptions = {
      state: this.selectedStateFilterValue,
      searchParameter: this.inputValue,
      attribute: this.selectedAttributeFilterValue
    };
    this.grouplistService$.item(1, 10, this.filterOptions).subscribe(result => {
      this.loading = false;
      this.total = result[0].total;
      this.totalPage = Math.ceil(this.total / 10);
      this.list = result;
      this.data = this.list;
    }, error1 => this._message.error(error1.error))
  }
*/

  // 修改置顶加精属性
  checkChange(data: any) {

  }
  //关注
  focus(){

  }
  //私信
  message(){

  }
}
