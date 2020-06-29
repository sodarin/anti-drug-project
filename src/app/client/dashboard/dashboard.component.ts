import { Component, OnInit } from '@angular/core';
import {UserManagementService} from '../../service/user-management/user-management.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  file: any;

  constructor(
    private userManagementService$: UserManagementService
  ) { }

  ngOnInit() {
  }

  upload() {
    this.userManagementService$.uploadFile(this.file).subscribe(result => {

    }, error1 => {

    })
  }

  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };

}
