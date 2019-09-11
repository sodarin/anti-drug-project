import { Component, OnInit, EventEmitter, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-courselist-sort-modal',
  templateUrl: './courselist-sort-modal.component.html',
  styleUrls: ['./courselist-sort-modal.component.less'],
  inputs: ['order'],
  outputs: ['onSelected']
})
export class CourselistSortModalComponent implements OnInit {
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

  setOrderKey(): void {
    switch (this.order) {
      case "New":
        this.newKey = true;
        break;
      case "Hot":
        this.hotKey = true;
        break;
      case "Rec":
        this.recKey = true;
        break;
      default:
        this.newKey = true;
        break;
    }
  }

}
