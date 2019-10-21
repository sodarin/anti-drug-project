import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groupcreate',
  templateUrl: './groupcreate.component.html',
  styleUrls: ['./groupcreate.component.less']
})
export class GroupcreateComponent implements OnInit {

  inputValue: string = '';
  content: string = '';

  constructor() { }

  ngOnInit() {
  }

}
