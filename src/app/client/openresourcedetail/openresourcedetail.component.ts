import { Component, OnInit } from '@angular/core';
import { addDays, differenceInMilliseconds } from 'date-fns';
import { ActivatedRoute, Router } from '@angular/router';
import { OpenresourceService } from '../../service/openresource/openresource.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { OpenresourcedetailService } from '../../service/openresourcedetail/openresourcedetail.service';
@Component({
  selector: 'app-openresourcedetail',
  templateUrl: './openresourcedetail.component.html',
  styleUrls: ['./openresourcedetail.component.less'],
})
export class OpenresourcedetailComponent implements OnInit {
  displayData: any;
  teacherData; any;
  movietitle: any;
  HitNum: any;
  PostNum: any;
  courseId: string;
  LikeNum: number;
  SubTitle: string;
  teacherID: any;
  teachernickname: string;
  teachertitle: string;
  SmallPicture: string;
  Teacherid: string;
  teacherlargeAvatar: string;
  FansNum: number;
  FollowedNum: number;
  constructor(private router: Router,
    private opendetailService$: OpenresourcedetailService,
    private openService$: OpenresourceService,
    private _notification: NzNotificationService,
    private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    this.courseId = this.routerInfo.snapshot.params['id'];
    this.GetData()

  }
  GetData() {
    this.opendetailService$.getOpenCourseDetailInfor(this.courseId).subscribe(result => {
      this.displayData = result
      this.movietitle = this.displayData.title
      this.HitNum = this.displayData.hitNum
      this.PostNum = this.displayData.postNum
      this.LikeNum = this.displayData.likeNum
      this.SubTitle = this.displayData.subtitle
      this.teachernickname = this.displayData.teacher_nickname
      this.teachertitle = this.displayData.teacher_title
      this.SmallPicture = this.displayData.smallPicture
      this.Teacherid = this.displayData.teacher_id
      this.getTeacherData()
    }, error1 => {
      this._notification.create(
        'error',
        '发生错误！',
        `${error1.error}`
      )
    })
  }
  getTeacherData() {
    this.opendetailService$.getTeacherInfor(this.Teacherid).subscribe(result => {
      this.teacherData = result
      this.FansNum = this.teacherData.data.fansNum
      this.FollowedNum = this.teacherData.data.followedNum
    }, error1 => {
      this._notification.create(
        'error',
        '发生错误！',
        `${error1.error}`
      )
    })
  }
  Submitdata: any[] = [];
  submitting = false;
  inputValue = '';
  user = {
    author: 'Han Solo',
  };
  data =
    {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      datetime: differenceInMilliseconds(new Date(), addDays(new Date(), 1)),
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      children: [
        {
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          datetime: differenceInMilliseconds(new Date(), addDays(new Date(), 2)),
          content:
            'We supply a series of design principles, practical patterns and high quality design resources' +
            '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          children: [
            {
              author: 'Han Solo',
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              datetime: differenceInMilliseconds(new Date(), addDays(new Date(), 1)),
              content:
                'We supply a series of design principles, practical patterns and high quality design resources' +
                '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
            },
            {
              author: 'Han Solo',
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              datetime: differenceInMilliseconds(new Date(), addDays(new Date(), 1)),
              content:
                'We supply a series of design principles, practical patterns and high quality design resources' +
                '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
            }
          ]
        }
      ]
    };
  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    setTimeout(() => {
      this.submitting = false;
      this.Submitdata = [
        ...this.Submitdata,
        {
          ...this.user,
          content,
          datetime: new Date(),
          displayTime: differenceInMilliseconds(new Date(), new Date())
        }
      ].map(e => {
        return {
          ...e,
          displayTime: differenceInMilliseconds(new Date(), e.datetime)
        };
      });
    }, 800);
  }
  navigateByUrl(url) {
    this.router.navigateByUrl(url);
  }
}
