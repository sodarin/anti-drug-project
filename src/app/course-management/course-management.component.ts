import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.less']
})
export class CourseManagementComponent implements OnInit {

  location: Location;

  constructor(private router: Router) { }

  ngOnInit() {
    this.location = this.location;
  }
  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
