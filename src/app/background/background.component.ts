import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.less']
})
export class BackgroundComponent implements OnInit {

  location: Location;

  isCollapsed: boolean = true;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.location = location;
  }

  navigate(url: string) {
    this.router.navigateByUrl(url)
  }
  backToHomePage() {
    this.router.navigateByUrl('/admin');
  }

}
