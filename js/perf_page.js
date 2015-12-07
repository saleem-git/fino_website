
            AmCharts.makeChart("chartdiv1",
                {
                    "type": "serial",
                    "categoryField": "category",
                    "colors": [
                        "blue",
                        "#ff632f",
                        "#ff9681",
                        "#0D8ECF",
                        "#2A0CD0"
                    ],
                    "startDuration": 1,
                    "categoryAxis": {
                        "gridPosition": "start"
                    },
                    "trendLines": [],
                    "graphs": [
                        {
                            "balloonText": "[[title]] of [[category]]:[[value]]",
                            "fillAlphas": 0.7,
                            "id": "AmGraph-1",
                            "lineAlpha": 0,
                            "title": "graph 1",
                            "valueField": "column-1"
                        },
                        {
                            "balloonText": "[[title]] of [[category]]:[[value]]",
                            "fillAlphas": 0.7,
                            "id": "AmGraph-2",
                            "lineAlpha": 0,
                            "title": "graph 2",
                            "valueField": "column-2"
                        },
                        {
                            "balloonText": "[[title]] of [[category]]:[[value]]",
                            "fillAlphas": 0.7,
                            "id": "AmGraph-3",
                            "lineAlpha": 0,
                            "title": "graph 3",
                            "valueField": "column-3"
                        }
                    ],
                    "guides": [],
                    "valueAxes": [
                        {
                            "id": "ValueAxis-1",
                            "stackType": "regular",
                            "title": "Axis title"
                        }
                    ],
                    "allLabels": [],
                    "balloon": {},
                    "legend": {},

                    "dataProvider": [
                        {
                            "category": "category 1",
                            "column-1": 8,
                            "column-2": 9,
                            "column-3": 5
                        },
                        {
                            "category": "category 2",
                            "column-1": 6,
                            "column-2": 5,
                            "column-3": 9
                        },
                        {
                            "category": "category 3",
                            "column-1": 2,
                            "column-2": 6,
                            "column-3": 9
                        },
                        {
                            "category": "category 4",
                            "column-1": 1,
                            "column-2": 2,
                            "column-3": 3
                        },
                        {
                            "category": "category 5",
                            "column-1": 2,
                            "column-2": 1,
                            "column-3": 3
                        },
                        {
                            "category": "category 6",
                            "column-1": 3,
                            "column-2": 9,
                            "column-3": 2
                        },
                        {
                            "category": "category 7",
                            "column-1": 6,
                            "column-2": 2,
                            "column-3": 8
                        }
                    ]
                }
            );
  
    
            AmCharts.makeChart("chartdiv2",
                {
                    "type": "pie",
                    "angle": 12,
                    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                    "depth3D": 15,
                    "titleField": "category",
                    "valueField": "column-1",
                    "allLabels": [],
                    "balloon": {},
                    "legend": {
                        "align": "center",
                        "markerType": "circle"
                    },
                    "titles": [],
                    "dataProvider": [
                        {
                            "category": "category 1",
                            "column-1": 8
                        },
                        {
                            "category": "category 2",
                            "column-1": 13
                        },
                        {
                            "category": "category 3",
                            "column-1": 12
                        }
                    ]
                }
            );
      
            AmCharts.makeChart("chartdiv3",
                {
                    "type": "pie",
                    "angle": 12,
                    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                    "depth3D": 15,
                    "titleField": "category",
                    "valueField": "column-1",
                    "allLabels": [],
                    "balloon": {},
                    "legend": {
                        "align": "center",
                        "markerType": "circle"
                    },
                    "titles": [],
                    "dataProvider": [
                        {
                            "category": "category 1",
                            "column-1": 18
                        },
                        {
                            "category": "category 2",
                            "column-1": 13
                        },
                        {
                            "category": "category 3",
                            "column-1": 20
                        }
                    ]
                }
            );
      

        var chart;

var chartData = [
    // Data set #1
    [
        { country: "Czech Republic", litres: 156.90},
        { country: "Ireland", litres: 131.10},
        { country: "Germany", litres: 115.80},
        { country: "Australia", litres: 109.90},
        { country: "Austria", litres: 108.30},
        { country: "UK", litres: 99.00}
    ],
    // Data set #2
    [
        { country: "Czech Republic", litres: 16.90},
        { country: "Ireland", litres: 111.10},
        { country: "Germany", litres: 153.80},
        { country: "Australia", litres: 199.90},
        { country: "Austria", litres: 108.30},
        { country: "UK", litres: 99.00}
    ],
    // Data set #3
    [
        { country: "Czech Republic", litres: 11.20},
        { country: "Ireland", litres: 41.20},
        { country: "Germany", litres: 91.80},
        { country: "Australia", litres: 61.90},
        { country: "Austria", litres: 25.30},
        { country: "UK", litres: 11.50}
    ]
]
AmCharts.ready(function() {
    // RADAR CHART
    chart = new AmCharts.AmSerialChart();
    chart.dataProvider = chartData[0];
    chart.categoryField = "country";
    chart.startDuration = 1;
    chart.sequencedAnimation = false;

    // VALUE AXIS
    var valueAxis = new AmCharts.ValueAxis();
    valueAxis.axisAlpha = 0.15;
    valueAxis.minimum = 0;
    valueAxis.dashLength = 3;
    chart.addValueAxis(valueAxis);

    // GRAPH
    var graph = new AmCharts.AmGraph();
    graph.type = "column";
    graph.valueField = "litres";
    graph.fillAlphas = 0.6;
    graph.balloonText = "[[value]] litres of beer per year";
    chart.addGraph(graph);

    // WRITE
    chart.write("chartdiv");
});

function selectDataset(d) {
    chart.dataProvider = chartData[d];
    chart.validateData();
    chart.animateAgain();
}
      
      
    