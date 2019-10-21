import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.less']
})
export class MyCourseComponent implements OnInit {

  location: Location;
  constructor(
    private routeInfo: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.location = location;
  }

  navigatTo(url: string) {
    this.router.navigateByUrl(url)
  }

}
