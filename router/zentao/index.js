const createTable = require('../../dbUtil/index');

let table = createTable('test', {
    type: String,
    info: Array
});

async function test(...arg) {

    let res = arg[0].response;

    res.body = {
        code: 1,
        info: '测试'
    }

}

module.exports = {
    test
};