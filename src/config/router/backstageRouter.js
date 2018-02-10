
export default [
    /*****************--------------- PC后台页面路由[BEGIN] ---------------*****************/
    {
        path: '/login',
        component: () => import('../../views/backstage/login.vue')
    },
    {
        path: '/backstage',
        component: () => import('../../views/backstage/frame.vue'),

        children: [
          {
              path: 'index',
              component: () => import('../../views/backstage/index.vue'),
          },
          {
              path: 'admin',
              component: () => import('../../views/backstage/admin.vue'),
          }
        ]
    },
    /*****************--------------- PC后台页面路由[END] ---------------*****************/
]
