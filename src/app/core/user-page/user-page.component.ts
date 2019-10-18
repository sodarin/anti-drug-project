import {Component, OnInit,NgModule} from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.less']
})
export class UserPageComponent implements OnInit {
  userID:number;
  type:string;
  courses = [{
    id:0,
    title: 'Course 1',
    student_num:8,
    comment:1,
    price:'免费',
    status:'已完结',
    isshow:true
  },
    {
      id:1,
      title: 'Course 2',
      student_num:2,
      comment:3,
      price:'收费',
      status:'更新中',
      isshow:true
    },
    {id:2,
      title: 'Course 3',
      student_num:4,
      comment:2,
      price:'免费',
      status:'已完结',
      isshow:true
    },
    {id:3,
      title: 'Course 4',
      student_num:2,
      comment:0,
      price:'免费',
      status:'更新中',
      isshow:true
    },
    {id:4,
      title: 'Course 5',
      student_num:1,
      comment:10,
      price:'收费',
      status:'更新中',
      isshow:true
    },
    {id:5,
      title: 'Course 6',
      student_num:9,
      comment:1,
      price:'免费',
      status:'更新中',
      isshow:true
    }
  ]
  stars = [{
    id:1,
    title: 'Course 2',
    student_num:2,
    comment:3,
    price:'收费',
    status:'更新中',
    isshow:true
  },
  {id:2,
    title: 'Course 3',
    student_num:4,
    comment:2,
    price:'免费',
    status:'已完结',
    isshow:true
  },
  {id:3,
    title: 'Course 4',
    student_num:2,
    comment:0,
    price:'免费',
    status:'更新中',
    isshow:true
  }]
  classes = [{
    id:0,
    title: 'Class 1',
    isshow:true
  },
    {
      id:1,
      title: 'Class 2',
      isshow:true
    },
    {id:2,
      title: 'Class 3',
      isshow:true
    },
    {id:3,
      title: 'Class 4',
      isshow:true
    }]
  groups = [{
      id:0,
      title: 'Group 1',
      isshow:true
    },
      {
        id:1,
        title: 'Group 2',
        isshow:true
      }]




  constructor(
    private route: Router,
    private actrouter:ActivatedRoute,
    
    ) {

  }

  ngOnInit() {
    this.actrouter.paramMap.subscribe(params => {
      this.userID = +params.get('id');
    });

  }

  navigate(url: string) {
    this.route.navigateByUrl(url);
  }

  getType(type:string){
    if(type=='user'){
      this.type='user';
    }
    if(type=='teacher'){
      this.type='teacher';
    }
  }

}
