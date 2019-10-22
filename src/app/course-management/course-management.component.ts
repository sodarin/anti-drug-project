import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { CourseBaseInfoEditService } from '../service/course-base-info-edit/course-base-info-edit.service';


@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.less']
})
export class CourseManagementComponent implements OnInit {
  courseId: string;
  location: Location;
  title: string;
  status: string;
  teachersName = [];

  constructor(
    private router: Router,
    private routerInfo: ActivatedRoute,
    private _courseBaseInfoEditService: CourseBaseInfoEditService) { }

  ngOnInit() {
    this.location = location
    this.routerInfo.params.subscribe(res => {
      this.courseId = res.id;
    });
    this.getCourseInfo();
  }
  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  getCourseInfo() {
    this._courseBaseInfoEditService.getCourseInfo(this.courseId).subscribe(res => {
      this.title = res.data.baseData.title;
      this.status = res.data.baseData.status;
      this.teachersName = res.data.teachersName;
    })
  }
}
