import React from "react";

import * as echarts from "echarts";
import EchartsPie from "../EchartsPie";
import Histogram from "../Histogram";
import LineChart from "../LineChart";
import ScatterChart from "../ScatterChart";
import './style.scss';
export default function Home() {
    const echartsPie = [
        { value: 1048, name: "a" },
        { value: 735, name: "b" },
        { value: 580, name: "c" },
        { value: 484, name: "e" },
        { value: 300, name: "f" },

    ]
    const histogramData = [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1],
    ];
    // 根据这个数据x轴默认分割十段了
    const lineChart = {
        x: [
            '9月15日',
            '9月16日',
            '9月17日',
            '9月18日',
            '9月19日',
            '9月20日',
            '9月21日',
            '9月22日',
            '9月23日',
            '9月24日',
            '9月25日',
            '9月26日',
        ],
        y_green: [103, 98, 120, 65, 63, 130, 125, 75, 130, 125, 75, 115],
        y_red: [210, 190, 190, 160, 170, 210, 207, 176, 176, 210, 170, 180],
        y_blue: [315, 316, 315, 315, 317, 317, 316, 316, 315, 315, 315, 315],
    };
    const scatterChart={x: [
        '9月15日',
        '9月16日',
        '9月17日',
        '9月18日',
        '9月19日',
        '9月20日',
        '9月21日',
        '9月22日',
        '9月23日',
        '9月24日',
        '9月25日',
        '9月26日',
    ],
    y_green: [103, 98, 120, 65, 63, 130, 125, 75, 130, 125, 75, 115],
    y_red: [210, 190, 190, 160, 170, 210, 207, 176, 176, 210, 170, 180],
    y_blue: [315, 316, 315, 315, 317, 317, 316, 316, 315, 315, 315, 315],
};
if (process.env.NODE_ENV === 'production') {
    console.log('运行在生产环境');
  } else {
    console.log('运行在开发环境');
  }
    return (
        <div className="charts">
            <div className="chart"> <EchartsPie echartsDemoData={echartsPie} /></div>
            <div className="chart"> <Histogram echartsDemoData={histogramData} /></div>
            <div className="chart"> <LineChart echartsDemoData={lineChart} /></div>
            <div className="chart"> <ScatterChart echartsDemoData={scatterChart} /></div>
        </div>
    )
}