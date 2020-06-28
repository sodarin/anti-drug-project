import { Component, OnInit,EventEmitter } from '@angular/core';
import { MaterialService } from 'src/app/service/material/material.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-td-classification',
  templateUrl: './td-classification.component.html',
  styleUrls: ['./td-classification.component.less'],
  outputs: ["setCondition"]
})
export class TdClassificationComponent implements OnInit {
  classificationtypes = [
    {name:"全部",value:"",selected:true},
    {name:"视频",value:"video",selected:false},
    {name:"flash",value:"flash",selected:false},
    {name:"音频",value:"audio",selected:false},
    {name:"图片",value:"image",selected:false},
    {name:"文档",value:"document",selected:false},
    {name:"PPT",value:"ppt",selected:false},
    {name:"其它",value:"other",selected:false}];
  classificationtags:any;
  dateRange = [];
  transcodingStates=[
    {name:"无",value:"none"},
    {name:"等待中",value:"waiting"},
    {name:"转码成功",value:"success"},
    {name:"转码中",value:"doing"},
    {name:"转码失败",value:"error"}];
  useStates = [
    {name:"未使用",value:false},
    {name:"已使用",value:true}];

  currenttranscodingState:string;
  currentuseStates:string;

  conditions={
    materialType:"",
    tagID:"",
    startTime:"",
    endTime:"",
    convertStatus:"",
    isUsed:""
  }


  setCondition: EventEmitter<any>;
  constructor(private materialservice:MaterialService,private _notification: NzNotificationService) { 
    this.setCondition = new EventEmitter();
  }

  ngOnInit() {
    this.getAllTag();
  }

  getAllTag(){
    this.materialservice.getAllTag().subscribe((res: any) => {
      this.classificationtags = res.data;
      //console.log(this.classificationtags);
      for(let item of this.classificationtags){
        item.color = "";
      }
    }, error => {
      this._notification.create(
        'error',
        '发生错误！',
        `${error.error}`)
    });
  }

  setMaterialType(value:string){
    this.conditions.materialType = value;
    this.setConditions();
  }

  settagID(id){
    if(this.conditions.tagID == id){
      this.conditions.tagID = "";
      id = "";
    }else{
      this.conditions.tagID = id;
    }
    for(let item of this.classificationtags){
      if(item.id == id){
        item.color = "cyan";
      }else{
        item.color = "";
      }
    }
    this.setConditions();
  }

  setTime(){
    if(this.dateRange[0]!=undefined){
      this.conditions.startTime = Math.floor(this.dateRange[0].getTime()/1000).toString();
    }else{
      this.conditions.startTime = "";
    }
    if(this.dateRange[1]!=undefined){
      this.conditions.endTime = Math.floor(this.dateRange[1].getTime()/1000).toString();
    }else{
      this.conditions.endTime = "";
    }
    this.setConditions();
  }

  setconvertStatus(){
    if(this.currenttranscodingState!=null){
      this.conditions.convertStatus = this.currenttranscodingState
    }else{
      this.conditions.convertStatus = ""
    }
    this.setConditions();
  }

  setIsUsed(){
    if(this.currentuseStates!=null){
      this.conditions.isUsed = this.currentuseStates;
    }else{
      this.conditions.isUsed = "";
    }
    this.setConditions();
  }

  setConditions(){
    console.log(this.conditions);
    this.setCondition.emit(this.conditions);
  }
}
