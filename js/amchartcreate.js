
/*For Amcharts*/
var chartConfig = {
          "type": "pie",
          "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
          "labelsEnabled": true,
          "hideLabelsPercent": 5,
          "titleField": "category",
          "valueField": "column-1",
          "labelRadius": -30,
          "labelText": " [[percents]]%",
          "fontSize": 10,
          "legend": {
            "enabled": true,
            "markerType": "circle",
            "position": "right",
            "valueText": ""
          },
          "titles": [],
            "colors": [
              "#67b7dc",
              "#84b761",
              "#cc4748",            
              "#913167"
            ],
          "sequencedAnimation": false,
          "startEffect": "easeOutSine",
          "titleField": "product",
          "valueField": "investment",
          "percentPrecision": 0,
          "pathToImages": "http://cdn.amcharts.com/lib/3/images/",
          "theme": "light",
          "allLabels": [],  
};

/**
 * Define function for cloning objects
 * Taken from: http://stackoverflow.com/questions/728360/most-elegant-way-to-clone-a-javascript-object
 */
function clone(obj) {
  var copy;

  // Handle the 3 simple types, and null or undefined
  if (null == obj || "object" != typeof obj) return obj;

  // Handle Date
  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // Handle Array
  if (obj instanceof Array) {
    copy = [];
    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = clone(obj[i]);
    }
    return copy;
  }

  // Handle Object
  if (obj instanceof Object) {
    copy = {};
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
    }
    return copy;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");
}


/*check for 0 values*/
AmCharts.addInitHandler(function(chartConfig) { 
    // add visibleInLegendField to chart config
    chartConfig.visibleInLegendField = "visibleInLegend";
    
    // check each slice
    for(var i = 0; i < chartConfig.dataProvider.length; i++) {
      if (chartConfig.dataProvider[i][chartConfig.valueField] === 0) {
        chartConfig.dataProvider[i].visibleInLegend = false;
      }
    }
  

}, ["pie"]);


/*Charts for onboarding page start*/

/**
 * Create first chart
 */

 // create a copy of the universal config





/*Charts for onboarding page end*/




/*
******************************************************************
*/
/*Charts for Summary page*/

// create a copy of the universal config
var chartConfigsum1 = clone(chartConfig);

// modify a copy of the config
chartConfigsum1.dataProvider = [
            {
              "product": "Czech Republic",
              "investment": 356
            },
            {
              "product": "Ireland",
              "investment": 131
            },
            {
              "product": "Germany",
              "investment": 115.
            },
            {
              "product": "Australia",
              "investment": 109
            }

];

// create the chart
AmCharts.makeChart("sumchartdiv1", chartConfigsum1);

// create a copy of the universal config
var chartConfigsum2 = clone(chartConfig);

// modify a copy of the config
chartConfigsum2.dataProvider = [
            {
              "product": "Czech Republic",
              "investment": "356"
            },
            {
              "product": "Ireland",
              "investment": 131
            },
            {
              "product": "Germany",
              "investment": 115.
            },
            {
              "product": "Australia",
              "investment": 109
            }

];

// create the chart
AmCharts.makeChart("sumchartdiv2", chartConfigsum2);


/*******************************************/
//chart Dynamic
        function drawchart(divval,fdv,mfdebtv,mfeqv,mfliqv) {
          //console.log("In Fn");
          var divch="chartdiv"+divval;
          var chartconfigno="chartConfig"+divval;
          var chartconfigno = clone(chartConfig);
          chartconfigno.dataProvider = [
                  {
                    "product": "FD",
                    "investment": fdv
                  },
                  {
                    "product": "MF Debt",
                    "investment": mfdebtv
                  },
                  {
                    "product": "MF Equity",
                    "investment": mfeqv
                  },           
                  {
                    "product": "MF Liquid",
                    "investment": mfliqv
                  }

        ];
        AmCharts.makeChart(divch,chartconfigno);
        }

/**********************************************/