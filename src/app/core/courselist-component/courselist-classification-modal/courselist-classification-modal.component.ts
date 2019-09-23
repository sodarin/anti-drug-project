import { Component, OnInit, EventEmitter } from '@angular/core';

enum Firstlayer { "all", "school-online", "teacher-training", "lectures", "tutorials" }
enum Thirdlayer { "all","class", "question-bank", "preventive-education", "internetplus" }
enum Sccondlayer_grade { "all", "primary", "middle", "heigh", "vocational" }
enum Sccondlayer_operator { "all", "administer", "teacher", "student" }

@Component({
  selector: 'app-courselist-classification-modal',
  templateUrl: './courselist-classification-modal.component.html',
  styleUrls: ['./courselist-classification-modal.component.less'],
  inputs: ["firsttag", "secondtag", "thirdtag", "firstlayer", "_secondlayer", "thirdlayer"],
  outputs: ["firstTagClick", "thirdTagClick","secondTagClick"]
})
export class CourselistClassificationModalComponent implements OnInit {
  firstlayer = [];
  _secondlayer = [];
  secondlayer = [];
  thirdlayer = [];


  secondpointer = 0;
  sekey = false;



//Use to control the activation state of the tag
  firstlayerkey = [];
  secondlayerkey = [];
  thirdlayerkey = [];

//current tag
  firsttag: string;
  secondtag: string;
  thirdtag: string;

//click event
  firstTagClick: EventEmitter<string>;
  thirdTagClick: EventEmitter<string>;
  secondTagClick:EventEmitter<string>;

//bread crumb
  breadcrumb = ["all","all","all"];
  breadlist = [];

  constructor() {
    for (var temp in this.firstlayer) {
      this.firstlayerkey.push(false);
    }
    for (var temp in this.thirdlayer) {
      this.thirdlayerkey.push(false);
    }
    this.secondpointer = Firstlayer[this.firsttag];
    this.secondlayer = this._secondlayer[this.secondpointer];
    for (var temp in this.secondlayer) {
      this.secondlayerkey.push(false);
    }
    
    this.firstTagClick = new EventEmitter();
    this.thirdTagClick = new EventEmitter();
    this.secondTagClick = new EventEmitter();
  }

  ngOnInit() {
    if (this.firsttag != "none") {
      this.firstlayerkey[Firstlayer[this.firsttag]] = true;
    }
    if (this.thirdtag != "none") {
      this.thirdlayerkey[Thirdlayer[this.thirdtag]] = true;
    }
    if(this.secondlayer && this.secondlayer.length>0){
      if (this.secondtag != "none") {
        switch (this.secondpointer) {
          case 1:
            this.secondlayerkey[Sccondlayer_grade[this.secondtag]] = true;

            break;
          case 4:
            this.secondlayerkey[Sccondlayer_operator[this.secondtag]] = true;

            break;
        }  
      }
      this.sekey = true;
    }

    this.breadcrumb[0] = this.firsttag;
    this.breadcrumb[1] = this.secondtag;
    this.breadcrumb[2] = this.thirdtag;
    this.setBreadList();
  }

  ClickOne(val: number) {
    this.firstTagClick.emit(Firstlayer[val]);
    this.secondTagClick.emit("all");
    this.breadcrumb[0] = Firstlayer[val];
    this.breadcrumb[1] = "all"
    this.secondpointer = val;
    if (this._secondlayer[val].length > 0) {
      this.secondlayerkey = [];
      for (var temp in this.secondlayer) {
        this.secondlayerkey.push(false);
      }
      this.secondlayer = this._secondlayer[val];
      this.sekey = true;
    } else {
      this.sekey = false;
    }
    this.setBreadList();
  }

  ClickTwo(val: number) {
    switch (this.secondpointer) {
      case 1:
        this.secondTagClick.emit(Sccondlayer_grade[val]);
        this.breadcrumb[1] = Sccondlayer_grade[val];
        break;
      case 4:
        this.secondTagClick.emit(Sccondlayer_operator[val]);
        this.breadcrumb[1] = Sccondlayer_operator[val];
        break;
    }
    this.setBreadList();
  }

  ClickThree(val: number) {
    this.thirdTagClick.emit(Thirdlayer[val]);
    this.breadcrumb[2] = Thirdlayer[val];
    this.setBreadList();
  }



  setBreadList():void{
    this.breadlist=[];
    if(this.breadcrumb[0]!="all"){
      this.breadlist.push(this.firstlayer[Firstlayer[this.breadcrumb[0]]]);
      if(this.breadcrumb[1]!="all"){
        switch (this.secondpointer) {
          case 1:
            this.breadlist.push(this.secondlayer[Sccondlayer_grade[this.breadcrumb[1]]]);
            break;
          case 4:
            this.breadlist.push(this.secondlayer[Sccondlayer_operator[this.breadcrumb[1]]]);
            break;
        }

      }
    }
    if(this.breadcrumb[2]!="all"){
      this.breadlist.push(this.thirdlayer[Thirdlayer[this.breadcrumb[2]]]);
    }
  }

}
