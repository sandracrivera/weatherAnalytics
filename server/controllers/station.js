const HttpStatus = require("http-status");
const stations = require('../mockup-data/station.json');
const plotValues = require("../mockup-data/values.json");
const moment = require("moment");

const getStationById = async (ctx, next) => {
  const regionId = ctx.params.id;
  const station = stations.filter(station => station.region === regionId);

  ctx.status = HttpStatus.OK;
  ctx.body = station || [];

  await next();
}

const getValuesByStationMetric = async (ctx, next) => {
  // TODO:
  // add validations for query dates and in case there is no values

  const stationId = ctx.params.id;
  const metricId = ctx.params.metricId;
  const startDate = moment(ctx.query.start);
  const endDate = moment(ctx.query.end);
  let points = [];

  const plotValuesSelected = plotValues.filter(value => 
    value.station === stationId && value.metric === metricId);

  if (plotValuesSelected.length > 0 ) {
    points = plotValuesSelected[0].values.filter(value => {
      const date = moment(value.timestamp).startOf('day');
      return startDate <= date && date <= endDate
    });
  }

  ctx.status = HttpStatus.OK;
  ctx.body = { station: stationId, name: plotValuesSelected[0].name, points };

  await next();
}

module.exports = {
  getStationById,
  getValuesByStationMetric
}
