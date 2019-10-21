import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.less']
})
export class TeacherComponent implements OnInit {
  data = [{
    id:0,
    title: 'Title 1',
    isshow:true
  },
    {
      id:1,
      title: 'Title 2',
      isshow:true
    },
    {id:2,
      title: 'Title 3',
      isshow:true
    },
    {id:3,
      title: 'Title 4',
      isshow:true
    },
    {id:4,
      title: 'Title 5',
      isshow:true
    }]

  constructor(private router:Router) {
  }

  ngOnInit() {
  }

  show1(i) {
    i.isshow = false;
  }

  show2(i) {
    i.isshow = true;
  }

  // searchData(pageIndex: number = this.pageIndex) {
  //   this.displayData = [];
  //   this.loading = true;
  //   this.teacherManagementService$.getUserList(pageIndex, 12).subscribe(result => {
  //     this.loading = false;
  //     this.total = result.data[0].totalNum ? result.data[0].totalNum : 0;
  //     this.totalPage = Math.ceil(this.total / 10);
  //     this.dataList = result.data;
  //     this.displayData = this.dataList;
  //   }, error1 => {
  //     this.loading = false;
  //     this._message.error(error1.error)
  //   })
  // }
  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
