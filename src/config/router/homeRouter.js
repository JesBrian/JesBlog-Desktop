/**
 *PC前台页面路由
 */
export default [
  {
    path: '/',
    component: () => import('../../views/home/index.vue')
  },
  {
    path: '/home',
    component: () => import('../../views/home/index.vue')
  },
  {
    path: '/index',
    component: () => import('../../views/home/index.vue')
  },
  {
    path: '/article',
    component: () => import('../../views/home/article.vue')
  },
  {
    path: '/article/:id',
    component: () => import('../../views/home/article.vue')
  },
  {
    path: '/author',
    component: () => import('../../views/home/author.vue')
  },
  {
    path: '/author/:id',
    component: () => import('../../views/home/author.vue')
  },
  {
    path: '/update',
    component: () => import('../../views/home/update.vue')
  },
  {
    path: '/category',
    component: () => import('../../views/home/category.vue')
  },
  {
    path: '/category/:id',
    component: () => import('../../views/home/category.vue')
  },
  {
    path: '/search',
    component: () => import('../../views/home/search.vue')
  },
  {
    path: '/search/:key',
    component: () => import('../../views/home/search.vue')
  },
  {
    path: '/write',
    component: () => import('../../views/home/write.vue')
  },
  {
    path: '/write/:id',
    component: () => import('../../views/home/write.vue')
  },
  {
    path: '/management',
    component: () => import('../../views/home/management.vue')
  }
]
