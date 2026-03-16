import { createRouter, createWebHistory } from 'vue-router'

const AppLayout = () => import('@/layouts/AppLayout.vue')
const ErrorComponent = () => import('@/components/ErrorComponent.vue')
const CartPage = () => import('@/views/CartPage.vue')
const CreateOrder = () => import('@/views/CreateOrder.vue')
const HomePage = () => import('@/views/HomePage.vue')
const MenuPage = () => import('@/views/MenuPage.vue')
const OrderDetailsPage = () => import('@/views/OrderDetailsPage.vue')

const routes = [
  {
    path: '/',
    component: AppLayout,
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
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    compoenent: ErrorComponent,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
