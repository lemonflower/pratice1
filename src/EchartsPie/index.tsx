/* eslint-disable @typescript-eslint/ban-types */
import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
interface EchartsDemoData {
    echartsDemoData: Array<any>;
    operation?: Function;
}
/*
*useRef< HTMLDivElement | null>(null) 使用后，chartDom.current提示Argument of type 'HTMLDivElement | null' is not assignable to parameter of type 'HTMLElement'.
  Type 'null' is not assignable to type 'HTMLElement'，
  解决方案： 
  1.Typescript 也有一个非空断言，当通过在语句末尾添加运算符来确定该值永远不会为空时（即自己确定是不会为空的）
  即改为chartDom.current!解决标红；
  2.as断言为htmlelement;
  3.chartDom:any;
*/
export default function EchartsPie({ echartsDemoData, operation }: EchartsDemoData) {
    const chartPie = useRef<HTMLDivElement>(null);//创建ref
    //初始化
    const initChartDom = () => {
        const myChart = echarts.init(chartPie.current!);// 基于dom初始化echarts实例
        const options = setChartDomOption(echartsDemoData);//获取图表配置项
        myChart.setOption(options);//使用指定配置和数据显示图表
        //绑定点击操作
        myChart.on('click', function (params: any) {
            if (operation) {
                operation(params);
            }
        });
    }
    //设置图表配置和数据
    const setChartDomOption = (data: any) => {
        return {
            title: {
                text: '饼图', //图表标题
                textStyle: {
                    color: '#ffffff' // 主标题文字颜色
                }, //标题文本样式
                subtext: '示例1', //副标题
                subtextStyle: {
                    color: '#aaa'          // 副标题文字颜色
                },
                left: 'center' // 主标题文字对齐方式，可选 left,center,right
                // x:'center',//主标题文字水平安放位置，默认为左对齐，可选为： 'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
                // y:'top',//主标题文字垂直安放位置，默认全图顶端，可选为：'top' ¦ 'bottom' ¦ 'center'¦ {number}（y坐标，单位px）
                // borderColor: '#ccc',       // 标题边框颜色
                // borderWidth: 0,            // 标题边框线宽，单位px，默认为0（无边框）
                // padding: 5,                // 标题内边距，单位px，默认各方向内边距为5，
                //                            // 接受数组分别设定上右下左边距，同css
                // itemGap: 10,               // 主副标题纵向间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
                // itemWidth: 20,             // 图例图形宽度
                // itemHeight: 14,            // 图例图形高度
            },
             backgroundColor: '#2c343c', //背景色
            tooltip: {
                trigger: 'item',           // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
                // showDelay: 20,             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
                // hideDelay: 100,            // 隐藏延迟，单位ms
                // transitionDuration: 0.4,  // 动画变换时间，单位s
                // backgroundColor: 'rgba(0,0,0,0.7)',     // 提示背景颜色，默认为透明度为0.7的黑色
                // borderColor: '#333',       // 提示边框颜色
                // borderRadius: 4,           // 提示边框圆角，单位px，默认为4
                // borderWidth: 0,            // 提示边框线宽，单位px，默认为0（无边框）
                // padding: 5,                // 提示内边距，单位px，默认各方向内边距为5， 接受数组分别设定上右下左边距，同css
                // axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                //     type: 'line',         // 默认为直线，可选为：'line' | 'shadow'
                //     lineStyle: {          // 直线指示器样式设置
                //         color: '#48b',
                //         width: 2,
                //         type: 'solid'
                //     },
                //     shadowStyle: {                       // 阴影指示器样式设置
                //         width: 'auto',                   // 阴影大小
                //         color: 'rgba(150,150,150,0.3)'  // 阴影颜色
                //     }
                // },
                // textStyle: {
                //     color: '#fff'
                // }
            },
            legend: {
                orient: 'vertical', // 布局方式，默认为水平布局，可选为：'horizontal' ¦ 'vertical'
                left: 'left', //                
                // x: 'center',// 水平安放位置，默认为全图居中，可选为：'center' ¦ 'left' ¦ 'right'¦ {number}（x坐标，单位px）
                // y: 'top',// 垂直安放位置，默认为全图顶端，可选为： 'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
                // backgroundColor: 'rgba(0,0,0,0)',
                // borderColor: '#ccc',       // 图例边框颜色
                // borderWidth: 0,            // 图例边框线宽，单位px，默认为0（无边框）
                // padding: 5,                // 图例内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距，同css
                // itemGap: 10,               // 各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
                // itemWidth: 20,             // 图例图形宽度
                // itemHeight: 14,            // 图例图形高度
                textStyle: {
                color: 'white',          // 图例文字颜色
                }
            },
            series: [
                {
                    name: 'Access From', //访问来源
                    type: 'pie', //饼图
                    radius: '50%',
                    data: data, // 数据
                    //鼠标移入动态的时候显示的默认样式
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
    }
    useEffect(() => {
        initChartDom();

    }, [echartsDemoData])
    return (
        <div>
            <div
                ref={chartPie}
                style={{ width: "500px", height: "400px" }}>
            </div>
        </div>
    )
}
