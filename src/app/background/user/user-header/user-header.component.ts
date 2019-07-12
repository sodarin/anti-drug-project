import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.less']
})
export class UserHeaderComponent implements OnInit {

  location: Location;

  constructor() { }

  ngOnInit() {
    this.location = location;
  }

}
