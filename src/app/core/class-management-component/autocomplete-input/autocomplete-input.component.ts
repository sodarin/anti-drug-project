import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-autocomplete-input',
  templateUrl: './autocomplete-input.component.html',
  styleUrls: ['./autocomplete-input.component.less']
})
export class AutocompleteInputComponent implements OnInit {

  @Input()
  searchType: string;

  @Output()
  outputEvent = new EventEmitter<string>();

  inputValue: string = '';
  options = [];

  constructor(

  ) { }

  ngOnInit() {

  }

  onInput(data: any) {
    // if (this.searchType == 'teacher') {
    //
    // } else if (this.searchType == 'student') {
    //
    // }
    if (this.inputValue.startsWith('a')) {
      this.options = ['admin', 'admin1', 'admin2']
    } else {
      this.options = []
    }
  }

  emitValue(data: any) {
    this.outputEvent.emit(data.nzValue)
  }

}
