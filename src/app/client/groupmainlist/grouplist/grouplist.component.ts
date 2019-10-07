import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.less']
})
export class GrouplistComponent implements OnInit {
  topicname='心理咨询';
  topicnumber=2;
  number=3;
  date='2019-8-6';


  constructor() { }

  ngOnInit() {

  }

}
