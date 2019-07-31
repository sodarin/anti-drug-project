import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-course-header',
  templateUrl: './admin-course-header.component.html',
  styleUrls: ['./admin-course-header.component.less']
})
export class AdminCourseHeaderComponent implements OnInit {

  location: Location;
  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    this.location = location
  }

  navigate(url: string) {
    this.route.navigateByUrl(url);
  }

}
