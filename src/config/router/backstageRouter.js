
export default [
    /*****************--------------- PC后台页面路由[BEGIN] ---------------*****************/
    {
        path: '/login',
        component: () => import('../../views/backstage/login.vue')
    },
    {
        path: '/backstage',
        component: () => import('../../views/backstage/frame.vue'),
        redirect: '/backstage/index',

        children: [
            {
                path: 'index',
                component: () => import('../../views/backstage/index.vue'),
            },
            {
                path: 'userList',
                component: () => import('../../views/backstage/user/userList.vue'),
            },
            {
                path: 'addUser',
                component: () => import('../../views/backstage/user/addUser.vue'),
            },
            {
                path: 'userBlacklist',
                component: () => import('../../views/backstage/user/userBlacklist.vue'),
            },
            {
                path: 'admin',
                component: () => import('../../views/backstage/admin/admin.vue'),
            }
        ]
    },
    /*****************--------------- PC后台页面路由[END] ---------------*****************/
]
