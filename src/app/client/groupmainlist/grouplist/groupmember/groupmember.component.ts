import { Component, OnInit } from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {GroupmemberService} from "../../../../service/groupmember/groupmember.service";

@Component({
  selector: 'app-groupmember',
  templateUrl: './groupmember.component.html',
  styleUrls: ['./groupmember.component.less']
})
export class GroupmemberComponent implements OnInit {
  displayData:[];
  imgs:[];
  head:string;


  checkOption = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  isOperating: false;


  constructor( private groupmemberService$: GroupmemberService,
                private  _message: NzMessageService,
               private  _modalService: NzModalService) { }

  ngOnInit() {
  }
/*
  checkAll(value: boolean): void {
    this.displayData.filter(item => !item.disabled).forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.displayData
      .filter(item => !item.disabled)
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.displayData.filter(item => !item.disabled).some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.imgs.filter(item => this.mapOfCheckedId[item.id]).length;
  }
  */

    //撤销副组长
  cancel(){
    this._modalService.confirm({
      nzTitle: '是否撤销该副组长？',
      nzOnOk: () => console.log('111')
    })
  }
//设置副组长
  setting(){
    this._modalService.confirm({
      nzTitle: '是否设置其为副组长？',
      nzOnOk: () => console.log('111')
    })
}
//踢出成员
  /*
  delete_member(){
    // @ts-ignore
    this.isOperating = true;
    setTimeout(() => {
      this.imgs.forEach(item => (this.mapOfCheckedId[item.id] = false));
      this.refreshStatus();
      this.isOperating = false;
    }, 1000);
  }
  */
  //成员的头像获取
  getHead(){
    // @ts-ignore
    this.img=true;
    this.imgs=[];
    // @ts-ignore
    this.groupmemberService$.getHead().subscribe(result =>{
      this.imgs=result;
      // @ts-ignore
      this.img=this.imgs;
    },error1 => {
      // @ts-ignore
      this.img = false;
      this._message.error(error1.error)
    })
  }

}
