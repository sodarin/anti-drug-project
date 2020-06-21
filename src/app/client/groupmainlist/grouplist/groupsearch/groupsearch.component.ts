import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {GrouplistService} from '../../../../service/grouplist/grouplist.service';
import {NzMessageService, NzNotificationService} from 'ng-zorro-antd';
import {GroupfirstComponent} from '../groupfirst/groupfirst.component';
import {GroupfirstService} from '../../../../service/groupfirst/groupfirst.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-groupsearch',
  templateUrl: './groupsearch.component.html',
  styleUrls: ['./groupsearch.component.less']
})
export class GroupsearchComponent implements OnInit {

  inputValue: string;
  detail:[];
  toId:string;
  isfocus:boolean;
  leader: string;
  searchValue: string = '';
  groupId: string;
userId:string="1";

  loading: boolean = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;
  data: any[] = [];
  list: Array<{
    loading: boolean; name: any }> = [];

  ThreadList:[];

  img='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';


  constructor(
    private routeInfo: ActivatedRoute,
    private grouplistService$:GrouplistService,
    private _message: NzMessageService,
    private _notification: NzNotificationService,
    private groupfirstService$:GroupfirstService,
    public router:Router,

  ) { }

  ngOnInit() {
    this.leader = this.routeInfo.snapshot.queryParams['content'];
    this.groupId = location.pathname.split('/')[3];
    // console.log(this.searchValue)
    // console.log(this.id)
    this.filterTopic();
  }
  navigateByUrl(url: string) {
    this.router.navigateByUrl(url)
  }
  //搜索
  filterTopic() {
    this.searchValue = this.leader;
    this.loading = true;
    this.grouplistService$.getSearch(this.searchValue,this.groupId).subscribe(result => {
      this.loading = false;
      this.ThreadList = result.data;
      this.router.navigateByUrl(`/client/groupmainlist/${this.groupId}/groupsearch?content=${this.searchValue}`)
    }, error1 => {
      this._notification.create(
        'error',
        '搜索失败',
        `${error1.error}`)
    })
  }
  getUserDetail(id:string) {
    this.grouplistService$.getUser(id).subscribe(result=>{
      this.detail=result.data;
      this.toId=id;
      this.grouplistService$.isFocus(this.userId,this.toId).subscribe(result=>{
        this.isfocus=result.data
      })
    },error1 => {
      this._notification.create(
        'error',
        '成员信息获取失败',
        `${error1.error}`)
    })
  }



  // 关注
  focus(){

    if(this.isfocus==false){
      this.grouplistService$.followedUser(this.userId,this.toId).subscribe(result=>{
        this._notification.create(
          'success',
          '关注成功',
          ''
        )
      },error1 => {
        this._notification.create(
          'error',
          '关注失败',
          `${error1.error}`
        )
      })
    }

  }
  //取消关注
  cancelfocus(){
    if(this.isfocus==true){
      this.grouplistService$.delFollowedUser(this.userId,this.toId).subscribe(result=>{
        this._notification.create(
          'success',
          '取消关注成功',
          ''
        )
      },error1 => {
        this._notification.create(
          'error',
          '取消关注失败',
          `${error1.error}`
        )
      })
    }

  }




}
