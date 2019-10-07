import { Component, OnInit,EventEmitter } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'app-td-card',
  templateUrl: './td-card.component.html',
  styleUrls: ['./td-card.component.less'],
  inputs: ["data","isbatcheditable"],
  outputs:["batchselected"]
})
export class TdCardComponent implements OnInit {
  //批量处理相关
  isbatcheditable = false;
  isselected = false;
  batchselected: EventEmitter<any[]>;


  data = { "id": "000", "name": "None", "date": "000", "type": "None" };

  //对话框开关
  //预览
  previewVisible = false;
  //编辑
  editVisible = false;
  edit_title: string;
  total_tags = ["毒品危害", "互联网+", "毒品预防教育", "教育云", "题库", "课程", "班级", "默认标签"];
  edit_tags = [];
  edit_brief: string;
  edit_share: string = "Share";


  constructor(private modalService: NzModalService, private message: NzMessageService) {
      this.batchselected = new EventEmitter();
   }

  ngOnInit() {
  }

  //对话框操作
  //预览
  showpreviewfirm(): void {
    this.previewVisible = true;
  }
  handleOk_preview(): void {
    console.log('Button ok clicked!');
    this.previewVisible = false;
  }
  handleCancel_preview(): void {
    console.log('Button cancel clicked!');
    this.previewVisible = false;
  }
  //收藏
  collectMessage(): void {
    this.message.info('已收藏', { nzDuration: 1000 });
  }
  //编辑
  showeditfirm(): void {
    this.editVisible = true;
  }
  handleOk_edit(): void {
    console.log('Button ok clicked!');
    this.editVisible = false;
  }
  handleCancel_edit(): void {
    console.log('Button cancel clicked!');
    this.editVisible = false;
  }
  //下载
  downloadMessage(): void {
    this.message.info('开始下载', { nzDuration: 1000 });
  }
  //共享
  showShareConfirm(): void {
    this.modalService.confirm({
      nzTitle: '<i>要共享吗？</i>',
      nzContent: '<b>其他老师可以查看、预览、引用该资料</b>',
      nzOnOk: () => console.log('OK')
    });
  }
  //删除
  showDeleteConfirm(): void {
    this.modalService.confirm({
      nzTitle: '<i>是否确认删除资源？</i>',
      nzContent: '<b>文件若被引用，删除会引起引用课时无法正常使用</b>',
      nzOnOk: () => console.log('OK')
    });
  }

  //批量选择
  Batchselecte() {
    if(this.isselected){
      this.batchselected.emit([true,this.data.id]);
    }else{
      this.batchselected.emit([false,this.data.id]);
    }
  }
}
