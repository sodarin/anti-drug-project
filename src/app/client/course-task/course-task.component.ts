import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd';
import {MyteachingService} from '../../service/myteaching/myteaching.service';

@Component({
  selector: 'app-course-task',
  templateUrl: './course-task.component.html',
  styleUrls: ['./course-task.component.less']
})
export class CourseTaskComponent implements OnInit, OnDestroy {
  taskContentList: any;
  total: number;
  loading: boolean = false;
  pageIndex: number = 1;

  dataList = [];
  totalPage: number;
  courseId :string;
  userId :number = 1 ;
  taskId: string ;
  constructor(
    private router: Router,
    private routerInfo: ActivatedRoute,
    private _notification: NzNotificationService,
    private MyteachingService$: MyteachingService
  ) {

  }

  ngOnInit() {

    this.taskId = location.pathname.split('/')[5];
    this.courseId = location.pathname.split('/')[3];

    this.searchData();
  //  window.setTimeout(function() {

    //}, 1000 * 60)
  }

  ngOnDestroy(): void {

  }

  searchData(taskId: string = this.taskId) {
    this.taskContentList = [];
    this.loading = true;
    this.MyteachingService$.getCourseTask(this.userId,taskId).subscribe(result=>{
        this.loading = false;
        this.dataList = result.data;
        this.taskContentList = this.dataList;
      },
      error1 => {
        this.loading = false;
        this._notification.create(
          'error',
          '发生错误',
          `${error1.error}`
        )

      })
  }
  navigatTo(url: string) {
    this.router.navigateByUrl(url)
  }

  getNewTask(id: string) {
    this.router.navigateByUrl('client/course/'+ this.courseId+'/task/'+ id +'/show');
    this.searchData(id);
  }
}
