const { db, mongoose } = require('./lib');

let Schema = mongoose.Schema;

mongoose.set('debug', true);

db.on('error', (err) => {
    console.log('连接数据库失败！' + err)
});
db.once('open', () => {
    console.log('连接数据库成功！');
});

module.exports = function (name, initType) {

    let table = null;
    initType = new Schema(initType);
    table = mongoose.model(name, initType);
    return {
        add: (obj = {}) => {
            let addNew = new table(obj);

            return new Promise((resolve, reject) => {
                addNew.save((err) => {
                    if (err) {
                        reject({
                            code: 1,
                            msg: "写入数据失败！"
                        })
                    } else {
                        resolve({
                            code: 0,
                            msg: "写入数据成功！"
                        })
                    }
                })
            })
        },
        find: (obj = {}) => {

            return new Promise((resolve, reject) => {

                table.find(obj, (err, docs) => {

                    if (docs && docs.length > 0) {
                        resolve({
                            code: 0,
                            msg: docs
                        })
                    } else {
                        reject({
                            code: 1,
                            msg: "查找数据失败！"
                        })
                    }
                })
            })

        },
        update: (obj = {}) => {
            return new Promise((resolve, reject) => {
                table.update(
                    obj.old,
                    obj.new,
                    (err) => {
                        if (err) {
                            reject({
                                code: 1,
                                msg: "更新数据失败！"
                            })
                        } else {
                            resolve({
                                code: 0,
                                msg: "修改数据成功！"
                            })
                        }
                    }
                )
            })
        },
        del: (obj = {}) => {

            return new Promise((resolve, reject) => {
                table.remove(obj, (err) => {
                    if (err) {
                        reject({
                            code: 1,
                            msg: "删除数据失败！"
                        })
                    } else {
                        resolve({
                            code: 0,
                            msg: "删除数据成功！"
                        })
                    }
                })
            })
        }
    }
};
