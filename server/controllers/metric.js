
const HttpStatus = require("http-status");
const metrics = require('../mockup-data/metric.json');
const values = require('../mockup-data/values.json');

const geMetrics = async (ctx, next) => {
  ctx.status = HttpStatus.OK;
  ctx.body = metrics;
  await next();
}

module.exports = {
  geMetrics
}
