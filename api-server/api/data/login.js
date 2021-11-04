const Mock = require('mockjs')
const login = {
    "success": true,
    "code": "0",
    "data": [
        {
            title: '系统设置',
            children: [
                {
                    title: '用户管理',
                    path: 'setting_userManage',
                    meta: {
                        permissions: ['111']
                    }
                },
                {
                    title: '角色管理',
                    path: 'setting_roleManage',
                    meta: {
                        permissions: ['111']
                    }
                },
                {
                    title: '资源管理',
                    path: 'setting_resourcesManage',
                    meta: {
                        permissions: ['111']
                    }
                },
            ]
        },
        {
            title: '营销设置',
            children: [
                {
                    title: '首页banner',
                    path: 'market_banner',
                    meta: {
                        permissions: ['111']
                    }
                },
                {
                    title: '资产页banner',
                    path: 'market_banner',
                    meta: {
                        permissions: ['111']
                    }
                },
            ]
        },
        {
            title: '开发者管理',
            children: [
                {
                    title: '开发者模式',
                    path: 'developer',
                },
            ]
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