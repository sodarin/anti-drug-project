import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-front-desk',
  templateUrl: './front-desk.component.html',
  styleUrls: ['./front-desk.component.less']
})
export class FrontDeskComponent implements OnInit {


  login: boolean = false;
  isCollapsed: boolean = true;


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


}
