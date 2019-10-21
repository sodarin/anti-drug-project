import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';


@Component({
  selector: 'app-news-law-modal',
  templateUrl: './news-law-modal.component.html',
  styleUrls: ['./news-law-modal.component.less'],

})
export class NewsLawModalComponent implements OnInit {


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
