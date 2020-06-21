import { Component, OnInit, EventEmitter, ViewChild, ViewContainerRef, TemplateRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';

import { ClassificationListComponent } from './classification-list/classification-list.component'
import { TagService } from 'src/app/service/taglist-frontend/taglist-frontend.service';



@Component({
  selector: 'app-courselist-classification-modal',
  templateUrl: './courselist-classification-modal.component.html',
  styleUrls: ['./courselist-classification-modal.component.less'],
  inputs: ["treetag", "commontag"],
  outputs: ["TagClick", "CommonTagClick"],
  entryComponents: [ClassificationListComponent]
})
export class CourselistClassificationModalComponent implements OnInit {
  // tags:Tags;
  tree: any[];
  common: any[];

  //current tag
  treetag = ["0", "0", "0", "0"];
  commontag = "0";

  //click event
  TagClick: EventEmitter<string[]>;
  CommonTagClick: EventEmitter<string>;

  //设置最下层标签（非树形标签）选中
  commonkey = [];

  //bread crumb
  breadlist = [];

  //DOM操作
  @ViewChild("tagtree", { read: ViewContainerRef, static: true }) treeContainer: ViewContainerRef;
  @ViewChild("leaf", { read: TemplateRef, static: false }) leaf: TemplateRef<any>;
  componentRef = [];

  constructor(private tagservice: TagService, private factoryResolver: ComponentFactoryResolver) {


    this.TagClick = new EventEmitter();
    this.CommonTagClick = new EventEmitter();
  }

  ngOnInit() {

    this.tagservice.getTags_course().subscribe((res: any) => {
      this.renderResulsts(res);
    });

    this.setBreadList();
  }

  renderResulsts(res?: any): void {
    if (res) {
      //添加一个“全部”
      let all ={
        id: 0,
        code: "primary",
        name: "全部课程",
        groupId: 0,
        parentId: 0,
        children: [],
        value: 0,
        label: "全部课程"
      }
      this.tree = res.data;
      this.tree.unshift(all);
      //this.tree = res.tree;
      // this.common = res.common;
    }
    this.treeContainer.clear();
    this.componentRef = [];

    //生成第一层标签
    const factory: ComponentFactory<ClassificationListComponent> = this.factoryResolver.resolveComponentFactory(ClassificationListComponent);
    if (this.tree.length > 0) {
      this.componentRef.push(this.treeContainer.createComponent(factory));
      this.componentRef[0].instance.list = this.tree;
      this.componentRef[0].instance.label = "分类:";
      this.componentRef[0].instance.layer = 0;
      this.componentRef[0].instance.TagClick.subscribe((name: string[]) => {

        this.treetag[Number.parseInt(name[1])] = name[0];
        for (var i = Number.parseInt(name[1]) + 1; i < this.treetag.length; i++) {
          this.treetag[i] = "0"
        }
        this.renderResulsts();
        this.ClickTag();
      });
    }

    //生成第其他层标签
    var temptree = this.tree;
    //按层次遍历标签
    for (var i = 0; i < this.treetag.length; i++) {
      //遍历当前层的所有标签
      for (var k = 0; k < temptree.length; k++) {
        //如果检测到被选中
        if (temptree[k].id == this.treetag[i]) {
          this.componentRef[i].instance.selectkey[k] = true;
          temptree = temptree[k].children;
          //如果被选中标签有下一层，则创建下一层
          if (temptree.length > 0) {
            this.componentRef.push(this.treeContainer.createComponent(factory));
            this.componentRef[i + 1].instance.list = temptree;
            this.componentRef[i + 1].instance.layer = i + 1;
            this.componentRef[i + 1].instance.TagClick.subscribe((name: string[]) => {
              this.treetag[Number.parseInt(name[1])] = name[0];
              for (var i = Number.parseInt(name[1]) + 1; i < this.treetag.length; i++) {
                this.treetag[i] = "0"
              }
              this.renderResulsts()
              this.ClickTag();
            });
          }
          break;
        }
      }
    }
    //还是没有最底下的一行导航  -------------------已废弃
    // for (var i = 0; i < this.common.length; i++) {
    //   if (this.common[i].name == this.commontag) {
    //     this.commonkey.push(true);
    //   } else {
    //     this.commonkey.push(false);
    //   }
    // }

  }



  ClickTag() {
    this.TagClick.emit(this.treetag);
    this.setBreadList();
  }
  CommonClickTag(val: string) {
    this.commontag = val;
    this.CommonTagClick.emit(this.commontag);
    this.setBreadList();
  }




  setBreadList(): void {
    this.breadlist = [];
    let temptree = this.tree;
    if(temptree ==undefined){
      return;
    }
    for (var i = 0; i < this.treetag.length; i++) {
      if (this.treetag[i] != "0") {
        for(let j=0;j<temptree.length;j++){
          if(temptree[j].id==this.treetag[i]){
            this.breadlist.push(temptree[j].name);
            temptree = temptree[j].children;
            break;
          }
        }
      }
    }
    //缺
    // if (this.commontag != "All") {
    //   for(let j=0;j<this.common.length;j++){
    //     if(this.common[j].code==this.commontag){
    //       this.breadlist.push(this.common[j].name);
    //     }
    //   } 
    // }
  }




}
