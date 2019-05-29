const Router = require('koa-router');
const Ctrl = require('../controllers/metric');

const router = new Router();

router.get('/', Ctrl.geMetrics);
// router.get('/:id/values', Ctrl.geMetrics)

module.exports = router.routes();
