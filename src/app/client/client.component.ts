import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.less']
})
export class ClientComponent implements OnInit {

  login: boolean = false;

  isCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  siderControl(data: any) {
    this.isCollapsed = data;
  }

}
