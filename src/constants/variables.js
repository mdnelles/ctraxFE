

export const VERSION_NUMBER = '1.1.20';
export const DATE_FORMAT = 'YYYY-MM-DD';

export const GLOBAL_OBJECT = {
  ver: VERSION_NUMBER,
  s: {},
  o: {
    markerTempWidth: 10,
    markerTempHeight: 10,
    legendFontSize: 12,
    legendX: 0,
    legendY: -10,
    legendWidth: '100%',
    legendHeight: '100px',
    legendColor: '#324D66',
    legendContainerHorizontalCenter: 'left',
    legendContainerIsMeasured: false,
    zIndexLegend: 10,
    strokeWidth: 0,
    titleFontSize: 18,
    titleFill: '#324D66',
    titleAlign: 'left',
    titleMarginBottom: 31,
    dataAxisMiniGridDistance: 30,
    axisFontSize: 12,
    axisFontColor: '#324D66',
    axisStrokeWidth: 0,
    axisLabelTruncate: false,
    axisLabelMaxWidth: 80,
    axisLabelTooltipText: '{category}',
    axisTextRotAngle: -45,
    gridSpace: 3,
    gridStrokeWidth: 1,
    lineStrokeWidth: 3,
    circleRadius: 5,
    circleStrokeWidth: 2.5,
    containerPadding: 20
  },
  charts: {
    AccountsReceivableDetails: {
      data: [null]
    },
    barHorizontal: {
      yAxisName: 'Conroe',
      xAxisName: 'Seguin',
      lineColor: '#000',
      title: 'Line Chart',
      strokeWidth: 2,
      dropdown: true,
      dropdownTitles: [
        { label: 'Revenue' },
        { label: 'Tons Sold', isCurrency: false },
        { label: 'Loads', isCurrency: false },
        { label: 'Revenue/Ton' },
        { label: 'Revenue/Load' },
        { label: 'Tons/Load', isCurrency: false }
      ],
      data: [null]
    },
    Bubble: {
      data: [null],
      title: 'NetSales',
      fillColor: '#324D66',
      lineStrokeWidth: 2,
      strokeColor: '#ffffff',
      strokeOpacity: 0,
      opacity: 0.6,
      bulletStrokeOpacity: 0,
      displayDays: 'displayNone'
    },
    compare: {
      data: [null],
      lineStroke: '#324D66',
      lineStrokeWidth: 2,
      circleRadius: 6,
      fillColor: '#BDC3C799',
      fillStrokeWidth: 1,
      fillStroke: '#BDC3C799',
      fillStrokeOpacity: 0.75
    },
    colLineMix: {
      data: [null],
      lineColor: '#324D66',
      lineStrokeWidth: 3,
      smoothing: 'monotoneX',
      colColor: '#BDC3C799',
      circleRadius: 5,
      cornerRadiusTopLeft: 6,
      cornerRadiusTopRight: 6
    },
    global: {
      data: [null],
      circleRadius: 6,
      titleFontSize: 15,
      titleMargin: 5
    },
    infoBubble: {
      title: null,
      month: null,
      percent: null,
      date: null,
      bigText: null
    },
    Invoice: {
      data: [null]
    },
    incomeStatement: {
      data: [null]
    },
    LayeredColumn: {
      data: [null],
      chartNameOne: 'Sep2020',
      chartNameTwo: 'Aug2020',
      title: 'NetSales',
      colorOne: '#eeeeee',
      colorTwo: '#cccccc'
    },
    linearRegression: {
      data: [null]
    },
    pill: { data: [null], percent: null },
    simple: { data: [null], color: '#BDC3C7' },
    simpleLine: {
      yAxisName: 'month',
      xAxisName: 'expenses',
      lineColor: '#000',
      title: 'Line Chart',
      strokeWidth: 2,
      dropdown: true,
      dropdownTitles: [
        'CCC',
        'Current Ratio',
        'Days Sales Outstanding',
        'Equity',
        'Long Term Liability',
        'New Working Capital',
        'Other Assets',
        'Quick Ratio'
      ],
      data: [null]
    },
    SortedBar: { data: [null], color: '#BDC3C7' },
    stackFull: {
      data: [null],
      colorSix: '#12304d',
      colorFive: '#747C83',
      colorFour: '#BDC3C799',
      colorThree: '#99C2E5',
      colorTwo: '#608FBE',
      colorOne: '#324D66'
    },
    stackWithLine: {
      data: [null],
      colorSix: '#324D66',
      colorFive: '#747C83',
      colorFour: '#BDC3C799',
      colorThree: '#99C2E5',
      colorTwo: '#608FBE',
      colorOne: '#12304d',
      lineColor: '#000',
      strokeWidth: 2
    },
    TreeMap: {
      data: [null],
      colorFive: '#747C83',
      colorFour: '#BDC3C799',
      colorThree: '#99C2E5',
      colorTwo: '#608FBE',
      colorOne: '#324D66'
    },
    waterfall: {
      data: [null],
      colorStart: '#747C83',
      colorEnd: '#747C83',
      colorPos: '#BDC3C7',
      colorNeg: '#608FBE'
    }
  }
};
