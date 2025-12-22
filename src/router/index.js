import { createRouter, createWebHistory } from 'vue-router'

// Import views
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Skills = () => import('../views/Skills.vue')
const Projects = () => import('../views/Project.vue')
const Contact = () => import('../views/Contact.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'About' }
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills,
    meta: { title: 'Skills' }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: { title: 'Projects' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { title: 'Contact' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// Update page title
router.beforeEach((to, from, next) => {
  const pageTitle = to.meta.title || 'Portfolio'
  document.title = `${pageTitle} - My Portfolio`
  next()
})

export default router