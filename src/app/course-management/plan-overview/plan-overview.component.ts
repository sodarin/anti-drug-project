import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-plan-overview',
  templateUrl: './plan-overview.component.html',
  styleUrls: ['./plan-overview.component.less']
})
export class PlanOverviewComponent implements OnInit {
  colors = ['#5793f3', '#d14a61', '#675bba'];
  dateRange: any[] = [];
  trendOptions = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['新增学员', '免费试看数']
    },
    grid: {
      show: true,
      left: '0%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['2019-10-10', '2019-10-11', '2019-10-12', '2019-10-13', '2019-10-14', '2019-10-15', '2019-10-16']
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '人数',
        min: 0,
        max: 5,
        position: 'left',
        axisLine: {
          lineStyle: {
            color: '#5793f3'
          }
        }
      }
    ],
    series: [
      {
        name: '新增学员',
        color: ['#fd7c81'],
        type: 'line',
        stack: '广告',
        data: [0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: '免费试看数',
        color: ['#6994fd'],
        type: 'line',
        stack: '广告',//表示堆叠在一起的柱状图哦
        data: [0, 0, 0, 0, 0, 0, 0]
      },
    ]
  };

  finishedOptions = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['完课人数', '完课率']
    },
    grid: {
      show: true,
      left: '0%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['2019-10-10', '2019-10-11', '2019-10-12', '2019-10-13', '2019-10-14', '2019-10-15', '2019-10-16']
      }
    ],
    yAxis: [{
      type: 'value',
      name: '人数',
      min: 0,
      max: 5,
      position: 'left',
      axisLine: {
        lineStyle: {
          color: '#5793f3'
        }
      },
      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: '完课率',
      min: 0,
      max: 100,
      position: 'right',
      axisLine: {
        lineStyle: {
          color: '#d14a61'
        }
      },
      axisLabel: {
        formatter: '{value} %'
      }
    }],
    series: [
      {
        name: '完课人数',
        color: ["#92d178"],
        type: 'line',
        stack: '广告',
        data: [0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: '完课率',
        color: ['#fecf7d'],
        type: 'line',
        data: [0, 0, 0, 0, 0, 0, 0]
      },
    ]
  };
  constructor() { }

  ngOnInit() {


  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
