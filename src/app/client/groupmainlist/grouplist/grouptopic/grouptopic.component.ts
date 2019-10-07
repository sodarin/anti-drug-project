import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grouptopic',
  templateUrl: './grouptopic.component.html',
  styleUrls: ['./grouptopic.component.less']
})
export class GrouptopicComponent implements OnInit {

  inputValue: string = '';
  content: string = '';

  constructor() { }

  ngOnInit() {
  }

}
