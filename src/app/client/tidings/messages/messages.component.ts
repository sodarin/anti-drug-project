import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PrivateChatService} from "../../../service/private-chat/private-chat.service";
import {NzNotificationService} from "ng-zorro-antd";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})
export class MessagesComponent implements OnInit {
  pageIndex: number = 1;
  pageSize: number = 8;
  userId:number;
  total:number;
  isVisible = false;
  isOkLoading = false;
  inputValue1 = '';
  inputValue2 = '';
  user = {
    author: '我',
    avatar: '../../assets/img/userface-small.jpg'
  };
  // messages = [
  //   {
  //     name : '王大炮',
  //     avatarUrl : '../../../../assets/img/userface.jpg',
  //     message: '我加入了你的课堂。',
  //     status : '未读',
  //     time: '2019-05-09 11:28'
  //   },
  //   {
  //     name : '王大炮',
  //     avatarUrl : '../../../../assets/img/userface.jpg',
  //     message: '我加入了你的课堂。',
  //     status : '未读',
  //     time: '2019-03-09 11:28'
  //   },
  //   {
  //     name : '王大炮',
  //     avatarUrl : '../../../../assets/img/userface.jpg',
  //     message: '我加入了你的课堂。',
  //     status : '未读',
  //     time: '2019-03-09 11:27'
  //   },
  //   {
  //     name : '王大炮',
  //     avatarUrl : '../../../../assets/img/userface.jpg',
  //     message: '我加入了你的课堂。',
  //     status : '未读',
  //     time: '2019-03-09 11:26'
  //   },
  //   {
  //     name : '王大炮',
  //     avatarUrl : '../../../../assets/img/userface.jpg',
  //     message: '我加入了你的课堂。',
  //     status : '未读',
  //     time: '2019-03-09 11:25'
  //   },
  //   {
  //     name : '王大炮',
  //     avatarUrl : '../../../../assets/img/userface.jpg',
  //     message: '我加入了你的课堂。',
  //     status : '未读',
  //     time: '2019-03-09 11:24'
  //   },
  //   {
  //     name : '王大炮',
  //     avatarUrl : '../../../../assets/img/userface.jpg',
  //     message: '我加入了你的课堂。',
  //     status : '未读',
  //     time: '2019-03-09 11:23'
  //   },
  //   {
  //     name : '王大炮',
  //     avatarUrl : '../../../../assets/img/userface.jpg',
  //     message: '我加入了你的课堂。',
  //     status : '未读',
  //     time: '2019-03-09 11:22'
  //   },
  //   {
  //     name : '王大炮',
  //     avatarUrl : '../../../../assets/img/userface.jpg',
  //     message: '我加入了你的课堂。',
  //     status : '未读',
  //     time: '2019-03-09 11:21'
  //   },
  //   {
  //     name : '王大炮',
  //     avatarUrl : '../../../../assets/img/userface.jpg',
  //     message: '我加入了你的课堂。',
  //     status : '未读',
  //     time: '2019-03-09 11:20'
  //   },
  //   {
  //     name : '王大炮',
  //     avatarUrl : '../../../../assets/img/userface.jpg',
  //     message: '我加入了你的课堂。',
  //     status : '未读',
  //     time: '2019-03-09 11:19'
  //   },
  //   {
  //     name : '王大炮',
  //     avatarUrl : '../../../../assets/img/userface.jpg',
  //     message: '我加入了你的课堂。',
  //     status : '未读',
  //     time: '2019-03-09 11:18'
  //   },
  //   {
  //     name : '王大炮',
  //     avatarUrl : '../../../../assets/img/userface.jpg',
  //     message: '我加入了你的课堂。',
  //     status : '未读',
  //     time: '2019-03-09 11:17'
  //   },
  //   {
  //     name : '王大炮',
  //     avatarUrl : '../../../../assets/img/userface.jpg',
  //     message: '我加入了你的课堂。',
  //     status : '未读',
  //     time: '2019-03-09 11:16'
  //   }
  // ];
  data = [];
  constructor(private router: Router,
              private privateChatService: PrivateChatService,
              private error: NzNotificationService) {
  }
  send(){
    this.privateChatService.sendMessage(this.inputValue2,19,this.inputValue1,1,"0").subscribe(result=>{
      //用来测试的需要删掉
      this.serch();
    })
    let i;
    this.privateChatService.changeStatus.subscribe(value => i = value);
    this.privateChatService.changeStatus.next(i+1);
  }
  serch(){
    this.privateChatService.getMessages('1' ,this.pageIndex,this.pageSize,1).subscribe(result =>{
      this.data = result.data;
      this.total = this.data[0].totalNum;
    },error1 => {
      this.error.create(
        'error',
        '发生错误',
        `${error1.error}`
      )
    })
  }
  read(messageId:number){
    this.privateChatService.readMessages(messageId).subscribe(result =>{
      this.serch();
    })
    let i;
    this.privateChatService.changeStatus.subscribe(value => i = value);
    this.privateChatService.changeStatus.next(i+1);
  }
  loadIndex(pi:number): void{
    this.pageIndex=pi;
    this.serch();
  }
  ngOnInit() {
    this.serch();
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
  showModal():void{
    this.isVisible = true;
  }
  handleOk(): void{
    this.isOkLoading = true;
    //收信人
    setTimeout(()=>{
      //收信人清空
      this.send();
      this.inputValue1 = '';
      this.inputValue2 = '';
      this.isVisible = false;
      this.isOkLoading = false;
    },3000)
  }
  handleCancel():void{
    this.isVisible = false;
  }
  // loadData(pi: number): void {
  // //   this.data = [];
  // //   if (8 * pi <= this.messages.length) {
  // //     for (let i = 0; i < 8; i ++) {
  // //       this.data[i] = this.messages[8 * (pi - 1) + i];
  // //     }
  // //   } else {
  // //     for (let i = 0; i < (this.messages.length - (8 * (pi - 1))); i ++) {
  // //       this.data[i] = this.messages[8 * (pi - 1) + i];
  // //     }
  // //   }
  // }

}
