import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-listview-modal',
  templateUrl: './news-listview-modal.component.html',
  styleUrls: ['./news-listview-modal.component.less'],
  inputs:['displayData', 'data']
})
export class NewsListviewModalComponent implements OnInit {

  displayData = [];
  constructor() { }

  ngOnInit() {
  }

}
