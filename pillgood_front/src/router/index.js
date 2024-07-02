import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Register from '../views/RegisterMember.vue';
import Login from '../views/LoginView.vue';
import ForgotPassword from '../views/ForgotPasswordView.vue';
import ChangePassword from '../views/ChangePasswordView.vue';
import MyPage from '../views/MyPage.vue';
import Template from '../views/Template.vue';

// 추가된 컴포넌트들
import ProductDetail from '../views/product/ProductDetail.vue';
import CartPage from '../views/CartPage.vue';
import ProductCreate from '../views/product/ProductCreate.vue';
import ProductList from '../views/product/ProductList.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/forgotpassword', component: ForgotPassword },
  { path: '/changepassword', component: ChangePassword },
  { path: '/mypage', component: MyPage },
  { path: '/template', component: Template },
  // 추가된 부분
  { path: '/productcreate', component: ProductCreate },
  { path: '/productlist', component: ProductList },
  { 
    path: '/productDetail/:id', 
    name: 'ProductDetail', 
    component: ProductDetail, 
    props: true 
  },
  { 
    path: '/cart', 
    name: 'CartPage', 
    component: CartPage 
  },
  { 
    path: '/products', 
    name: 'ProductList', 
    component: ProductList 
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
