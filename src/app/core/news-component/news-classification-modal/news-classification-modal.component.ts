import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { addDays, formatDistance } from 'date-fns';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import {NewsService} from '../../../service/news/news.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';


@Component({
  selector: 'app-news-classification-modal',
  templateUrl: './news-classification-modal.component.html',
  styleUrls: ['./news-classification-modal.component.less'],

})
export class NewsClassificationModalComponent implements OnInit {

  @Output()
    detailContent = new EventEmitter<any>();

  dataList = [];
  displayData = [];
  loading: boolean = false;
  dataList1 = [];
  displayData1 = [];
  dataList2 = [];
  displayData2 = [];
  data1 = [];
  i=1 ;


  constructor( private router: Router, private route: ActivatedRoute,
  private newsService$: NewsService,
  private _message: NzMessageService,
  private _modalService: NzModalService) { }

  ngOnInit() {
    this.searchTag();
    this.searchPromotedlist();
    this.searchFeaturedlist();

  }


  navigateByUrl(url: string) {
    let urlList = url.split('/');
    if (urlList[2] == 'newsdetails')  {
      this.newsService$.getArticlebyid(urlList[3]).subscribe(result => {
        this.detailContent.emit(result);
      }, error1 => {
        this.loading = false;
        this._message.error(error1.error)
      })
    }
    this.router.navigateByUrl(url);
  }
  
//热点焦点
  searchFeaturedlist() {
    this.displayData2 = [];
    this.loading = true;
    this.newsService$.getFeaturedlist().subscribe(result => {
      this.loading = false;
      this.dataList2 = result;
      this.displayData2 = this.dataList2;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
  }

//热门标签
  searchTag() {
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

//热门评论

//编辑推荐
  searchPromotedlist() {
    this.displayData1 = [];
    this.loading = true;
    this.newsService$.getPromotedlist().subscribe(result => {
      this.loading = false;
      this.dataList1 = result;
      this.displayData1 = this.dataList1;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
  }

}
