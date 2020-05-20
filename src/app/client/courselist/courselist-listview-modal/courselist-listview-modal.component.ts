import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-courselist-listview-modal',
  templateUrl: './courselist-listview-modal.component.html',
  styleUrls: ['./courselist-listview-modal.component.less'],
  inputs:['courselist']
})
export class CourselistListviewModalComponent implements OnInit {
  courselist = [];

  constructor() { 
    // this.route.params.subscribe(params => { this.page = params['page'];this.RenderContent(); });
    // this.lastpage = this.page;
    // this.courseservice.getCourses(this.page.toString()).subscribe(coursesobj =>{
    //   this.courselist = coursesobj.courses;
    // });
  }

  ngOnInit() {
  }


}
