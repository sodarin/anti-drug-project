import {Component, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GrouplistService} from '../../../../service/grouplist/grouplist.service';
import {GroupfirstService} from '../../../../service/groupfirst/groupfirst.service';
import {GroupnowService} from '../../../../service/groupnow/groupnow.service';
import {NzModalService, NzNotificationService} from 'ng-zorro-antd';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GroupEditService} from '../../../../service/groupedit-edit/group-edit.service';
import {GroupmainlistService} from '../../../../service/groupmainlist/groupmainlist.service';
import {GrouphotService} from '../../../../service/grouphot/grouphot.service';
import {formatDistance} from 'date-fns';

@Component({
  selector: 'app-groupthread',
  templateUrl: './groupthread.component.html',
  styleUrls: ['./groupthread.component.less']
})
export class GroupthreadComponent implements OnInit {
  NewMemberList = [];
  memberMessageList:any;
  detail:any;
  hotGroupList:[];
  groupId: string;
  threadId:string;
  publishReplyForm: FormGroup;
  content: string = '';
  nzValueZD=1;
  nzValueJ=1;
  only=1;
  downToUp=1;
  value: string;
  owner: any;
  RecentThreadList: any;
  threadCreatingForm: FormGroup;
  title:string;
  userId:string="1";
  toId:string;
  isfocus:boolean;

  data: any[] = [];
  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };
  inputValue = '';

  data1 = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources' +
      '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    children: [
      {
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources' +
          '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        children: [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources' +
              '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
          },
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources' +
              '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
          }
        ]
      }
    ]
  };

  constructor(public router:Router,
              private grouplistService$:GrouplistService,
              private groupnowService$:GroupnowService,
              private _notification: NzNotificationService,
              private routeInfo: ActivatedRoute,
              private fb: FormBuilder,
              private groupeditEditService$:GroupEditService,
              private groupmainlistService$:GroupmainlistService,
              private grouphotService$:GrouphotService,
              private _modal: NzModalService,
              ) {
    this.publishReplyForm = this.fb.group({
      content: ['', Validators.required],
    })
  }

  ngOnInit() {

    let pathList = location.pathname.split('/');
    this.groupId = pathList[3];
    this.threadId = pathList[5];
    this.getList();
    this.getNewMember();
    this.getMemberMessage();
    this.getList();
    this.getThreadOwner();
    this.getThreadMessage();
    //this.getMyPost()
    this.threadCreatingForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    })
  }


//热门小组跳转
  jump(){
    this.router.navigateByUrl("/client/groupmainlist/"+this.groupId)
  }
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

  //获取热门小组
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
  //获取新进小组成员
  getNewMember(){
    this.grouplistService$.getNewMember(this.groupId,3).subscribe(result=>{
        this.NewMemberList=result.data;
      },error1 => {
        this._notification.create(
          'error',
          '新进小组成员获取失败',
          `${error1.error}`)
      }
    )
  }

  //获取气泡框成员信息
  getMemberMessage(){
    this.grouplistService$.showMemberMessage(this.groupId).subscribe(result=>{
      this.memberMessageList=result.data[0];
    },error1 => {
      this._notification.create(
        'error',
        '成员信息获取失败',
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
//精华和置顶
  getNzValueZD0(){
    this.groupmainlistService$.setStickThread(this.threadId).subscribe(result=>{
      this._notification.create(
        'success',
        '置顶成功',
        ''
      )
    },error1 => {
      this._notification.create(
        'error',
        '置顶失败',
        `${error1.error}`)
    })
    return this.nzValueZD = 0;
  }
  getNzValueZD1(){
    this.groupmainlistService$.setNotStickThread(this.threadId).subscribe(result=>{
      this._notification.create(
        'success',
        '取消置顶成功',
        ''
      )
    },error1 => {
      this._notification.create(
        'error',
        '取消置顶失败',
        `${error1.error}`)
    })
    return this.nzValueZD = 1;
  }
  getNzValueJ0(){
    this.groupmainlistService$.setEliteThread(this.threadId).subscribe(result=>{
      this._notification.create(
        'success',
        '加精成功',
        ''
      )
    },error1 => {
      this._notification.create(
        'error',
        '加精失败',
        `${error1.error}`)
    })
    return this.nzValueJ = 0;
  }
  getNzValueJ1(){
    this.groupmainlistService$.setNotEliteThread(this.threadId).subscribe(result=>{
      this._notification.create(
        'success',
        '取消加精成功',
        ''
      )
    },error1 => {
      this._notification.create(
        'error',
        '取消加精失败',
        `${error1.error}`)
    })
    return this.nzValueJ = 1;
  }
  //只看楼主变为查看全部
  onlyMy(){
    this.groupmainlistService$.showThreadPost(this.threadId).subscribe(result=>{

      this._notification.create(
        'success',
        '查看全部成功',
        ''
      )
    },error1 => {
      this._notification.create(
        'error',
        '查看全部失败',
        `${error1.error}`
      )
    })
    return this.only = 0;
  }
  //查看全部变为只看楼主
  all(){
    this.groupmainlistService$.showThreadPost(this.threadId).subscribe(result=>{
      this._notification.create(
        'success',
        '只看楼主成功',
        ''
      )
    },error1 => {
      this._notification.create(
        'error',
        '只看楼主失败',
        `${error1.error}`
      )
    })
    return this.only = 1
  }
  //倒叙变正序
  downtoUp(){
    this.groupmainlistService$.showThreadPost(this.threadId).subscribe(result=>{
      this._notification.create(
        'success',
        '正序查看成功',
        ''
      )
    },error1 => {
      this._notification.create(
        'error',
        '正序查看失败',
        `${error1.error}`
      )
    })
    return this.downToUp = 0;
  }
//正序变倒叙
  upToDown(){
    this.groupmainlistService$.showThreadPost(this.threadId).subscribe(result=>{
      this._notification.create(
        'success',
        '倒叙查看成功',
        ''
      )
    },error1 => {
      this._notification.create(
        'error',
        '倒叙查看失败',
        `${error1.error}`
      )
    })
    return this.downToUp = 1;
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

  //获取话题信息
  getThreadMessage(){
    this.grouphotService$.showRecentGroup(this.threadId).subscribe(result=>{
        this.RecentThreadList=result;
      },error1 => {
        this._notification.create(
          'error',
          '最近话题获取失败',
          `${error1.error}`)
      }
    )
  }

  //编辑
  oclick(){
    this.router.navigateByUrl("client/groupmainlist/"+this.groupId+"/groupthread/"+this.threadId+"/groupthreadedit")
  }

  //获取话题作者
  getThreadOwner(){
    this.groupmainlistService$.getThreadOwner(this.threadId).subscribe(result=>{
      this.owner=result.data
    },error1 => {
      this._notification.create(
        'error',
        '话题作者获取失败',
        `${error1.error}`)
    })
  }
  //获取回复的话题
  /*
  getMyPost(){
    this.groupmainlistService$.showMyPost(this.userId).subscribe(result=>{
      if(this.userId==result.data.userId) {
        this.postList = result.data;
      }
    },error1 => {
      this._notification.create(
        'error',
        '获取回复话题列表失败',
        `${error1.error}`)
    }
    )
  }
*/
//发表回复

  publishReply() {
    this.groupmainlistService$.addThreadPost(this.userId,this.content).subscribe(result=>{
      this._notification.create(
        'success',
        '回复话题成功',
        ''
      )
    },error1 => {
        this._notification.create(
          'error',
          '回复话题失败',
          `${error1.error}`)
      }
    )
  }

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    setTimeout(() => {
      this.submitting = false;
      this.data= [
        ...this.data,
        {
          ...this.user,
          content,
          datetime: new Date(),
          displayTime: formatDistance(new Date(), new Date())
        }
      ].map(e => {
        return {
          ...e,
          displayTime: formatDistance(new Date(), e.datetime)
        };
      });
    }, 800);
  }
}
