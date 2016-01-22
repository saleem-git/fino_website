
/*For Amcharts*/
var chartConfig = {
          "type": "pie",
          "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
          "labelsEnabled": true,
          "hideLabelsPercent": 5,
          "titleField": "category",
          "valueField": "column-1",
          "labelRadius": -20,
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
              "#56e2cf",
              "#56aee2",
              "#5668e2",
              "#8a56e2",
              "#cf56e2",
              "#e256ae",
              "#e25668",
              "#e28956",
              "#e2cf56",
              "#aee256",
              "#68e256",
              "#56e289"
            ],
          "sequencedAnimation": false,
            "startDuration": 0,
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

        function drawchart(divval,equity_large_cap,equity_mid_cap,equity_small_cap,sector_funds,index_fund,gold_etf,debt_long_term,debt_medium_term,liquid,gilt_long_term_fund)            
        {
          //console.log("In Fn");
          var divch="chartdiv"+divval;
          var chartconfigno="chartConfig"+divval;
          var chartconfigno = clone(chartConfig);
          chartconfigno.dataProvider = [
                  {
                    "product": "Equity Large Cap",
                    "investment": equity_large_cap
                  },
                  {
                    "product": "Equity Mid Cap",
                    "investment": equity_mid_cap
                  },
                  {
                    "product": "Equity Small Cap",
                    "investment": equity_small_cap
                  },           
                  {
                    "product": "Sector Funds",
                    "investment": sector_funds
                  },
                  {
                    "product": "Index Fund",
                    "investment": index_fund
                  },                  
                  {
                    "product": "Gold ETF",
                    "investment": gold_etf
                  },
                  {
                    "product": "Debt Long Term",
                    "investment": debt_long_term
                  },
                  {
                    "product": "Debt Medium Term",
                    "investment": debt_medium_term
                  },
                  {
                    "product": "Liquid",
                    "investment": liquid
                  },
                  {
                    "product": "Gilt Long Term Fund",
                    "investment": gilt_long_term_fund
                  }

        ];
        AmCharts.makeChart(divch,chartconfigno);
        }



/**********************************************/

/*For Tax only*/
function drawcharttax(divval,l_elss,m_elss,h_elss)            
        {
          //console.log("In Fn");
          var divch="chartdiv"+divval;
          var chartconfigno="chartConfig"+divval;
          var chartconfigno = clone(chartConfig);
          chartconfigno.dataProvider = [
                  {
                    "product": "Low Risk ELSS",
                    "investment": l_elss
                  },
                  {
                    "product": "Medium Risk ELSS",
                    "investment": m_elss
                  },
                  {
                    "product": "High Risk ELSS",
                    "investment": h_elss
                  }             

        ];
        AmCharts.makeChart(divch,chartconfigno);
        }