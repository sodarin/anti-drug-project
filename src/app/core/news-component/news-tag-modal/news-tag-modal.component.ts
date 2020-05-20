import { Component, OnInit } from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {NewsService} from '../../../service/news/news.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-news-tag-modal',
  templateUrl: './news-tag-modal.component.html',
  styleUrls: ['./news-tag-modal.component.less'],

})
export class NewsTagModalComponent implements OnInit {
  dataList = [];
  displayData = [];
  dataList1 = [];
  displayData1:any;
  articlecategory:any;

  loading: boolean = false;
  id:string;
  name:string;

  constructor(
    private router: Router, private route: ActivatedRoute,
    private newsService$: NewsService,
    private _message: NzMessageService,
    private _modalService: NzModalService,
    private routerInfo: ActivatedRoute
  ) {
    this.id = this.routerInfo.snapshot.params['id'];

  }

  ngOnInit() {
    this.searchTagTame();
    this.searchData();
    this.searchArtTag();
  }
 //获取标签
  searchData() {
    this.displayData = [];
    this.loading = true;
    this.newsService$.getTags().subscribe(result => {
      this.loading = false;
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
  }
  searchArtTag() {
    this.displayData1 = [];
    this.loading = true;
    this.newsService$.getArtTag(this.id).subscribe(result => {
      this.loading = false;
      this.dataList1 = result.data.articleVojoList;
      this.displayData1 = this.dataList1;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
  }
  searchTagTame() {
    this.displayData1 = [];
    this.loading = true;
    this.newsService$.getTagname(this.id).subscribe(result => {
      this.loading = false;
      this.name = result.data;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
  }
  navigateByUrl(url: string) {
    console.log('111');
    this.id = url.split('/')[url.split('/').length - 1];
    this.ngOnInit();
    this.router.navigateByUrl(url);
  }

  getSimpleText(html){
    var re1 = new RegExp("<.+?>","g");
    var msg = html.replace(re1,'');
    return msg;
  }

  navigate(id1) {
    if (id1==1){
      this.navigateByUrl1('/client/newslaw');
    }else if(id1==2){
      this.navigateByUrl1('/client/newscase')
    }else{
      this.navigateByUrl1('/client/newsnews')
    }
  }
  navigateByUrl1(url: string) {
    this.router.navigateByUrl(url);
  }
}
