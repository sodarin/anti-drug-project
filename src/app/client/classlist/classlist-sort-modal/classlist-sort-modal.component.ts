import { Component, OnInit, EventEmitter, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-classlist-sort-modal',
  templateUrl: './classlist-sort-modal.component.html',
  styleUrls: ['./classlist-sort-modal.component.less'],
  inputs: ['order'],
  outputs: ['onSelected']
})
export class ClasslistSortModalComponent implements OnInit {
  order: string;
  newKey: boolean;
  hotKey: boolean;
  recKey: boolean;
  onSelected: EventEmitter<string>;
  constructor(private el: ElementRef, private rd: Renderer2) { 
    this.onSelected = new EventEmitter();
    this.newKey = false;
    this.hotKey = false;
    this.recKey = false;
  }

  ngOnInit() {
    this.setOrderKey()
  }

  setOrder(val: any): void {
    if (this.order != val) {
      this.onSelected.emit(val);
    }
  }

  //没啥意义？
  setOrderKey(): void {
    switch (this.order) {
      case "latest ":
        this.newKey = true;
        break;
      case "hit":
        this.hotKey = true;
        break;
      case "recommend":
        this.recKey = true;
        break;
      default:
        this.newKey = true;
        break;
    }
  }

}
