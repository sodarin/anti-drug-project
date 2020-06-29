import { Component, OnInit } from '@angular/core';
import {Router,} from '@angular/router';
import {NewsService} from '../../../service/news/news.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';





@Component({
  selector: 'app-news-all-modal',
  templateUrl: './news-all-modal.component.html',
  styleUrls: ['./news-all-modal.component.less'],
})
export class NewsAllModalComponent implements OnInit {
  dataList2 = [];
  displayData2 = [];
  informationCard_1: any;
  informationCard_2: any;
  loading: boolean = false;

  constructor(private router: Router,
              private newsService$: NewsService,
              private _message: NzMessageService,
              private _modalService: NzModalService) { }

  ngOnInit() {
    this.searchFeaturedlist()
  }

  searchFeaturedlist() {
    this.displayData2 = [];
    this.loading = true;
    this.newsService$.getFeaturedlist().subscribe(result => {
      this.loading = false;
      this.dataList2 = result;
      this.displayData2 = this.dataList2;
      this.informationCard_1=this.displayData2[0];
      this.informationCard_2=this.displayData2[1];
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })

  }
  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
  navigate(id) {
    if (id==1){
      this.navigateByUrl('/client/newslaw');
    }else if(id==2){
      this.navigateByUrl('/client/newscase')
    }else{
      this.navigateByUrl('/client/newsnews')
    }
  }
}
