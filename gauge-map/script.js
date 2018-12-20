$(function () {

  let gaugeForMap = {};

  for (let i = 0; i < gaugeData.length; i++) {
    gaugeForMap[gaugeData[i].countryCode] = gaugeData[i].gauge + '';
  }

  const colorData = {
    '1676': '#bbdf94',
    '1668': '#83dc76',
    '1600': '#83dc76',
    '1524': '#305c31',
    '1520': '#305c31',
    '1435': '#568dd0',
    '1372': '#3e3d97',
    '1067': '#6a51b7',
    '1000': '#c55e8d',
    '914': '#e1392f',
    '762': '#ff82cb',
    '600': '#e5c4a1',
  };

  const svgObject = $('#gaugeSvg');

  const higlightOnPic = function (gauge) {
    svgObject.contents().find('#gauge_' + gauge).css({'stroke': '#cc00ff', 'stroke-width': 8});
    svgObject.contents().find('#label_' + gauge).css({'font-weight': 'bold', 'text-decoration': 'underline'});

  };
  const defaultPicStyle = function (gauge) {
    svgObject.contents().find('#gauge_' + gauge).css({'stroke': 'none'});
    svgObject.contents().find('#label_' + gauge).css({'font-weight': 'normal', 'text-decoration': 'none'});

  };

  $('#world-map-gdp').vectorMap({
    map: 'world_mill',
    backgroundColor: 'rgb(189, 204, 255)',
    series: {
      regions: [{
        values: gaugeForMap,
        scale: colorData,
        normalizeFunction: 'polynomial',
      }]
    },

    onRegionOver: function (e, code) {
      higlightOnPic(gaugeForMap[code]);
    },

    onRegionOut: function (e, code) {
      defaultPicStyle(gaugeForMap[code]);
    },
    onRegionTipShow: function (e, el, code) {
      el.html(`${el.html()} (${gaugeForMap[code]} mm.)`);
    }
  });
});

/*


@TODO
 - higlight countries when hover on pic
 - put result to codepen or something
 */


