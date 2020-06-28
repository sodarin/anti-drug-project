import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-front-avatar',
  templateUrl: './front-avatar.component.html',
  styleUrls: ['./front-avatar.component.less']
})
export class FrontAvatarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() logoutEvent = new EventEmitter();
  logout() {
    this.logoutEvent.emit();
  }

  @Output() navigateEvent = new EventEmitter();
  navigateByUrl(url: string) {
    this.navigateEvent.emit(url);
  }

}
