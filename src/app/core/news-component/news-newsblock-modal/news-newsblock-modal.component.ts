import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-news-newsblock-modal',
  templateUrl: './news-newsblock-modal.component.html',
  styleUrls: ['./news-newsblock-modal.component.less'],
  inputs:['displayData','data']
})
export class NewsNewsblockModalComponent implements OnInit {
  displayData = [];
  data: any;
  constructor() { }

  ngOnInit() {
  }

}
