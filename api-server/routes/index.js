var express = require("express");
var app = require("../app");
var router = express.Router();
const {
    login,
    merchants
} = require("../api/data/login.js");
// const fs = require("fs");
// const axios = require("../api/requset.js");
var db = require('../api/db')

router.post("/api/manage/user/login", async (req, res) => {
    // console.log('login')
    res.send(login);
    // db.query(`SELECT * from a_permission`, [], function (results, fields) {
    //     console.log(results, 'results')
    //     let item = results.find((value) => {
    //         return value.key == 'code'
    //     })
    //     console.log(item)
    //     // 以json的形式返回
    //     res.json({ data: item.value, code: 0, message: null })
    // })
});



router.get('/add/permission', (req, res, next) => {
    // sql查询user表
    // INSERT INTO a_first_test(name,age) VALUES("孙悟空",180)
    // select  * from a_first_test
    //INSERT INTO a_first_test(name,age,num,des) VALUES("李四",1890,10,"笑嘻嘻")
    //INSERT into a_first_test set name = "姚明" ,age = 23
    let str = '';
    // login.forEach((v, i) => {
    //     str += ((i == 0 ? '' : ',') + `("${v.name}",${v.age},${v.num},"${v.des}")`)
    // })
    let s = []
    console.log(s, 's1')

    function callbackP (arr, layer, parent) {
        return arr.map((value, i) => {
            s.push({
                title: value.title,
                path: value?.path,
                parent: parent?.path,
                layer: layer,
            })
            if (value.children) {
                callbackP(value.children, layer + 1, value)
            }
        })

    }

    callbackP(login.permissionsList, 0)
    console.log(s, 's')

    s.forEach((v, i) => {
        str += ((i == 0 ? '' : ',') + `("${v.title}","${v.path}","${v.parent}","${v.layer}")`)
    })
    db.query(`INSERT INTO a_permission(title,path,parent,layer) value ${str}`, [], function (results, fields) {
        console.log(results, 'results')
        // 以json的形式返回
        res.json({ data: results, code: 0, message: null })
    })
})
router.get('/get/permission', (req, res, next) => {
    db.query(`SELECT * from a_permission`, [], function (results, fields) {
        console.log(results, 'results')
        let item = results.find((value) => {
            return value.key == 'code'
        })
        console.log(item)
        // 以json的形式返回
        res.json({ data: item.value, code: 0, message: null })
    })
})
// router.post("/zhihuijingqu-service/api/zhihuijingqu/user/order", async (req, res) => {
//     if (req.body.orderNumTypeEnum == '1') {
//         order.data = aliOrderQueryResult;
//     } else {
//         order.data = wxOrderQueryResult;
//     }
//     res.send(order);
// });
// router.post("/zhihuijingqu-service/api/zhihuijingqu/user/merchants", async (req, res) => {
//     res.send(merchants());
// });
module.exports = router;