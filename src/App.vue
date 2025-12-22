<template>
  <div :class="['min-h-screen', themeClasses]">
    <!-- Loading Screen -->
    <div
      v-if="store.isLoading"
      class="fixed inset-0 bg-slate-50 dark:bg-slate-900 z-50 flex items-center justify-center"
    >
      <div class="text-center">
        <div class="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p class="text-zinc-600 dark:text-zinc-400">Loading portfolio...</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative">
      <!-- Background Pattern -->
      <div class="fixed inset-0 -z-10">
        <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"></div>
        <div 
          class="absolute inset-0 opacity-10 dark:opacity-5"
          :style="{ backgroundImage: bgPattern }"
        ></div>
      </div>

      <!-- Header -->
      <Header />

      <!-- Main Content -->
      <main class="relative">
        <!-- Active Section Indicator -->
        <div 
          v-if="showActiveIndicator"
          class="fixed left-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block"
        >
          <div class="flex flex-col items-center space-y-4">
            <div 
              v-for="link in navLinks" 
              :key="link.name"
              @click="scrollToSection(link.name)"
              class="relative group cursor-pointer"
            >
              <div 
                class="w-3 h-3 rounded-full transition-all duration-300"
                :class="[
                  store.activeSection === link.name
                    ? 'bg-blue-600 scale-125'
                    : 'bg-zinc-300 dark:bg-zinc-700 hover:bg-blue-400'
                ]"
              ></div>
              <div class="absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                <span class="text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-slate-50 dark:bg-zinc-800 px-2 py-1 rounded shadow-lg">
                  {{ link.label }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Router View with Transitions -->
        <router-view v-slot="{ Component, route }">
          <transition
            :name="route.meta.transition || 'fade'"
            mode="out-in"
            @before-enter="onPageEnter"
            @after-enter="onPageEnterComplete"
          >
            <component 
              :is="Component" 
              :key="route.path"
              class="page-content"
            />
          </transition>
        </router-view>
      </main>

      <!-- Footer -->
      <Footer />

      <!-- Scroll to Top Button -->
      <button
        v-show="showScrollToTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 z-40"
        aria-label="Scroll to top"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <!-- Toast Notification -->
      <div 
        v-if="toast.show"
        class="fixed top-4 right-4 z-50 animate-slide-in-right"
      >
        <div :class="[
          'px-6 py-4 rounded-lg shadow-xl transform transition-all duration-300',
          toast.type === 'success' ? 'bg-green-500 text-white' :
          toast.type === 'error' ? 'bg-red-500 text-white' :
          'bg-blue-500 text-white'
        ]">
          <div class="flex items-center space-x-3">
            <span v-if="toast.type === 'success'">✅</span>
            <span v-if="toast.type === 'error'">❌</span>
            <span v-if="toast.type === 'info'">ℹ️</span>
            <p class="font-medium">{{ toast.message }}</p>
            <button @click="toast.show = false" class="ml-4 hover:opacity-80">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePortfolioStore } from './stores/portfolio'
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'

// Store and Router
const store = usePortfolioStore()
const route = useRoute()
const router = useRouter()

// Fixed SVG pattern - moved to computed property to avoid parsing errors
const bgPattern = computed(() => "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")")

// Reactive state
const showScrollToTop = ref(false)
const showActiveIndicator = ref(true)
const toast = ref({
  show: false,
  message: '',
  type: 'info'
})

// Navigation links for active section indicator
const navLinks = [
  { name: 'home', label: 'Home' },
  { name: 'about', label: 'About' },
  { name: 'skills', label: 'Skills' },
  { name: 'projects', label: 'Projects' },
  { name: 'contact', label: 'Contact' }
]

// Computed
const themeClasses = computed(() => ({
  'dark': store.theme === 'dark',
  'light': store.theme === 'light'
}))

// Methods
const showToast = (message, type = 'info', duration = 3000) => {
  toast.value = { show: true, message, type }
  setTimeout(() => {
    toast.value.show = false
  }, duration)
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const scrollToSection = (section) => {
  const element = document.getElementById(section)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  } else {
    router.push({ name: section.charAt(0).toUpperCase() + section.slice(1) })
  }
}

const onPageEnter = () => {
  store.isLoading = true
}

const onPageEnterComplete = () => {
  store.isLoading = false
  // Update active section based on route
  const section = route.name ? route.name.toLowerCase() : 'home'
  store.setActiveSection(section)
}

const handleScroll = () => {
  showScrollToTop.value = window.scrollY > 300
  
  // Update active section based on scroll position
  if (route.path === '/') {
    const sections = ['home', 'about', 'skills', 'projects', 'contact']
    const scrollPosition = window.scrollY + 100
    
    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const { top, bottom } = element.getBoundingClientRect()
        if (top <= 100 && bottom >= 100) {
          store.setActiveSection(section)
          break
        }
      }
    }
  }
}

const handleResize = () => {
  showActiveIndicator.value = window.innerWidth >= 1024
}

// Lifecycle Hooks
onMounted(() => {
  // Initialize theme
  const savedTheme = localStorage.getItem('portfolio-theme') || 'light'
  store.theme = savedTheme
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark')
  }
  
  // Set up event listeners
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  
  // Initial checks
  handleResize()
  handleScroll()
  
  // Example: Show welcome toast
  setTimeout(() => {
    showToast('Welcome to my portfolio!', 'info', 4000)
  }, 1000)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>

<style>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.dark ::-webkit-scrollbar-track {
  background: #1f2937;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Smooth theme transition */
.theme-transition {
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Page transition animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Page content animation */
.page-content {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Custom animation for toast */
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in-right {
  animation: slideInRight 0.3s ease-out;
}
</style>