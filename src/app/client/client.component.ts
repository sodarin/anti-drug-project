import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.less']
})
export class ClientComponent implements OnInit {

  login: boolean = false;

  isCollapsed: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  siderControl(data: any) {
    this.isCollapsed = data;
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
