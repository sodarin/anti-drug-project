import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-course-exam',
  templateUrl: './course-exam.component.html',
  styleUrls: ['./course-exam.component.less']
})

export class CourseExamComponent implements OnInit {
  totalSeconds: number = 900;
  hour: any = '00';
  minute: any = '00';
  second: any = '00';
  singleChoices: any[] = [
    {
      stem: '大麻是毒品吗?',
      score: '5.0',
      metas: { choices: ["正确", "错误"] }
    }]
  constructor(private router: Router) { }

  ngOnInit() {
    this.countDown(this.totalSeconds)
  }

  countDown(totalSeconds) {
    if (totalSeconds > 0) {
      //相差的总秒数
      this.hour = Math.floor(totalSeconds / (60 * 60)) > 10 ?
        Math.floor(totalSeconds / (60 * 60)) :
        '0' + Math.floor(totalSeconds / (60 * 60));
      let tmp = totalSeconds % (60 * 60);
      //分钟
      this.minute = Math.floor(tmp / 60) > 10 ?
        Math.floor(tmp / 60) :
        '0' + Math.floor(tmp / 60);
      //秒
      this.second = tmp % 60 > 10 ?
        tmp % 60 : '0' + tmp % 60;

      totalSeconds--;
      //延迟一秒执行自己
      setTimeout(() => {
        this.countDown(totalSeconds);
      }, 1000)
    }
  }
  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
