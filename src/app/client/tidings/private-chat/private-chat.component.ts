import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute} from '@angular/router';
import {PrivateChatService} from '../../../service/private-chat/private-chat.service';

@Component({
  selector: 'app-private-chat',
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.less']
})
export class PrivateChatComponent implements OnInit {
  Contactname;
  Myname = '我';
  data = [];
  submitting = false;
  user = {
    author: '我',
    avatar: '../../assets/img/userface-small.jpg'
  };
  inputValue = '';
  handleSubmit(): void {
    this.submitting = true;
    const content = this.Contactname + '，' + this.inputValue;
    this.inputValue = '';
    setTimeout(() => {
      this.submitting = false;
      this.data = [
        ...this.data,
        {
          ...this.user,
          content,
          datetime: '10-06',
        }
      ].map(e => {
        return {
          ...e,
        };
      });
    }, 800);
  }
  constructor(private router: Router,
              private routerinfor: ActivatedRoute,
              private privateChatService: PrivateChatService ) {
  }

  ngOnInit() {
    this.Contactname = this.routerinfor.snapshot.params[ 'name' ];
    this.data = [
      {
        author : this.Contactname,
        avatar : 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content : 'admin,欢迎加入课程 小学-第四课-养成良好的习惯-默认教学计划',
        datetime : '10-06'
      },
      {
        author : this.Contactname,
        avatar : 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content : 'admin,欢迎加入课程 小学-第一课-什么是毒品-默认教学计划',
        datetime : '10-06'
      },
      {
        author : this.Contactname,
        avatar : 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content : 'admin,欢迎加入课程 甜蜜的诱惑小熊-默认教学计划',
        datetime : '10-06'
      },
      {
        author : '我',
        avatar : '../../assets/img/userface-small.jpg',
        content : '王伟,欢迎加入课程 课程发布指南-默认教学计划',
        datetime : '10-06'
      }
    ];
    // this.data = new Array(5).fill({}).map((_, index) => {
    //   return {
    //     author : '我',
    //     avatar : '../../assets/img/userface-small.jpg',
    //     content : '王伟,欢迎加入课程 课程发布指南-默认教学计划',
    //     datetime : '10-06'
    //   };
    // });
  }
  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
