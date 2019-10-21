import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-mine-management',
  templateUrl: './mine-management.component.html',
  styleUrls: ['./mine-management.component.less']
})
export class MineManagementComponent implements OnInit {

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
