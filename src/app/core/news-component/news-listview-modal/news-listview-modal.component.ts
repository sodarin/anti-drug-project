import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../service/news/news.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-news-listview-modal',
  templateUrl: './news-listview-modal.component.html',
  styleUrls: ['./news-listview-modal.component.less'],
})
export class NewsListviewModalComponent implements OnInit {

  dataList = [];
  displayData = [];
  dataList2 = [];
  displayData2:any;
  loading: boolean = false;
  data: any[] = [];

  constructor(
    private router: Router, private route: ActivatedRoute,
    private newsService$: NewsService,
    private _message: NzMessageService,
    private _modalService: NzModalService
  ) { }

  ngOnInit() {
    this.searchArticles();
  }
  searchArticles() {
    this.displayData = [];
    this.loading = true;
    this.newsService$.getArticles().subscribe(result => {
      this.loading = false;
      this.dataList = result.data.articleVoList;
      this.displayData = this.dataList;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
  }
  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  navigate(id1) {
    if (id1==1){
      this.navigateByUrl('/client/newslaw');
    }else if(id1==2){
      this.navigateByUrl('/client/newscase')
    }else{
      this.navigateByUrl('/client/newsnews')
    }
  }

   getSimpleText(html){
    var re1 = new RegExp("<.+?>","g");
    var msg = html.replace(re1,'');
    return msg;
  }


}


