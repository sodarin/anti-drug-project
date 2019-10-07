import { Component, OnInit } from '@angular/core';
import { addDays, formatDistance } from 'date-fns';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';


@Component({
  selector: 'app-news-classification-modal',
  templateUrl: './news-classification-modal.component.html',
  styleUrls: ['./news-classification-modal.component.less'],

})
export class NewsClassificationModalComponent implements OnInit {

//测试数据
  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];
  data1 = [
    {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practica',
      datetime: formatDistance(new Date(), addDays(new Date(), 1))
    },
    {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practicalgyhjgjjh,sgskjhskuhihlhljkbkvxhuvujkh,,jgbk',
      datetime: formatDistance(new Date(), addDays(new Date(), 2))
    }
  ];
  data2 =[
      'Rac',
      'Rac',
      'Rac',
  ];
  constructor( private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
//热点焦点

//热门标签

//热门评论

//编辑推荐
}
