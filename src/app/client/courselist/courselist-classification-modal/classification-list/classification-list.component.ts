import { Component, OnInit,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-classification-list',
  templateUrl: './classification-list.component.html',
  styleUrls: ['./classification-list.component.less'],
  inputs:['haslabel','list'],
  outputs: ["TagClick"],
})
export class ClassificationListComponent implements OnInit {

  label:string = "";
  list:any=[];
  selectkey:boolean[]=[];
  layer:number = -1;
  TagClick: EventEmitter<string[]>;
  
  constructor() { 
    this.TagClick = new EventEmitter();
  }

  ngOnInit() {
    for(var j=0;j<this.list.length;j++){
      this.selectkey.push(false);
    }
  }

  ClickTag(val: string) {
    this.TagClick.emit([val,this.layer.toString()]);
  }

}
