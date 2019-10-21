import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-group-join',
  templateUrl: './my-group-join.component.html',
  styleUrls: ['./my-group-join.component.less']
})
export class MyGroupJoinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  data = [
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },
    {
      title: 'Title 3'
    },
    {
      title: 'Title 4'
    }
    ,
    {
      title: 'Title 5'
    }
    ,
    {
      title: 'Title 6'
    }
  ];
}
