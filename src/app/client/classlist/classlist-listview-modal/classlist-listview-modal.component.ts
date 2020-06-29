import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classlist-listview-modal',
  templateUrl: './classlist-listview-modal.component.html',
  styleUrls: ['./classlist-listview-modal.component.less'],
  inputs:['classeslist']
})
export class ClasslistListviewModalComponent implements OnInit {
  classeslist=[];
  constructor() { }

  ngOnInit() {
  }

}
