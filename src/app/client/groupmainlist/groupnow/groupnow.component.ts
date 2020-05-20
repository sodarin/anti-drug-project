import {Component, OnInit, TemplateRef} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import {GroupnowService} from '../../../service/groupnow/groupnow.service';
import {error} from 'selenium-webdriver';
import {NzModalService, NzNotificationService} from 'ng-zorro-antd';
import {GrouphotService} from '../../../service/grouphot/grouphot.service';
import {GrouplistService} from '../../../service/grouplist/grouplist.service';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-groupnow',
  templateUrl: './groupnow.component.html',
  styleUrls: ['./groupnow.component.less']
})
export class GroupnowComponent implements OnInit {
  data: any[] = [];
  list: Array<{ loading: boolean; name: any }> = [];
  id: string;
  hotGroupList = [];
  RecentThreadList = [];
  toId:string;
  isfocus:boolean;
  loading: boolean = false;



  name='admin';
  memberleader='admin';
  study=1;
  fans=2;
  focuson=3;
  detail:any;
  userId:string;
  userID:string="1"



  filterOptions: {};
  checkOption = [];
  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  threadCreatingForm: FormGroup;

  constructor(
    private http: HttpClient,
    private route: Router,
    private groupnowService$:GroupnowService,
    private _notification: NzNotificationService,
    private grouphotService$:GrouphotService,
    private grouplistService$:GrouplistService,
    private _modal: NzModalService,
  ) { }

  ngOnInit() {


      this.getList();

    this.getRecentTopic();
  }


  navigateByUrl(url: string) {
    this.route.navigateByUrl(url)
  }
  getList() {
    this.groupnowService$.getHotList().subscribe(result => {

      this.hotGroupList = result.data;
    }, error1 => {
      this._notification.create(
        'error',
        '热门小组获取失败',
        `${error1.error}`)
    })
  }

//获取最近话题
  getRecentTopic(){
    this.loading = true;
    this.grouphotService$.showRecentGroupNow(8).subscribe(result=>{
      this.loading = false;
      this.RecentThreadList=result.data;
      },error1 => {
        this._notification.create(
          'error',
          '最近话题获取失败',
          `${error1.error}`)
      }
    )
  }
//获取user
  getUserDetail(id:string) {
    this.grouplistService$.getUser(id).subscribe(result=>{
      this.detail=result.data;
      this.toId=id;
      this.grouplistService$.isFocus(this.userID,this.toId).subscribe(result=>{
        this.isfocus=result.data
      })
    },error1 => {
      this._notification.create(
        'error',
        '成员信息获取失败',
        `${error1.error}`)
    })
  }
  //发送私信
  message(data: any, template: TemplateRef<{}>) {
    this.threadCreatingForm.controls.title.setValue(data.nickName);
    const modal = this._modal.create({
      nzTitle: '发送私信',
      nzContent: template,
      nzOkText: '发送',
      nzOnOk: () => {
        for (let i in this.threadCreatingForm.controls) {
          this.threadCreatingForm.controls[i].markAsDirty();
          this.threadCreatingForm.controls[i].updateValueAndValidity()
        }
        if ( !this.threadCreatingForm.controls.content.errors) {
          this.grouplistService$.sendMessage(this.threadCreatingForm.controls.content.value,this.userId,data.id).subscribe(result => {
            this._notification.create(
              'success',
              '发送成功',
              ''
            )
          },error1 => {
            this._notification.create(
              'error',
              '发送失败',
              `${error1.error}`
            )
          })
        } else {
          this._notification.create(
            'error',
            '发生错误！',
            '请正确填写表单信息'
          )
        }
      }
    })
    modal.afterClose.subscribe(result => {
      this.threadCreatingForm.controls.content.setValue('')
    })
  }
  // 关注
  focus(){

    if(this.isfocus==false){
      this.grouplistService$.followedUser(this.userID,this.toId).subscribe(result=>{
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
      this.grouplistService$.delFollowedUser(this.userID,this.toId).subscribe(result=>{
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
