import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-classlist-listview',
  templateUrl: './classlist-listview.component.html',
  styleUrls: ['./classlist-listview.component.less']
})
export class ClasslistListviewComponent implements OnInit {

  @Input()
  classlist = [];

  constructor() { }

  ngOnInit() {
  }

}
