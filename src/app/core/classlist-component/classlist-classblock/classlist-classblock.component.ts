import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-classlist-classblock',
  templateUrl: './classlist-classblock.component.html',
  styleUrls: ['./classlist-classblock.component.less']
})
export class ClasslistClassblockComponent implements OnInit {

  @Input()
  item: any;

  constructor() { }

  ngOnInit() {
  }

}
