/**
 *PC后台页面路由
 */
export default [
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
        component: () => import('../../views/backstage/index.vue')
      },
      {
        path: 'userList',
        component: () => import('../../views/backstage/user/userList.vue')
      },
      {
        path: 'addUser',
        component: () => import('../../views/backstage/user/addUser.vue')
      },
      {
        path: 'userBlacklist',
        component: () => import('../../views/backstage/user/userBlacklist.vue')
      },
      {
        path: 'adminList',
        component: () => import('../../views/backstage/admin/adminList.vue')
      },
      {
        path: 'addAdmin',
        component: () => import('../../views/backstage/admin/addAdmin.vue')
      }
    ]
  }
]
