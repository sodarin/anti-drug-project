import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.less']
})
export class VerificationComponent implements OnInit {

  cardFrontUrl: string = ""
  cardBackUrl: string = ""
  constructor() { }

  ngOnInit() {
  }

}
