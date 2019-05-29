module.exports = (router) => {
  router.prefix('/weather/v1');
  router.use('/agency', require('./agency'));
  router.use('/station', require('./station'));
  router.use('/metrics', require('./metric'));
}
