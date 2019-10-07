import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-class-management',
  templateUrl: './class-management.component.html',
  styleUrls: ['./class-management.component.less']
})
export class ClassManagementComponent implements OnInit {

  location: Location;


  classroomId: string;

  classroom: any;

  constructor(
    private routeInfo: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.location = location;
    this.classroomId = this.routeInfo.snapshot.params['id'];
  }

  navigatTo(url: string) {
    this.router.navigateByUrl(url)
  }

}
