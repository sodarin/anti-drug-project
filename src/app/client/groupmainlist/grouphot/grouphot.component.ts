import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const count = 5;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

@Component({
  selector: 'app-grouphot',
  templateUrl: './grouphot.component.html',
  styleUrls: ['./grouphot.component.less']
})
export class GrouphotComponent implements OnInit {
  loading: boolean = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;
  data: any[] = [];
  list: Array<{ loading: boolean; name: any }> = [];

  filterOptions: {};
  checkOption = [];
  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;

  name='admin';
  memberleader='admin';
  study=1;
  fans=2;
  focuson=3;


  constructor( private http: HttpClient) { }

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

}
