import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {GroupmainlistService} from '../../../service/groupmainlist/groupmainlist.service';
import {NzNotificationService} from 'ng-zorro-antd';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-groupmainsearch',
  templateUrl: './groupmainsearch.component.html',
  styleUrls: ['./groupmainsearch.component.less']
})
export class GroupmainsearchComponent implements OnInit, OnDestroy {
  searchValue: string = '';
  searchGroupList:[];
  routerChange: Subscription;
  constructor(private routeInfo: ActivatedRoute,
              private groupmainlistService$:GroupmainlistService,
              private _notification: NzNotificationService,
              public router:Router,
              ) { }

  ngOnInit() {
    this.searchValue = this.routeInfo.snapshot.queryParams['search'];
    this.searchList();
    this.listenRouterChange()
  }
  navigateByUrl(url: string) {
    this.router.navigateByUrl(url)
  }

  //搜索小组
  searchList() {
    this.groupmainlistService$.searchList(this.searchValue).subscribe(result => {
        this.searchGroupList=result
    },error1 => {
      this._notification.create(
        'error',
        '搜索小组失败',
        `${error1.error}`)
      }
    )
  }

  listenRouterChange(){
    this.routerChange = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.searchValue = this.routeInfo.snapshot.queryParams['search'];
        this.searchList()
    }
    })
  }

  ngOnDestroy() {
    this.routerChange.unsubscribe()
  }

}
