import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management-table',
  templateUrl: './user-management-table.component.html',
  styleUrls: ['./user-management-table.component.less']
})
export class UserManagementTableComponent implements OnInit {

  selectedTimeFilterValue: string;
  dateRange: string;
  selectedRoleFilterValue: string = 'all';
  selectedNameContaining: string = 'username';
  inputValue: string;

  dataList = [];
  constructor() { }

  ngOnInit() {
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

}
