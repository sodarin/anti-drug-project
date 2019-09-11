import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';
import { CourseService } from '../../Test/course.service';

enum Order { Hot, New, Rec }

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.less'],
})
export class CourselistComponent implements OnInit {
  courseList = [];
  //Search params
  currentPage: number = 1;
  order: string = Order[0];
  classOne:string = "all";
  classTwo:string = "all";
  classThree:string = "all";
  //Component params
  totalPage: number = 1;
  pageSize: number = 20;

  constructor(private courseservice: CourseService, private router: Router, private route: ActivatedRoute) {
    route.queryParams.subscribe(queryParams=>{
      this.currentPage = queryParams.page||"1";
      this.order = queryParams.orderBy||"New";
      this.classOne = queryParams.classOne||"all";
      this.classTwo = queryParams.classTwo||"all";
      this.classThree = queryParams.classThree||"all";
    });

    this.totalPage = courseservice.getCoursesNum();
  }

  ngOnInit() {
    //服务器请求---待替换
    this.courseservice.getCourses(this.currentPage,this.order,'').subscribe((res: any) => {
      this.renderResulsts(res);
    });
  }

  onPageChange(event?: any){
    this.refreshPage();
    window.scrollTo(0, 0);
  }

  refreshPage(): void {
    this.router.navigate([], { 
      relativeTo: this.route,      
      queryParams: {
        page: this.currentPage,
        orderBy: this.order,
        classOne:this.classOne,
        classTwo:this.classTwo,
        classThree:this.classThree
      } 
    });

    //服务器请求---待替换
    this.courseservice.getCourses(this.currentPage,this.order,'').subscribe((res: any) => {
      this.renderResulsts(res);
    });
  }

  renderResulsts(res: any): void {
    this.courseList = null;
    if (res) {
      this.courseList = res;
    }
  }

  changeOrder(order: string): void {
    switch (order) {
      case Order[0]:
        this.order = Order[0];
        break;
      case Order[1]:
        this.order = Order[1];
        break;
      case Order[2]:
        this.order = Order[2];
        break;
      default:
        this.order = Order[0];
        break;
    }
    this.refreshPage();
  }

  setfirstTag(val:string):void{
    this.classOne = val;
    this.refreshPage();
  }
  setthirdTag(val:string):void{
    this.classThree = val;
    this.refreshPage();
  }
  setsecondTag(val:string):void{
    this.classTwo = val;
    this.refreshPage();
  }



}


