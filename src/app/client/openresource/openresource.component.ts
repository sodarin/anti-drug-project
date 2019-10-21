import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd';
import {OpenresourceService} from '../../service/openresource/openresource.service';

@Component({
  selector: 'app-openresource',
  templateUrl: './openresource.component.html',
  styleUrls: ['./openresource.component.less']
})
export class OpenresourceComponent implements OnInit {


  displayData = [];

  constructor(private router: Router,
              private openService$: OpenresourceService,
              private _notification: NzNotificationService) {
  }

  ngOnInit() {this.searchData()
  }

  navigateByUrl(url)
  {
    this.router.navigateByUrl(url);
  }

  searchData()
  {
    this.openService$.getOpenCourseList().subscribe(result => {
      this.displayData = result
    }, error1 => {
      this._notification.create(
        'error',
        '发生错误！',
        `${error1.error}`
      )
    })
  }
}
