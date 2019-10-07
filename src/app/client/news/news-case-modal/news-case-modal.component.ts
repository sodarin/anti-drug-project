import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-case-modal',
  templateUrl: './news-case-modal.component.html',
  styleUrls: ['./news-case-modal.component.less'],

})
export class NewsCaseModalComponent implements OnInit {

  constructor(
    private router: Router,
    ) { }

  ngOnInit() {
  }
  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
