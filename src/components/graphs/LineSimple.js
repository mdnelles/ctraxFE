/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ChartContainer } from "./ChartContainer";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
am4core.addLicense("ch-custom-attribution");
// Themes end

const LineSimple = (props) => {
   let { title, header, chartName, height, data, dateDisplay, valueAxisLabel } =
      props;
   let chart = am4core.create(chartName, am4charts.XYChart);
   let mainColor = "#fff75e";

   //data.push({ date: date, value: value });
   chart.data = data;
   console.log("chart====");
   console.log(chart);
   // Create axes
   let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
   console.log("dateAxis====");
   console.log(dateAxis);
   dateAxis.renderer.minGridDistance = 0;

   let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
   valueAxis.title.text = valueAxisLabel;
   valueAxis.title.fontWeight = "bold";
   //valueAxis.title.color = "yellow";

   // Create series
   let series = chart.series.push(new am4charts.LineSeries());
   series.dataFields.valueY = "value";
   series.dataFields.dateX = "date";
   series.tooltipText = "{value}";
   series.fill = am4core.color(mainColor);
   series.stroke = am4core.color(mainColor);
   series.strokeWidth = 3;
   series.tooltip.pointerOrientation = "vertical";

   chart.cursor = new am4charts.XYCursor();
   chart.cursor.snapToSeries = series;
   chart.cursor.xAxis = dateAxis;

   const bullet = series.bullets.push(new am4charts.Bullet());

   bullet.fill = am4core.color(mainColor);
   const circle = bullet.createChild(am4core.Circle);

   circle.radius = 3;
   circle.fill = am4core.color("#fff");
   circle.strokeWidth = 1.5;

   /* Changing tooltip background fill */
   series.tooltip.getFillFromObject = false;
   series.tooltip.background.fill = am4core.color(mainColor);

   //chart.scrollbarY = new am4core.Scrollbar();
   //chart.scrollbarX = new am4core.Scrollbar();

   return (
      <ChartContainer
         title={title || "Title"}
         header={header || "Header"}
         chartName={chartName}
         width={"100%"}
         dateDisplay={dateDisplay}
         height={height}
      />
   );
};

export default LineSimple;
