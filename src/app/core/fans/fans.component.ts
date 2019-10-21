import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fans',
  templateUrl: './fans.component.html',
  styleUrls: ['./fans.component.less']
})
export class FansComponent implements OnInit {
  data=[{
    id:0,
    name: 'Name 1',
    isshow:true
  }]
  constructor() { }

  ngOnInit() {
  }

}
