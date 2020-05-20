import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router'
import { NzEmptyService } from 'ng-zorro-antd';
import { CourseManagementUtilService } from 'src/app/service/course-management-util/course-management-util.service';

@Component({
  selector: 'app-test-paper',
  templateUrl: './test-paper.component.html',
  styleUrls: ['./test-paper.component.less']
})
export class TestPaperComponent implements OnInit {

  @ViewChild('customTpl', { static: true }) customTpl: TemplateRef<any>;

  courseId: any;
  constructor(
    private router: Router,
    private nzEmptyService: NzEmptyService,
    private _courseManagementUtilService: CourseManagementUtilService
  ) {
    this.nzEmptyService.setDefaultContent(this.customTpl);
  }

  ngOnInit() {
    this.nzEmptyService.setDefaultContent(this.customTpl);
    this.courseId = this._courseManagementUtilService.setCourseIdFrom(location);
  }

  check() {
    this.nzEmptyService.setDefaultContent(this.customTpl);
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
