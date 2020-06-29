import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';
import {NewsService} from '../../../service/news/news.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';


@Component({
  selector: 'app-news-law-modal',
  templateUrl: './news-law-modal.component.html',
  styleUrls: ['./news-law-modal.component.less'],

})
export class NewsLawModalComponent implements OnInit {
  selectedProgramaValue= 1;
  dataList = [];
  displayData = [];
  loading: boolean = false;

  constructor(
    private router: Router, private route: ActivatedRoute,
    private newsService$: NewsService,
    private _message: NzMessageService,
    private _modalService: NzModalService,
  ) { }

  ngOnInit() {
    this.filterNews()
  }
  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
  filterNews() {
    this.displayData = [];
    this.loading = true;
    this.newsService$.getArticlelist(this.selectedProgramaValue).subscribe(result => {
      this.loading = false;
      this.dataList = result.data.articleVoList;
      this.displayData = this.dataList;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
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
  getSimpleText(html){
    var re1 = new RegExp("<.+?>","g");
    var msg = html.replace(re1,'');
    return msg;
  }
}
