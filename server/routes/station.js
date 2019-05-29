const Router = require('koa-router');
const Ctrl = require('../controllers/station');

const router = new Router();

router.get('/:id', Ctrl.getStationById);
router.get('/:id/metric/:metricId/values', Ctrl.getValuesByStationMetric);

module.exports = router.routes();
