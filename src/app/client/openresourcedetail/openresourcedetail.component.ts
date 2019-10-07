import { Component, OnInit } from '@angular/core';
import { addDays, differenceInMilliseconds } from 'date-fns';
import {Router} from '@angular/router';
@Component({
  selector: 'app-openresourcedetail',
  templateUrl: './openresourcedetail.component.html',
  styleUrls: ['./openresourcedetail.component.less'],
})
export class OpenresourcedetailComponent implements OnInit {
  private teachername: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Submitdata: any[] = [];
  submitting = false;
  user = {
    author: 'Han Solo',
  };
  inputValue = '';
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
  teacherInfo:[{
    name:'sss'
  }];

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
