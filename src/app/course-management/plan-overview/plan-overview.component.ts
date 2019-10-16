import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-plan-overview',
  templateUrl: './plan-overview.component.html',
  styleUrls: ['./plan-overview.component.less']
})
export class PlanOverviewComponent implements OnInit {

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
      left: '3%',
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
        type: 'value'
      }
    ],
    series: [
      {
        name: '新增学员',
        type: 'bar',
        stack: '广告',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '免费试看数',
        type: 'bar',
        stack: '广告',//表示堆叠在一起的柱状图哦
        data: [120, 132, 101, 134, 90, 230, 210]
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
      left: '3%',
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
        type: 'value'
      }
    ],
    series: [
      {
        name: '完课人数',
        type: 'bar',
        stack: '广告',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '完课率',
        type: 'bar',
        stack: '广告',//表示堆叠在一起的柱状图哦
        data: [120, 132, 101, 134, 90, 230, 210]
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
