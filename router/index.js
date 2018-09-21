const router = require('koa-router')();
const { test } = require('./zentao/index')

router.get('/test', test)

module.exports.register = (app) => {
    app.use(router.middleware());
};
