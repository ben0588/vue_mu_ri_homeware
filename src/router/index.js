import { createRouter, createWebHashHistory } from 'vue-router';
import axios from 'axios';
import HomeView from '../views/home/HomeView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminView.vue'),
      children: [
        {
          path: '',
          name: 'admin_login',
          component: () => import('../views/admin/AdminLoginView.vue'),
        },
        {
          path: 'dashboard',
          name: 'admin_dashboard',
          component: () => import('../views/admin/dashboard/AdminDashboardView.vue'),
          meta: { requiresAuth: true }, // 需要驗證權限
          children: [
            {
              path: 'products',
              name: 'admin_products',
              component: () => import('../views/admin/products/AdminProductsView.vue'),
            },
            {
              path: 'coupon',
              name: 'admin_coupon',
              component: () => import('../views/admin/coupon/AdminCouponView.vue'),
            },
            {
              path: 'order',
              name: 'admin_order',
              component: () => import('../views/admin/order/AdminOrderView.vue'),
            },
            {
              path: 'article',
              name: 'admin_article',
              component: () => import('../views/admin/article/AdminArticleView.vue'),
            },

          ],
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/ErrorView.vue'),
    },
  ],
});

const checkAuth = async () => {
  try {
    // 每次進入頁面就先取出來 cookie 並且設定在 axios 的 headers。
    const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)AdminToken\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = cookie;
    if (!cookie) {
      console.log('請重新登入');
      return false;
    }
    // 呼叫檢查權限驗證 token 是否過期，過期就返回登入頁。
    const api = `${import.meta.env.VITE_APP_BASE_API_URL}/v2/api/user/check`;
    const response = await axios.post(api, {});
    return response?.data?.success;
  } catch (error) {
    console.log(error?.response?.data?.message);
    return false;
  }
};

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      next({
        // 沒有權限直接返回首頁。
        path: '/admin',
      });
    } else {
      // 有權限就繼續行動。
      next();
    }
  } else {
    // 不需要驗證的路由就繼續執行。
    next();
  }
});

export default router;
