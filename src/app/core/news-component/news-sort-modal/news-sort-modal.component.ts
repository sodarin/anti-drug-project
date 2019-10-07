import {Component, OnInit,} from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {NewsService} from '../../../service/news/news.service';
import {Route, Router} from '@angular/router';


@Component({
  selector: 'app-news-sort-modal',
  templateUrl: './news-sort-modal.component.html',
  styleUrls: ['./news-sort-modal.component.less'],

})
export class NewsSortModalComponent implements OnInit {

  location: Location = location;

  dataList = [];
  displayData = [];
  loading: boolean = false;
  total: number = 0;
  totalPage: number =1;
  pageIndex: number = 1;


  filterOptions: {};
  checkOption = [];

  constructor(
    private route: Router
  ) {
  }


  ngOnInit() {

}

  navigateTo(url:string) {
    this.route.navigateByUrl(url)
  }


}
