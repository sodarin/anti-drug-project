import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';


@Component({
  selector: 'app-news-news-modal',
  templateUrl: './news-news-modal.component.html',
  styleUrls: ['./news-news-modal.component.less'],
})
export class NewsNewsModalComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
