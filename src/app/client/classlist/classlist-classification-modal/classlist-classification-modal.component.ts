import { Component, OnInit, EventEmitter, ViewChild, ViewContainerRef, TemplateRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { TagService } from 'src/app/service/taglist-frontend/taglist-frontend.service';

@Component({
  selector: 'app-classlist-classification-modal',
  templateUrl: './classlist-classification-modal.component.html',
  styleUrls: ['./classlist-classification-modal.component.less'],
  inputs: ["commontag"],
  outputs: ["CommonTagClick"],
})
export class ClasslistClassificationModalComponent implements OnInit {
  //taglist
  common: any[];
  //currentlist
  commontag = "All";
  CommonTagClick: EventEmitter<string>;
  breadlist = [];

  //设置非树形标签选中
  commonkey = [];

  constructor(private tagservice: TagService) {
    this.CommonTagClick = new EventEmitter();
  }

  ngOnInit() {
    this.tagservice.getTags_class().subscribe((res: any) => {
      this.renderResulsts_class(res);
    });
  }

  CommonClickTag(val: string) {
    this.commontag = val;
    this.CommonTagClick.emit(this.commontag);
    this.setBreadList();
  }

  setBreadList(): void {
    this.breadlist = [];
    if (this.commontag != "All") {
      for(let j=0;j<this.common.length;j++){
        if(this.common[j].code==this.commontag){
          this.breadlist.push(this.common[j].name);
          break;
        }
      }
    }
  }

  renderResulsts_class(res?: any): void {
    //this.commonkey = [];
    let all ={
      id: 0,
      code: "All",
      name: "全部班级",
      groupId: 0,
      parentId: 0,
      children: [],
      value: 0,
      label: "全部班级"
    }
    this.common = res.data;
    this.common.unshift(all);
  }

}
