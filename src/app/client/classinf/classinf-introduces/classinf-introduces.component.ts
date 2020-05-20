import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ClassInfService } from 'src/app/service/classinf-frontend/classinf-frontend.service';
@Component({
  selector: 'app-classinf-introduces',
  templateUrl: './classinf-introduces.component.html',
  styleUrls: ['./classinf-introduces.component.less'],
  inputs: ["classid"]
})
export class ClassinfIntroducesComponent implements OnInit {
  classid = "0";
  //班级介绍
  introduces = "";//[{ title: "班级介绍", content: "暂无" }, { title: "班级目标", content: "暂无" }, { title: "适合人群", content: "暂无" }];

  constructor(private classinfservice: ClassInfService,private notification: NzNotificationService) { }

  ngOnInit() {
    this.classinfservice.getclassIntroduce(this.classid).subscribe((res: any) => {
      this.setclassIntroduce(res);
    }, error => {
      this.notification.create(
        'error',
        '发生错误！',
        `${error.error}`)
    })
  }

  setclassIntroduce(res: any) {
    this.introduces = res.data;
  }

}
