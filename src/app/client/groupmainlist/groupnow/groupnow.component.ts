import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';

const count = 5;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

@Component({
  selector: 'app-groupnow',
  templateUrl: './groupnow.component.html',
  styleUrls: ['./groupnow.component.less']
})
export class GroupnowComponent implements OnInit {
  data: any[] = [];
  list: Array<{ loading: boolean; name: any }> = [];
  team=1;
  message=16;
  name='心理咨询';

  filterOptions: {};
  checkOption = [];
  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;

  constructor(
    private http: HttpClient,
    private route: Router
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

  navigateByUrl(url: string) {
    this.route.navigateByUrl(url)
  }

}
