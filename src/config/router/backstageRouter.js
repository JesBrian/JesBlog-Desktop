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
        path: 'updateUser',
        component: () => import('../../views/backstage/user/updateUser.vue')
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
      },
      {
        path: 'updateAdmin',
        component: () => import('../../views/backstage/admin/updateAdmin.vue')
      },
      {
        path: 'categoryList',
        component: () => import('../../views/backstage/category/categoryList.vue')
      },
      {
        path: 'addCategory',
        component: () => import('../../views/backstage/category/addCategory.vue')
      },
      {
        path: 'updateCategory',
        component: () => import('../../views/backstage/category/updateCategory.vue')
      },
      {
        path: 'articleList',
        component: () => import('../../views/backstage/article/articleList.vue')
      },
      {
        path: 'addArticle',
        component: () => import('../../views/backstage/article/addArticle.vue')
      },
      {
        path: 'updateArticle',
        component: () => import('../../views/backstage/article/updateArticle.vue')
      },
      {
        path: 'slideList',
        component: () => import('../../views/backstage/slide/slideList.vue')
      },
      {
        path: 'addSlide',
        component: () => import('../../views/backstage/slide/addSlide.vue')
      },
      {
        path: 'updateSlide',
        component: () => import('../../views/backstage/slide/updateSlide.vue')
      }
    ]
  }
]
