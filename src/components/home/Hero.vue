<template>
  <div class="min-h-[70vh] flex items-center py-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto px-4">
      
      <!-- Left Column - Text Content -->
      <div class="text-center lg:text-left">
        <!-- Badge -->
        <div class="mb-6 inline-flex lg:inline-flex">
          <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
            </svg>
            Open to new opportunities
          </span>
        </div>
        
        <!-- Title -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span class="block text-zinc-900 dark:text-white">Hi, I'm RATHA</span>
          
        </h1>
        
        <!-- Subtitle with animation -->
        <div class="relative inline-block mb-6">
          <h2 class="text-2xl md:text-3xl font-semibold text-zinc-700 dark:text-zinc-300">
            <span class="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Developer 
            </span>
          </h2>
          <div class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
        
        <!-- Description -->
     <p class="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
  I’m passionate about learning new things and growing in 
  <span class="font-medium text-blue-600 dark:text-blue-400">web development</span>. 
  I enjoy building modern websites and continuously improving my skills through practice and real projects.
</p>

        
        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
          <router-link
            to="/projects"
            class="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-medium flex items-center justify-center group"
          >
            View Projects
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </router-link>
          
          <a
            href="/Phearom Ratha Curriculum Vitae (1).pdf"
            class="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-white rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium flex items-center justify-center"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </a>
        </div>
        
     
     
      </div>
      
      <!-- Right Column - Circular Image -->
      <div class="relative flex justify-center lg:justify-end">
        <div class="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <!-- Background effects -->
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10 dark:opacity-20 animate-pulse"></div>
          
          <!-- Outer ring with animation -->
          <div class="absolute inset-0 border-4 border-blue-200 dark:border-blue-900/30 rounded-full animate-spin-slow"></div>
          <div class="absolute inset-4 border-2 border-purple-200 dark:border-purple-900/30 rounded-full animate-spin-slow-reverse"></div>
          
          <!-- Main circular image -->
          <div class="absolute inset-2 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl">
            <img 
              src="/public/Image/photo_2025-12-24_11-05-07.jpg" 
              alt="Alex Morgan" 
              class="w-full h-full object-cover"
            />
          </div>
          
          <!-- Floating dots -->
          <div class="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
          <div class="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full animate-bounce animation-delay-1000"></div>
          <div class="absolute top-8 -right-6 w-3 h-3 bg-green-500 rounded-full animate-bounce animation-delay-500"></div>
        </div>
        

      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Add custom animations
  const style = document.createElement('style')
  style.textContent = `
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    @keyframes spin-slow-reverse {
      from { transform: rotate(0deg); }
      to { transform: rotate(-360deg); }
    }
    
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    
    .animate-spin-slow {
      animation: spin-slow 20s linear infinite;
    }
    
    .animate-spin-slow-reverse {
      animation: spin-slow-reverse 15s linear infinite;
    }
    
    .animate-bounce {
      animation: bounce 2s ease-in-out infinite;
    }
    
    .animation-delay-500 {
      animation-delay: 0.5s;
    }
    
    .animation-delay-1000 {
      animation-delay: 1s;
    }
  `
  document.head.appendChild(style)
})
</script>

<style scoped>
/* Simple slide-up animation */
.animate-slide-up {
  animation: slide-up 0.8s ease-out;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
