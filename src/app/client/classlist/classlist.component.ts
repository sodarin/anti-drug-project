import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../Test/course.service';
import {ActivatedRoute, Router} from '@angular/router';

enum Order { Hot, New, Rec }

@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.less']
})


export class ClasslistComponent implements OnInit {

  firstlayer = ["全部", "小学年级", "初中年级", "高中年级", "高职年级"];
  _secondlayer = [
    [],
    [],
    [],
    [],
    []
  ];
  thirdlayer = [];

  order: string = Order[0];
  classOne:string = "all";
  classTwo:string = "all";
  classThree:string = "all";

  classLists = [];

  pageIndex: number = 1;
  pageSize: number = 20;
  totalPage: number;

  constructor(private courseservice: CourseService, private router: Router, private route: ActivatedRoute) {
    route.queryParams.subscribe(queryParams=>{
      this.pageIndex = queryParams.page||"1";
      this.order = queryParams.orderBy||"New";
      this.classOne = queryParams.classOne||"all";
      this.classTwo = queryParams.classTwo||"all";
      this.classThree = queryParams.classThree||"all";
    });

    this.totalPage = courseservice.getCoursesNum();
  }

  ngOnInit() {
    //服务器请求---待替换
    this.courseservice.getCourses(this.pageIndex,this.order,'').subscribe((res: any) => {
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
        page: this.pageIndex,
        orderBy: this.order,
        classOne:this.classOne,
        classTwo:this.classTwo,
        classThree:this.classThree
      }
    });

    //服务器请求---待替换
    this.courseservice.getCourses(this.pageIndex,this.order,'').subscribe((res: any) => {
      this.renderResulsts(res);
    });
  }

  renderResulsts(res: any): void {
    this.classLists = null;
    if (res) {
      this.classLists = res;
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
