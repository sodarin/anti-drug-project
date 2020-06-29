import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tidings',
  templateUrl: './tidings.component.html',
  styleUrls: ['./tidings.component.less']
})
export class TidingsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
