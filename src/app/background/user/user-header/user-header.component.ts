import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.less']
})
export class UserHeaderComponent implements OnInit {

  location: Location;

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    this.location = location;
  }

  navigate(url: string) {
    this.route.navigateByUrl(url);
  }

}
