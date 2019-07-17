import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-info-edit-modal',
  templateUrl: './user-info-edit-modal.component.html',
  styleUrls: ['./user-info-edit-modal.component.less']
})
export class UserInfoEditModalComponent implements OnInit {

  @Input()
  userId: string;

  constructor() { }

  ngOnInit() {
  }

}
