import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-focus-detail',
  templateUrl: './focus-detail.component.html',
  styleUrls: ['./focus-detail.component.less']
})
export class FocusDetailComponent implements OnInit {
  data = [{
    id:3,
    name: 'Name 4',
    isshow:true
  },
  {id:4,
    name: 'Name 5',
    isshow:true
  }]
  constructor() { }

  ngOnInit() {
  }
  show1(i) {
    i.isshow = false;
  }

  show2(i) {
    i.isshow = true;
  }
}
