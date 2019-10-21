import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paper-score-statistics',
  templateUrl: './paper-score-statistics.component.html',
  styleUrls: ['./paper-score-statistics.component.less']
})
export class PaperScoreStatisticsComponent implements OnInit {

  @Input()
  paperId: string;

  echartOption: any;

  constructor() { }

  ngOnInit() {
    this.echartOption = {
      color: ['#36a9ce', '#d0e17d'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '10%',
        top:'10%',
        containLabel: true
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          axisTick: {show: false},
          data: ['0-20', '20-40', '40-60', '60-80', '80-100']
        }
      ],
      yAxis: [
        {
          type: 'value',
          data: [0, 5, 10, 15, 20, 25]
        }
      ],
      series: [
        {
          name: '首次成绩得分人数',
          type: 'bar',
          barGap: 0,
          data: [0, 0, 0, 3, 22]
        },
        {
          name: '最优成绩得分人数',
          type: 'bar',
          data: [0, 0, 0, 3, 22]
        }
      ]
    }
  }

}
