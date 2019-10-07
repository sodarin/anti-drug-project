import { Component, OnInit } from '@angular/core';
import {NzMessageService, NzModalService} from "ng-zorro-antd";
import {ImagesUploadingService} from "../../../../service/images-uploading/images-uploading.service";
import {GrouplistService} from "../../../../service/grouplist/grouplist.service";
import {GroupmemberService} from "../../../../service/groupmember/groupmember.service";
import {GroupfirstService} from "../../../../service/groupfirst/groupfirst.service";
import {Router} from '@angular/router';
@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.less']
})
export class GroupInfoComponent implements OnInit {
  memeberid:string;
  topic:string;
  date='2019-8-6';
  images:string;
  number=2;

  leader: string;
  filterOptions: {};
  loading: boolean = false;
  data: any[] = [];
  list: Array<{
    id: any;
    loading: boolean; name: any }> = [];
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;
  imgs:[];
  img:string;
  fans=2;
  study=3;
  focuson=4;
  edit:string;
  name:string;





  constructor(private imagesUploadingService$:ImagesUploadingService,
              public router:Router,
  private grouplistService$:GrouplistService,
  private groupmemberService$:GroupmemberService,
  private groupfirstService$:GroupfirstService,
  private  _message: NzMessageService,
  private  _modalService: NzModalService) { }

  ngOnInit() {
  }
  //获取小组背景图片
  getBackgroundimage(){
    // @ts-ignore
    this.images=false
    // @ts-ignore
    this.imagesUploadingService$.getBackground().subscribe(result =>{
      // @ts-ignore
      this.images=result;
    }, error1 => {
      this._message.error(error1.error)
    })
  }

  //获取小组成员信息


//发布话题
  onclick(url:string) {
    this.router.navigateByUrl("client/groupmainlist/grouplist/grouptopic")

  }
  //我的小组
  toclick(url:string){
    this.router.navigateByUrl("")
  }

  // 搜索

  filterTopicTable() {
    this.data = [];
    this.loading = true;
    this.filterOptions = {
      leader: this.leader
    };
    this.grouplistService$.filterTopicTableList(1, 10, this.filterOptions).subscribe(result => {
      this.loading = false;
      this.list = result;
      this.data = this.list;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
  }
  searchData(pageIndex: number = this.pageIndex) {
    this.data = [];
    this.loading = true;
    this.grouplistService$.getTopicTableList(pageIndex, 10).subscribe(result => {
      this.loading = false;
      this.total = result[0].totalUser;
      this.totalPage = Math.ceil(this.total / 10);
      this.list = result;
      this.data = this.list;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
  }

  //获取新加成员的头像
  /*
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
  }*/
  //关注
  focus(){

  }
  //私信
  message(){

  }
}
