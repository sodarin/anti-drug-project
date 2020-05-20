import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseManagementUtilService {

  constructor() { }

  setCourseIdFrom(location: Location) {
    let pathname = location.pathname;
    let tmp = pathname.split('/');
    return tmp[3];
  }
}
