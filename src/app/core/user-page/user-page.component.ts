import {Component, OnInit,NgModule} from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.less']
})
export class UserPageComponent implements OnInit {

  type:string;


  constructor(private route: Router) {

  }

  ngOnInit() {
  }

  navigate(url: string) {
    this.route.navigateByUrl(url);
  }

  getType(type:string){
    if(type=='user'){
      this.type='user';
    }
    if(type=='teacher'){
      this.type='teacher';
    }
  }

}
