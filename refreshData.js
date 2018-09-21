const schedule = require('node-schedule');

module.exports = function () {
    let rule = new schedule.RecurrenceRule();
    rule.second = [0, 10, 20, 30, 40, 50];
    schedule.scheduleJob(rule, function () {
        console.log('定时刷新数据中...')

    });
};