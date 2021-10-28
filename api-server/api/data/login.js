const Mock = require('mockjs')
const login = {
    "success": true,
    "code": "0",
    "merchantUserModel": {
        "id": 116,
        "username": "绍兴文旅开发",
        "loginName": "sxwl01",
        "disabled": false,
        "merchantId": 87,
        "logoUrl": "https://oss.iuctrip.com/test/tesla/merchant/87/user/logo/1561012146025sjs6yu0a.png",
        "mobilePhone": "16666666666",
        "storeId": null,
        "storeName": null,
        "storeType": null,
        "scenicSpotId": null,
        "scenicSpotName": null,
        "ticketChannel": "",
        "scenicSpotIdList": [],
        "roleType": null,
        "distributorId": null
    },
    "permissionsList": [
        {
            title: '订单管理',
            children: [
                {
                    title: '订单操作',
                    path: 'order',
                }, 
                {
                    title:'大放送',
                    children: [
                        {
                            title: '订单',
                            path: 'order3',
                            children: [
                                {
                                    title: 'asdf',
                                    path: 'order4',
                                }, 
                                {
                                    title:'大放dddd',
                                    path:'order5'
                                }
                            ]
                            
                        }, 
                        {
                            title:'大放',
                            path:'order2'
                        }
                    ]
                }
            ]
        },
        {
            title: '订单管理',
            children: [
                {
                    title: '订单操作1',
                    path: 'order',
                }, 
                {
                    title:'大放送2',
                    children: [
                        {
                            title: '订单3',
                            path: 'order3',
                        }, 
                        {
                            title:'大放4',
                            path:'order2'
                        }
                    ]
                }
            ]
        },
        {
            title: '智慧景区系统',
            path: 'https://dev-gateway.iuctrip.com/manage/smart-scenic-v2-web/',
        },
    ]
};

const merchants = () => {
    return Mock.mock({
        "success": true,
        "code": "0",
        "data|12": [{
            "id": "@id",
            "merchant": "@ctitle(3, 6)",
        }]
    })
}


exports.login = login;
exports.merchants = merchants;