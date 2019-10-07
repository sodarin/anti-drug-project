import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.less']
})
export class TeacherComponent implements OnInit {

  data = [{
    title: 'Title 1',
    isshow:true
  },
    {
      title: 'Title 2',
      isshow:true
    },
    {
      title: 'Title 3',
      isshow:true
    },
    {
      title: 'Title 4',
      isshow:true
    },
    {
      title: 'Title 4',
      isshow:true
    }]

  constructor() {
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

}
