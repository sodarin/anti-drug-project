import { Component, OnInit } from '@angular/core';
import {Router,} from '@angular/router';





@Component({
  selector: 'app-news-all-modal',
  templateUrl: './news-all-modal.component.html',
  styleUrls: ['./news-all-modal.component.less'],
})
export class NewsAllModalComponent implements OnInit {


  constructor(private router: Router,) { }

  ngOnInit() {
  }


  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
