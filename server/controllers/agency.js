
const HttpStatus = require("http-status");
const agencies = require('../mockup-data/agency.json');
const regions = require("../mockup-data/region-ca.json");


const getAgencies = async (ctx, next) => {
  ctx.status = HttpStatus.OK;
  ctx.body = agencies;
  await next();
};

const getAgencyRegions = async (ctx, next) => {
  const agencyId = ctx.params.id;
  const agencyRegions = regions.filter(region => region.agency === agencyId);

  ctx.status = HttpStatus.OK;
  ctx.body = agencyRegions;
  
  await next();
}

module.exports = {
  getAgencies,
  getAgencyRegions
}
