import { createRouter, createWebHashHistory } from 'vue-router';
import axios from 'axios';

import { useAlert } from '@/composables/useAlert';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    // 返回滾動位置
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'front',
      component: () => import('@/views/front/home/FrontView.vue'),
      children: [
        {
          path: '',
          name: 'front_home',
          component: () => import('@/views/front/home/HomeView.vue'),
        },
        {
          path: 'products',
          name: 'front_products',
          component: () => import('@/views/front/products/ProductListView.vue'),
        },
        {
          path: 'products/:id',
          name: 'front_product_details',
          component: () => import('@/views/front/products/ProductDetailsView.vue'),
        },
        {
          path: 'carts',
          name: 'front_carts',
          component: () => import('@/views/front/shoppingCart/CartsView.vue'),
          children: [
            {
              path: '',
              index: true,
              name: 'front_carts_index',
              component: () => import('@/views/front/shoppingCart/ShoppingCartView.vue'),
            },
            {
              path: 'confirm',
              name: 'front_order_confirm',
              component: () => import('@/views/front/shoppingCart/OrderConfirmView.vue'),
            },
            {
              path: 'payment/:id',
              name: 'front_order_payment',
              component: () => import('@/views/front/shoppingCart/PaymentView.vue'),
            },
            {
              path: 'complete',
              name: 'front_order_complete',
              component: () => import('@/views/front/shoppingCart/CompleteOrderView.vue'),
            },

          ],
        },
        {
          path: 'wishlist',
          name: 'front_wishlist',
          component: () => import('@/views/front/wishlist/WishlistView.vue'),
        },
        {
          path: 'member',
          name: 'front_member',
          component: () => import('@/views/front/member/MemberView.vue'),
          children: [
            {
              path: 'account',
              index: true,
              name: 'front_member_account',
              component: () => import('@/views/front/member/MemberAccountView.vue'),
            },
            {
              path: 'wishlist',
              name: 'front_member_wishlist',
              component: () => import('@/views/front/member/MemberWishlistView.vue'),
            },
            {
              path: 'orders',
              name: 'front_member_orders',
              component: () => import('@/views/front/member/MemberOrdersView.vue'),
            },
          ],
        },
        {
          path: 'inspiration',
          name: 'front_inspiration',
          component: () => import('@/views/front/Inspiration/InspirationView.vue'),
        },
        {
          path: 'inspiration/:id',
          name: 'front_inspiration_details',
          component: () => import('@/views/front/Inspiration/InspirationDetailsView.vue'),
        },

        {
          path: 'newProducts',
          name: 'front_newProducts',
          component: () => import('@/views/front/newProducts/NewProductsView.vue'),
        },
        {
          path: 'newEvents',
          name: 'front_newEvents',
          component: () => import('@/views/front/newEvents/NewEventsView.vue'),
        },
        {
          path: 'newEvents/:id',
          name: 'front_newEvents_details',
          component: () => import('@/views/front/newEvents/NewEventDetailsView.vue'),
        },
        {
          path: 'more',
          name: 'front_footer_more',
          component: () => import('@/views/front/footer/FooterView.vue'),
          children: [
            {
              path: 'about',
              name: 'front_footer_about',
              component: () => import('@/views/front/footer/AboutView.vue'),
            },
            {
              path: 'join',
              name: 'front_footer_join',
              component: () => import('@/views/front/footer/JoinView.vue'),
            },
            {
              path: 'FAQ',
              name: 'front_footer_FAQ',
              component: () => import('@/views/front/footer/FAQView.vue'),
            },
            {
              path: 'contact',
              name: 'front_footer_contact',
              component: () => import('@/views/front/footer/ContactView.vue'),
            },
            {
              path: 'privacyPolicy',
              name: 'front_footer_privacyPolicy',
              component: () => import('@/views/front/footer/PrivacyPolicyView.vue'),
            },
          ],
        },

      ],
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/admin/AdminView.vue'),
      children: [
        {
          path: '',
          name: 'admin_login',
          component: () => import('@/views/admin/AdminLoginView.vue'),
        },
        {
          path: 'dashboard',
          name: 'admin_dashboard',
          component: () => import('@/views/admin/dashboard/AdminDashboardView.vue'),
          meta: { requiresAuth: true }, // 需要驗證權限
          children: [
            {
              path: 'products',
              name: 'admin_products',
              component: () => import('@/views/admin/products/AdminProductsView.vue'),
              // 分頁要加上這個功能，否者變成每次進入分頁都會重新呼叫一次權限驗證，不用 routers 的驗證功能是
              // 因為，呼叫後臺產品管理 API，也會檢查 cookie 是不是有過期，所以不必要多做一層呼叫
              meta: { requiresAuth: false },
            },
            {
              path: 'coupon',
              name: 'admin_coupon',
              component: () => import('@/views/admin/coupon/AdminCouponView.vue'),
              meta: { requiresAuth: false },

            },
            {
              path: 'order',
              name: 'admin_order',
              component: () => import('@/views/admin/order/AdminOrderView.vue'),
              meta: { requiresAuth: false },

            },
            {
              path: 'articles',
              name: 'admin_article',
              component: () => import('@/views/admin/article/AdminArticlesView.vue'),
              meta: { requiresAuth: false },

            },
            {
              path: 'events',
              name: 'admin_event',
              component: () => import('@/views/admin/event/AdminEventsView.vue'),
              meta: { requiresAuth: false },

            },
          ],
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/ErrorView.vue'),
    },
  ],
});
const { showAlert } = useAlert();

const checkAuth = async () => {
  try {
    // 每次進入頁面就先取出來 cookie 並且設定在 axios 的 headers。
    const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)AdminToken\s*\/=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = cookie;
    if (!cookie) {
      return false;
    }
    // 呼叫檢查權限驗證 token 是否過期，過期就返回登入頁。
    const api = `${import.meta.env.VITE_APP_BASE_API_URL}/v2/api/user/check`;
    const response = await axios.post(api, {});
    return response?.data?.success;
  } catch (error) {
    showAlert({
      title: `${error.response.data.message} `,
      text: '非法操作，請照常規操作進行登入。',
      icon: 'error',
      confirmButtonText: '確認',
      confirmButtonColor: '#000000',
      allowEscapeKey: false,
      allowOutsideClick: false,
    });
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
