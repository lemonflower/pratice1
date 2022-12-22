# 柱形图默认参数
bar: {
        barMinHeight: 0,          // 最小高度改为0
        // barWidth: null,        // 默认自适应
        barGap: '30%',            // 柱间距离，默认为柱形宽度的30%，可设固定值
        barCategoryGap : '20%',   // 类目间柱形距离，默认为类目间距的20%，可设固定值
        itemStyle: {
            normal: {
                // color: '各异',
                barBorderColor: '#fff',       // 柱条边线
                barBorderRadius: 0,           // 柱条边线圆角，单位px，默认为0
                barBorderWidth: 1,            // 柱条边线线宽，单位px，默认为1
                label: {
                    show: false
                    // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                }
            },
            emphasis: {
                // color: '各异',
                barBorderColor: 'rgba(0,0,0,0)',   // 柱条边线
                barBorderRadius: 0,                // 柱条边线圆角，单位px，默认为0
                barBorderWidth: 1,                 // 柱条边线线宽，单位px，默认为1
                label: {
                    show: false
                    // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                }
            }
        }
    },
# 数值型坐标轴默认参数
    valueAxis: {
        position: 'left',      // 位置
        nameLocation: 'end',   // 坐标轴名字位置，支持'start' | 'end'
        nameTextStyle: {},     // 坐标轴文字样式，默认取全局样式
        boundaryGap: [0, 0],   // 数值起始和结束两端空白策略
        splitNumber: 5,        // 分割段数，默认为5
        axisLine: {            // 坐标轴线
            show: true,        // 默认显示，属性show控制显示与否
            lineStyle: {       // 属性lineStyle控制线条样式
                color: '#48b',
                width: 2,
                type: 'solid'
            }
        },
        axisTick: {            // 坐标轴小标记
            show: false,       // 属性show控制显示与否，默认不显示
            inside : false,    // 控制小标记是否在grid里
            length :5,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
                color: '#333',
                width: 1
            }
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
            show: true,
            rotate: 0,
            margin: 8,
            // formatter: null,
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#333'
            }
        },
        splitLine: {           // 分隔线
            show: true,        // 默认显示，属性show控制显示与否
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: ['#ccc'],
                width: 1,
                type: 'solid'
            }
        },
        splitArea: {           // 分隔区域
            show: false,       // 默认不显示，属性show控制显示与否
            areaStyle: {       // 属性areaStyle（详见areaStyle）控制区域样式
                color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']
            }
        }
    },
 
    polar : {
        center : ['50%', '50%'],    // 默认全局居中
        radius : '75%',
        startAngle : 90,
        splitNumber : 5,
        name : {
            show: true,
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#333'
            }
        },
        axisLine: {            // 坐标轴线
            show: true,        // 默认显示，属性show控制显示与否
            lineStyle: {       // 属性lineStyle控制线条样式
                color: '#ccc',
                width: 1,
                type: 'solid'
            }
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
            show: false,
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#333'
            }
        },
        splitArea : {
            show : true,
            areaStyle : {
                color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']
            }
        },
        splitLine : {
            show : true,
            lineStyle : {
                width : 1,
                color : '#ccc'
            }
        }
    },

# 类目轴

categoryAxis: {
        position: 'bottom',    // 位置
        nameLocation: 'end',   // 坐标轴名字位置，支持'start' | 'end'
        boundaryGap: true,     // 类目起始和结束两端空白策略
        axisLine: {            // 坐标轴线
            show: true,        // 默认显示，属性show控制显示与否
            lineStyle: {       // 属性lineStyle控制线条样式
                color: '#48b',
                width: 2,
                type: 'solid'
            }
        },
        axisTick: {            // 坐标轴小标记
            show: true,       // 属性show控制显示与否，默认不显示
            interval: 'auto',
            // onGap: null,
            inside : false,    // 控制小标记是否在grid里
            length :5,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
                color: '#333',
                width: 1
            }
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
            show: true,
            interval: 'auto',
            rotate: 0,
            margin: 8,
            // formatter: null,
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#333'
            }
        },
        splitLine: {           // 分隔线
            show: true,        // 默认显示，属性show控制显示与否
            // onGap: null,
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: ['#ccc'],
                width: 1,
                type: 'solid'
            }
        },
        splitArea: {           // 分隔区域
            show: false,       // 默认不显示，属性show控制显示与否
            // onGap: null,
            areaStyle: {       // 属性areaStyle（详见areaStyle）控制区域样式
                color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']
            }
        }
    },

# 网格
grid: {
        x: 80,
        y: 60,
        x2: 80,
        y2: 60,
        // width: {totalWidth} - x - x2,
        // height: {totalHeight} - y - y2,
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 1,
        borderColor: '#ccc'
    },
# 区域缩放控制器
dataZoom: {
        orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
                                   // 'horizontal' ¦ 'vertical'
        // x: {number},            // 水平安放位置，默认为根据grid参数适配，可选为：
                                   // {number}（x坐标，单位px）
        // y: {number},            // 垂直安放位置，默认为根据grid参数适配，可选为：
                                   // {number}（y坐标，单位px）
        // width: {number},        // 指定宽度，横向布局时默认为根据grid参数适配
        // height: {number},       // 指定高度，纵向布局时默认为根据grid参数适配
        backgroundColor: 'rgba(0,0,0,0)',       // 背景颜色
        dataBackgroundColor: '#eee',            // 数据背景颜色
        fillerColor: 'rgba(144,197,237,0.2)',   // 填充颜色
        handleColor: 'rgba(70,130,180,0.8)'     // 手柄颜色
    },
# 值域
dataRange: {
        orient: 'vertical',        // 布局方式，默认为垂直布局，可选为：
                                   // 'horizontal' ¦ 'vertical'
        x: 'left',                 // 水平安放位置，默认为全图左对齐，可选为：
                                   // 'center' ¦ 'left' ¦ 'right'
                                   // ¦ {number}（x坐标，单位px）
        y: 'bottom',               // 垂直安放位置，默认为全图底部，可选为：
                                   // 'top' ¦ 'bottom' ¦ 'center'
                                   // ¦ {number}（y坐标，单位px）
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#ccc',       // 值域边框颜色
        borderWidth: 0,            // 值域边框线宽，单位px，默认为0（无边框）
        padding: 5,                // 值域内边距，单位px，默认各方向内边距为5，
                                   // 接受数组分别设定上右下左边距，同css
        itemGap: 10,               // 各个item之间的间隔，单位px，默认为10，
                                   // 横向布局时为水平间隔，纵向布局时为纵向间隔
        itemWidth: 20,             // 值域图形宽度，线性渐变水平布局宽度为该值 * 10
        itemHeight: 14,            // 值域图形高度，线性渐变垂直布局高度为该值 * 10
        splitNumber: 5,            // 分割段数，默认为5，为0时为线性渐变
        color:['#1e90ff','#f0ffff'],//颜色
        //text:['高','低'],         // 文本，默认为数值文本
        textStyle: {
            color: '#333'          // 值域文字颜色
        }
    },
 
    toolbox: {
        orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
                                   // 'horizontal' ¦ 'vertical'
        x: 'right',                // 水平安放位置，默认为全图右对齐，可选为：
                                   // 'center' ¦ 'left' ¦ 'right'
                                   // ¦ {number}（x坐标，单位px）
        y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
                                   // 'top' ¦ 'bottom' ¦ 'center'
                                   // ¦ {number}（y坐标，单位px）
        color : ['#1e90ff','#22bb22','#4b0082','#d2691e'],
        backgroundColor: 'rgba(0,0,0,0)', // 工具箱背景颜色
        borderColor: '#ccc',       // 工具箱边框颜色
        borderWidth: 0,            // 工具箱边框线宽，单位px，默认为0（无边框）
        padding: 5,                // 工具箱内边距，单位px，默认各方向内边距为5，
                                   // 接受数组分别设定上右下左边距，同css
        itemGap: 10,               // 各个item之间的间隔，单位px，默认为10，
                                   // 横向布局时为水平间隔，纵向布局时为纵向间隔
        itemSize: 16,              // 工具箱图形宽度
        featureImageIcon : {},     // 自定义图片icon
        featureTitle : {
            mark : '辅助线开关',
            markUndo : '删除辅助线',
            markClear : '清空辅助线',
            dataZoom : '区域缩放',
            dataZoomReset : '区域缩放后退',
            dataView : '数据视图',
            lineChart : '折线图切换',
            barChart : '柱形图切换',
            restore : '还原',
            saveAsImage : '保存为图片'
        }
    },
# 默认标志图形类型列表
1  symbolList : [
2       'circle', 'rectangle', 'triangle', 'diamond',
3       'emptyCircle', 'emptyRectangle', 'emptyTriangle', 'emptyDiamond'
4     ],
# 可计算特性配置，孤岛，提示颜色
calculable: false,              // 默认关闭可计算特性
    calculableColor: 'rgba(255,165,0,0.6)',       // 拖拽提示边框颜色
    calculableHolderColor: '#ccc', // 可计算占位提示颜色
    nameConnector: ' & ',
    valueConnector: ' : ',
    animation: true,
    animationThreshold: 2500,       // 动画元素阀值，产生的图形原素超过2500不出动画
    addDataAnimation: true,         // 动态数据接口是否开启动画效果
    animationDuration: 2000,
    animationEasing: 'ExponentialOut'    //BounceOut


    xAxis: {
show: true, // 是否显示 x 轴
position: 'top', // x 轴的位置（'top'，'bottom'） 
type: 'category', // 坐标轴类型
nameRotate: 10, // 坐标轴名字旋转，角度值
inverse: false, // 是否是反向坐标轴
boundaryGap: ['20%', '20%'], // 坐标轴两边留白策略
splitNumber: 5, // 坐标轴的分割段数（预估值）
axisLine: {
show: true, // 是否显示坐标轴轴线
symbol: ['none', 'arrow'], // 轴线两端箭头，两个值，none表示没有箭头，arrow表示有箭头
symbolSize: [10, 15], // 轴线两端箭头大小，数值一表示宽度，数值二表示高度
lineStyle: {
color: '#333', // 坐标轴线线的颜色
width: '5', // 坐标轴线线宽
type: 'solid', // 坐标轴线线的类型（'solid'，实线类型；'dashed'，虚线类型；'dotted',点状类型）
},
},
axisTick: {
show: true, // 是否显示坐标轴刻度
inside: true, // 坐标轴刻度是否朝内，默认朝外
length: 5, // 坐标轴刻度的长度
lineStyle: {
color: '#FFF', // 刻度线的颜色
width: 10, // 坐标轴刻度线宽
type: 'solid', // 坐标轴线线的类型（'solid'，实线类型；'dashed'，虚线类型；'dotted',点状类型）
},
},
axisLabel: {
show: true, // 是否显示刻度标签
interval: '0', // 坐标轴刻度标签的显示间隔，在类目轴中有效.0显示所有
inside: true, // 刻度标签是否朝内，默认朝外
rotate: 90, // 刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠；旋转的角度从 -90 度到 90 度
margin: 10, // 刻度标签与轴线之间的距离
// formatter 刻度标签的内容格式器，支持字符串模板和回调函数两种形式
color: '#FFF', // 刻度标签文字的颜色
fontStyle: 'normal', // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体） 
fontWeight: 'normal', // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
fontSize: '20', // 文字字体大小
align: 'left', // 文字水平对齐方式，默认自动（'left'，'center'，'right'）
verticalAlign: 'left', // 文字垂直对齐方式，默认自动（'top'，'middle'，'bottom'
lineHeight: '50', // 行高 ）
backgroundColor: 'red', // 文字块背景色，例：'#123234', 'red', 'rgba(0,23,11,0.3)'
},
splitLine: {
show: true, // 是否显示分隔线。默认数值轴显示，类目轴不显示
interval: '0', // 坐标轴刻度标签的显示间隔，在类目轴中有效.0显示所有
color: ['#ccc'], // 分隔线颜色，可以设置成单个颜色，也可以设置成颜色数组，分隔线会按数组中颜色的顺序依次循环设置颜色
width: 3, // 分隔线线宽
type: 'solid', // 坐标轴线线的类型（'solid'，实线类型；'dashed'，虚线类型；'dotted',点状类型）
},
splitArea: {
show: true, // 是否显示分隔区域
interval: '0', // 坐标轴刻度标签的显示间隔，在类目轴中有效.0显示所有
areaStyle: {
color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色
opacity: 1, // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形
},
},
data: {
textStyle: {
color: '#FFF', // 文字的颜色
fontStyle: 'normal', // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体） 
fontWeight: 'normal', // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
fontSize: '20', // 文字字体大小
align: 'left', // 文字水平对齐方式，默认自动（'left'，'center'，'right'）
verticalAlign: 'left', // 文字垂直对齐方式，默认自动（'top'，'middle'，'bottom'
lineHeight: '50', // 行高 ）
backgroundColor: 'red', // 文字块背景色，例：'#123234', 'red', 'rgba(0,23,11,0.3)'
},
},
}

# 数据格式
1.一个x值对应多个柱体，如x轴点Matcha Latte对应43.3, 85.8, 93.7三条柱体，分别代表'2015', '2016', '2017'。
 data:
 [
  ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1],
 ];
 2.一个x轴点对应一个柱体，如Mon对应23
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
   series: [
    {
      type: 'bar',
      data: [23, 24, 18, 25, 27, 28, 25]
    }
  ]

 data:
  [
        { value: 1048, name: "1" },
        { value: 735, name: "2" },
        { value: 580, name: "3" },
        { value: 484, name: "4" },
        { value: 300, name: "5" },

    ]

data:
[
            [' Hannah Krause ', 41, 'Engineer', 314, '2011-02-12'],
            ['Zhao Qian ', 20, 'Teacher', 351, '2011-03-01'],
            [' Jasmin Krause ', 52, 'Musician', 287, '2011-02-14'],
            ['Li Lei', 37, 'Teacher', 219, '2011-02-18'],
            [' Karle Neumann ', 25, 'Engineer', 253, '2011-04-02'],
            [' Adrian Groß', 19, 'Teacher', null, '2011-01-16'],
            ['Mia Neumann', 71, 'Engineer', 165, '2011-03-19'],
            [' Böhm Fuchs', 36, 'Musician', 318, '2011-02-24'],
            ['Han Meimei ', 67, 'Engineer', 366, '2011-03-12'],
]

//如果series只写一个bar，则name是x轴，age 是柱形图参数，如果写两个bar，则profession是第二个柱形图参数
 dataset: [{
                dimensions: ['name', 'age', 'profession', 'score', 'date'],
                source: [
                    [' Hannah Krause ', 41, 'Engineer', 314, '2011-02-12'],
                    ['Zhao Qian ', 20, 'Teacher', 351, '2011-03-01'],
                    [' Jasmin Krause ', 52, 'Musician', 287, '2011-02-14'],
                    ['Li Lei', 37, 'Teacher', 219, '2011-02-18'],
                    [' Karle Neumann ', 25, 'Engineer', 253, '2011-04-02'],
                    [' Adrian Groß', 19, 'Teacher', null, '2011-01-16'],
                    ['Mia Neumann', 71, 'Engineer', 165, '2011-03-19'],
                    [' Böhm Fuchs', 36, 'Musician', 318, '2011-02-24'],
                    ['Han Meimei ', 67, 'Engineer', 366, '2011-03-12'],
                ]
            }
        ],
