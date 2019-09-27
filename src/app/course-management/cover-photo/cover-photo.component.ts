import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover-photo',
  templateUrl: './cover-photo.component.html',
  styleUrls: ['./cover-photo.component.less']
})
export class CoverPhotoComponent implements OnInit {

  coverUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
