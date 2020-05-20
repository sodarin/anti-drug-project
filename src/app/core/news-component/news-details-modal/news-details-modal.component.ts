import { Component, OnInit } from '@angular/core';
import { formatDistance } from 'date-fns';
import {NzMessageService, NzModalService, NzNotificationService} from 'ng-zorro-antd';
import {NewsService} from '../../../service/news/news.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-news-details-modal',
  templateUrl: './news-details-modal.component.html',
  styleUrls: ['./news-details-modal.component.less'],
})
export class NewsDetailsModalComponent implements OnInit {
  articleId: number;
  isDelete:number;
  isLike:boolean;
  userId=1;
  articleLike:{};
  data1 = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources' +
      '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    children: [
      {
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources' +
          '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        children: [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources' +
              '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
          },
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources' +
              '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
          }
        ]
      }
    ]
  };

  dataList :any;
  displayData : any;
  tagList:any;
  loading: boolean = false;
  id: string;
  userid=1;
  constructor(
    private router: Router, private route: ActivatedRoute,
    private newsService$: NewsService,
    private _message: NzMessageService,
    private _modalService: NzModalService,
    private routerInfo: ActivatedRoute,
    private _notification: NzNotificationService,
  ) {
  }

  ngOnInit() {
    this.id = this.routerInfo.snapshot.params['id'];
    this.searchArticlebyid();
    this.getArticleLike();
  }

  data: any[] = [];
  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };
  inputValue = '';

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    setTimeout(() => {
      this.submitting = false;
      this.data = [
        ...this.data,
        {
          ...this.user,
          content,
          datetime: new Date(),
          displayTime: formatDistance(new Date(), new Date())
        }
      ].map(e => {
        return {
          ...e,
          displayTime: formatDistance(new Date(), e.datetime)
        };
      });
    }, 800);
  }

  searchArticlebyid() {
    this.displayData = [];
    this.loading = true;
    this.newsService$.getArticlebyid(this.id).subscribe(result => {
      this.loading = false;
      this.dataList = result;
      this.displayData = this.dataList;
      this.tagList=this.dataList.tagList;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error);
    });
  }
  getArticleLike(){
    this.loading = true;
    this.newsService$.getArticleLike(this.id,this.userId).subscribe(result => {
      this.loading = false;
      this.isLike= result.data;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error);
    });
  }
  setArticleLike() {
   if (this.isDelete==0){
     this.displayData.upsnum ++;
   } else{
     this.displayData.upsnum --;
   }
    this.loading = true;
    this.articleLike = {
      articleId: this.id,
      isDelete: this.isDelete,
      userId: 1,
    };
    this.newsService$.setArticleLike(this.articleLike).subscribe(result => {
      this.getArticleLike();
      this._notification.create(
        'success',
        '操作成功',
        ''
      );
    },error1 => {
      this._notification.create(
        'error',
        '操作失败',
        `${error1.error}`
      );
    });
  }
  getNewContent(value: any) {
    this.getArticleLike();
    this.displayData = value;
    this.tagList=this.displayData.tagList;
  }
  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  navigate(id) {
    if (id==1){
      this.navigateByUrl('/client/newslaw');
    }else if(id==2){
      this.navigateByUrl('/client/newscase');
    }else{
      this.navigateByUrl('/client/newsnews');
    }
  }

  getHeart1() {
    this.isDelete=0;
    this.setArticleLike();

  }

  getHeart0() {
    this.isDelete=1;
    this.setArticleLike();

  }
}
