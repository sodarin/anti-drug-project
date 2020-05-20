import {Component, OnInit,} from '@angular/core';
import {Route, Router} from '@angular/router';


@Component({
  selector: 'app-news-sort-modal',
  templateUrl: './news-sort-modal.component.html',
  styleUrls: ['./news-sort-modal.component.less'],

})
export class NewsSortModalComponent implements OnInit {

  location: Location = location;


  constructor(
    private route: Router,

  ) {
  }


  ngOnInit() {

}

  navigateTo(url:string) {
    this.route.navigateByUrl(url)
  }


}
