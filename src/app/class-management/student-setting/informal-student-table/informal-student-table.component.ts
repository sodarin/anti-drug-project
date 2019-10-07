import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-informal-student-table',
  templateUrl: './informal-student-table.component.html',
  styleUrls: ['./informal-student-table.component.less']
})
export class InformalStudentTableComponent implements OnInit {

  @Input()
  classroomId: string;

  name: string;
  studentList = [];
  total: number;
  loading: boolean = false;
  pageIndex: number = 1;

  constructor(
    private routerInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.classroomId = location.pathname.split('/')[3];
  }

  filterStudent() {

  }

  searchData(pageIndex: number = this.pageIndex) {

  }

}
