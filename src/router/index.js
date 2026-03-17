import { createRouter, createWebHistory } from 'vue-router'

import ErrorComponent from '@/components/ErrorComponent.vue'
const AppLayout = () => import('@/layouts/AppLayout.vue')
const CartPage = () => import('@/views/CartPage.vue')
const CreateOrder = () => import('@/views/CreateOrder.vue')
const HomePage = () => import('@/views/HomePage.vue')
const MenuPage = () => import('@/views/MenuPage.vue')
const OrderDetailsPage = () => import('@/views/OrderDetailsPage.vue')

const routes = [
  {
    path: '/',
    component: AppLayout,
    errorCaptured: ErrorComponent,
    children: [
      {
        path: '',
        name: '/home',
        component: HomePage,
      },
      {
        path: '/menu',
        name: 'menu',
        component: MenuPage,
      },
      {
        path: '/cart',
        name: 'cart',
        component: CartPage,
      },
      {
        path: 'order/new',
        name: 'create-order',
        component: CreateOrder,
      },
      {
        path: 'order/:orderID',
        name: 'order',
        component: OrderDetailsPage,
      },
      {
        path: '/:pathMatch(.*)*',
        component: ErrorComponent,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: ErrorComponent,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
