import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'; // 引入DomSanitizer服务
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import videojs from 'video.js'
import { dispatchMouseEvent } from 'ng-zorro-antd';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.less']
})
export class VideoPlayerComponent implements OnInit ,OnDestroy {
  @Input()
  userID : string;  //必须拿到

  url:string='http://video.chinanews.com/tvmining//News/MP4ZXW/CCYVNEWS/2018/01/09/Ls3weyy_1515508088761_yB1n19f_3314.mp4';
 // url:string='http://202.199.13.65:9005/v.f30.mp4'
  result: any;   
  event : any; // 学习任务状态
  lastPosition: number = 0 ;  //上次时间
  lengthOfVideo:number = 0 ; // 视频长度

 // @Input()
  courseTaskId : any ;  // 任务Id需要由父组件注入
  allogId :any; //学习任务ID

  options = {
    bigPlayButton: true,
    textTrackDisplay: true,
    posterImage: true,
    errorDisplay: false,
    controlBar: false,
    playbackRates: [0.5, 1, 1.5, 2],
    ControlBar: {
      customControlSpacer: true,
      // volumePanel: 
    },
    fluid : true   // 添加自适应
  };

  //在线视频源
  //http://video.chinanews.com/tvmining//News/MP4ZXW/CCYVNEWS/2018/01/09/Ls3weyy_1515508088761_yB1n19f_3314.mp4

  player:videojs = {
    currentTime() {}
  };


 //,public videoService:VideoService
  constructor(private sanitizer: DomSanitizer,public http: HttpClient) {
  }

  ngOnInit() {
    var that=this;
    // 页面刷新监听
    window.onbeforeunload = ()=>{
      this.endPlay();
   };
   let userId :String ='5';//测试用
   this.courseTaskId = 1 ;  //测试用
   this.getVideoLearnLog(userId,this.courseTaskId);  //初始化
  
  }

  ngAfterViewInit() { 
    this.onload() ;
  }

  ngOnDestroy() {
    this.endPlay();
    this.player.dispose();
  }

  onload() {
    var that = this;
    that.player = videojs('my-video', this.options, function onPlayerReady() {  // 播放器内部监控
      this.play();
      this.currentTime(that.lastPosition);
      this.on('ended', function () {
        videojs.log('播放完毕');//正常播放完毕
        that.changeLearnStatus(that.allogId, 'finish' , parseInt(that.player.duration())); // 如果学习完了，学习位置设置为0还总长度
      });
    });
  }


  //获取视频长度
  // getLengthOfVideo = function () :number{
  //   if(null== this.lengthOfVideo || 0  == this.lengthOfVideo){
  //     return this.lengthOfVideo = this.player.duration(); // 设置后返回
  //   }
  //   return this.lengthOfVideo;
  // }

  // 获得该学习记录的状态和上次的位置
  getVideoLearnLog(userId:any,coursetaskid:any){
    let params=new HttpParams().set('userId',userId).set('coursetaskid',coursetaskid); 
    this.http.get('/course/video/getVideoLearnLog', {params: params}).subscribe((response)=>{
    this.result = response;
    this.event =  this.result.data.event; // 直接使用response会报错
    this.lastPosition = this.result.data.learnedtime;
    this.allogId = this.result.data.id; 
    this.startPlay();
    })
    return ;
    }

  // 改变该学习记录的状态和位置
  changeLearnStatus(allogId:any,event:any,learnedtime:any){
    let params=new HttpParams().set('allogId',allogId).set('event',event).set('learnedtime',learnedtime); 
    return this.http.get('/course/video/changeLearnStatus',  {params: params}).subscribe((response)=>{
    })
  }

    // 跳转到指定位置
    onJump = function(position:number): void {
      this.player.currentTime(position);
    };

    onObtain = function () : void{
      // 获取当前播放位置，并记录
      this.lastPosition = this.player.currentTime();
      
      // 将断点位置存入数据库
    };


  startPlay = function () : void{
    // 如果状态(event)为 finish，则设置当前位置为 0
    if('finish' == this.event){
      this.lastPosition = 0;  // 只要学完了，下次进来就不再会进行跳转
    }// 如果状态(event)为 doing，则设置当前位置为  learnedTime的值,即默认
    this.onJump(this.lastPosition);
  };


  endPlay = function () : void {
    // 判断状态，如果为 finish 则return (表示已学习完成，重复播放,不需要请求后端)
    // 如果状态为 doing, 判断当前时间是否和总时长一致，调用changeLearnStatus，若一致，则改变 event，若不一致则改变 learnedtime
    this.lengthOfVideo=parseInt(this.player.duration());//可以放在初始化时就设置视频总时间
    if('doing' == this.event) {  // 说明事件
      if(this.lengthOfVideo == this.lastPosition){
        this.changeLearnStatus(this.allogId, 'finish' , this.lengthOfVideo); //如果学习完了，学习位置设置为0还总长度
      } else if ( this.lengthOfVideo != this.lastPosition){
        this.changeLearnStatus(this.allogId, 'doing', parseInt(this.player.currentTime())); 
      }
    }
  };

  }
