/*For Amcharts*/
var chartConfig = {
          "type": "pie",
          "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
          "labelsEnabled": true,
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
          "titleField": "country",
          "valueField": "litres",
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


/**
 * Create first chart
 */

// create a copy of the universal config
var chartConfig1 = clone(chartConfig);

// modify a copy of the config
chartConfig1.dataProvider = [
            {
              "country": "Czech Republic",
              "litres": 356
            },
            {
              "country": "Ireland",
              "litres": 131
            },
            {
              "country": "Germany",
              "litres": 115.
            },
            {
              "country": "Australia",
              "litres": 109
            }

];

// create the chart
AmCharts.makeChart("sumchartdiv1", chartConfig1);

// create a copy of the universal config
var chartConfig2 = clone(chartConfig);

// modify a copy of the config
chartConfig2.dataProvider = [
            {
              "country": "Czech Republic",
              "litres": "356"
            },
            {
              "country": "Ireland",
              "litres": 131
            },
            {
              "country": "Germany",
              "litres": 115.
            },
            {
              "country": "Australia",
              "litres": 109
            }

];

// create the chart
AmCharts.makeChart("sumchartdiv2", chartConfig2);


// create a copy of the universal config
var chartConfig4 = clone(chartConfig);

// modify a copy of the config
chartConfig4.dataProvider = [
            {
              "country": "FD",
              "litres": 156
            },
            {
              "country": "MF Liquid",
              "litres": 131
            },
            {
              "country": "MF Debt",
              "litres": 315.
            },
            {
              "country": "MF Equity",
              "litres": 109
            }

];

// create the chart
AmCharts.makeChart("chartdiv2", chartConfig4);


// create a copy of the universal config
var chartConfig5 = clone(chartConfig);

// modify a copy of the config
chartConfig5.dataProvider = [
            {
              "country": "Czech Republic",
              "litres": "356"
            },
            {
              "country": "Ireland",
              "litres": 131
            },
            {
              "country": "Germany",
              "litres": 115.
            },
            {
              "country": "Australia",
              "litres": 109
            }

];

// create the chart
AmCharts.makeChart("chartdiv3", chartConfig5);