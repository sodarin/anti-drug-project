import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-live-course',
  templateUrl: './my-live-course.component.html',
  styleUrls: ['./my-live-course.component.less']
})
export class MyLiveCourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  listDataMap = {
    eight: [
      { type: 'warning', content: '这是一个直播课程.' },
      { type: 'success', content: '这是一个直播课程.' }
    ],
    ten: [
      { type: 'warning', content: '这是一个直播课程.' },
      { type: 'success', content: '这是一个直播课程.' },
      { type: 'error', content: '这是一个直播课程.' }
    ],
    eleven: [
      { type: 'warning', content: '这是一个直播课程' },
      { type: 'success', content: '这是一个直播课程.......' },
      { type: 'error', content: '这是一个直播课程.' },
      { type: 'error', content: '这是一个直播课程.' },
      { type: 'error', content: '这是一个直播课程.' },
      { type: 'error', content: '这是一个直播课程.' }
    ]
  };

  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }

}
