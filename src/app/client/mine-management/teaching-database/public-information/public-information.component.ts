import { Component, OnInit } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'app-public-information',
  templateUrl: './public-information.component.html',
  styleUrls: ['./public-information.component.less']
})
export class PublicInformationComponent implements OnInit {

  name: string;
  None: any;
  dataList = [
    { id: "001", name: "Test1", date: "2020.2.4", type: "None" },
    { id: "002", name: "Test2", date: "2020.2.4", type: "None" },
    { id: "003", name: "Test3", date: "2020.2.4", type: "None" },
    { id: "004", name: "Test4", date: "2020.2.4", type: "None" },
    { id: "005", name: "Test5", date: "2020.2.4", type: "None" },
    { id: "006", name: "Test6", date: "2020.2.4", type: "None" },
    { id: "007", name: "Test7", date: "2020.2.4", type: "None" },
    { id: "008", name: "Test8", date: "2020.2.4", type: "None" },
    { id: "009", name: "Test9", date: "2020.2.4", type: "None" }
  ];
  totalpage: number = 50;
  currentpage: number = 1;
  tags = ["毒品危害", "互联网+", "毒品预防教育", "教育云", "题库", "课程", "班级", "默认标签"];
  users = ["张老师", "王老师", "刘老师"];
  //对话框开关
  //上传
  uploadVisible = false;
  //添加标签
  addtagVisible = false;
  //分享资料
  userShareVisible = false;
  //我的分享
  myShareVisible = false;
  //分享历史——用户
  myshareuser = [{ name: "张老师", date: "2019.2.4" },
  { name: "王老师", date: "2019.2.4" },
  { name: "刘老师", date: "2019.2.4" }
  ];
  //分享历史--操作
  sharehistory = [{ operation: "分享资料给张老师", date: "2019.2.4" },
  { operation: "取消分享资料给王老师", date: "2019.2.4" },
  { operation: "分享资料给刘老师", date: "2019.2.4" }
  ];

  //批量处理功能
  isbatcheditable = false;
  buttonval = "批量管理";
  currentbatch = [];


  constructor(private modalService: NzModalService, private message: NzMessageService) { }

  ngOnInit() {
  }
  searchData(pageIndex: number = this.currentpage) {

  }
  filterStudent() {

  }

  //上传
  showuploadfirm(): void {
    this.uploadVisible = true;
  }
  handleOk_upload(): void {
    console.log('Button ok clicked!');
    this.uploadVisible = false;
  }
  handleCancel_upload(): void {
    console.log('Button cancel clicked!');
    this.uploadVisible = false;
  }

  //批量处理
  //打开/关闭
  openBatchProcessing(): void {
    this.currentbatch = [];
    this.isbatcheditable = !this.isbatcheditable;
    if (this.isbatcheditable) {
      this.buttonval = "批量管理";
    } else {
      this.buttonval = "完成管理";
    }
  }
  //添加
  addbatchItem(val: string[]): void {
    if (val[0]) {
      this.currentbatch.push(val[1]);
    } else {
      for (var i = 0; i < this.currentbatch.length; i++) {
        if (this.currentbatch[i] == val[1]) {
          this.currentbatch.splice(i, 1);
          break;
        }
      }
    }
  }
  //共享
  showShareConfirm(): void {
    if (this.currentbatch.length > 0) {
      var text = "";
      for (var i = 0; i < this.dataList.length; i++) {
        for (var j = 0; j < this.currentbatch.length; j++) {
          if (this.dataList[i].id == this.currentbatch[j]) {
            text = text + "\n" + this.dataList[i].name;
            break;
          }
        }
      }
      this.modalService.confirm({
        nzTitle: '<i>要共享以下资料吗？</i>',
        nzContent: '<p>' + text + '</p><b>其他老师可以查看、预览、引用该资料</b>',
        nzOnOk: () => console.log('OK')
      });
    } else {
      this.message.info('请选择至少一个资料卡', { nzDuration: 1000 });
    }

  }
  //删除
  showDeleteConfirm(): void {
    if (this.currentbatch.length > 0) {
      var text = "";
      for (var i = 0; i < this.dataList.length; i++) {
        for (var j = 0; j < this.currentbatch.length; j++) {
          if (this.dataList[i].id == this.currentbatch[j]) {
            text = text + "\n" + this.dataList[i].name;
            break;
          }
        }
      }
      this.modalService.confirm({
        nzTitle: '<i>是否删除以下资源？</i>',
        nzContent: '<p>' + text + '</p><b>文件若被引用，删除会引起引用课时无法正常使用</b>',
        nzOnOk: () => console.log('OK')
      });
    } else {
      this.message.info('请选择至少一个资料卡', { nzDuration: 1000 });
    }

  }
  //添加标签
  showaddTagsfirm(): void {
    if (this.currentbatch.length > 0) {
      this.addtagVisible = true;
    } else {
      this.message.info('请选择至少一个资料卡', { nzDuration: 1000 });
    }

  }
  handleOk_addTags(): void {
    console.log('Button ok clicked!');
    this.addtagVisible = false;
  }
  handleCancel_addTags(): void {
    console.log('Button cancel clicked!');
    this.addtagVisible = false;
  }

  //换页
  onPageChange(): void {
    this.currentbatch = [];
    this.isbatcheditable = false;
    this.buttonval = "批量管理";
  }

  //分享资料
  showusersharefirm(): void {
    this.userShareVisible = true;
  }
  handleOk_usershare(): void {
    console.log('Button ok clicked!');
    this.userShareVisible = false;
  }
  handleCancel_usershare(): void {
    console.log('Button cancel clicked!');
    this.userShareVisible = false;
  }

  //我的分享
  showmysharefirm(): void {
    this.myShareVisible = true;
  }
  handleOk_myshare(): void {
    console.log('Button ok clicked!');
    this.myShareVisible = false;
  }
  handleCancel_myshare(): void {
    console.log('Button cancel clicked!');
    this.myShareVisible = false;
  }
  //取消分享
  cancelShare(): void {
    this.message.info('取消分享', { nzDuration: 1000 });
  }


}
