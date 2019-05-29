const Router = require('koa-router');
const Ctrl = require('../controllers/agency');

const router = new Router();

router.get('/', Ctrl.getAgencies);
router.get('/:id/regions', Ctrl.getAgencyRegions);

module.exports = router.routes();
