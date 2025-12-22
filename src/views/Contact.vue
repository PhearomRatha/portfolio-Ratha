<template>
  <div class="animate-fade-in">
    <!-- Animated Background Elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div class="absolute top-1/4 left-10 w-72 h-72 bg-primary-300/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl animate-float-delayed"></div>
    </div>

  

    <!-- Enhanced Contact Content -->
    <section class="py-8 relative">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Contact Cards Section -->
        <div class="mb-16">
          <!-- Section Header -->
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              How to Reach Me
            </h2>
            <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose your preferred way to connect. I'm always excited to discuss new opportunities!
            </p>
          </div>

          <!-- Enhanced Contact Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <!-- Location Card with Map Effect -->
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-br from-primary-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div class="relative bg-white dark:bg-gray-900 rounded-xl p-8 border-2 border-transparent group-hover:border-primary-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <!-- Animated Icon -->
                <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900/30 dark:to-blue-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-blue-500 flex items-center justify-center text-white">
                    <span class="text-2xl">📍</span>
                  </div>
                </div>
                
                <!-- Content -->
                <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                  Location
                </h3>
                <div class="text-center">
                  <p class="text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">
                    Phnom Penh, Cambodia
                  </p>
                  <div class="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-sm mt-2">
                    <span class="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
                    UTC+7 Timezone
                  </div>
                </div>
                
                <!-- Hover Effect -->
                <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  <span class="text-primary-500 animate-bounce">🌏</span>
                </div>
              </div>
            </div>

            <!-- Email Card with Wave Effect -->
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div class="relative bg-white dark:bg-gray-900 rounded-xl p-8 border-2 border-transparent group-hover:border-green-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <!-- Animated Icon -->
                <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div class="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white animate-pulse">
                    <span class="text-2xl">📧</span>
                  </div>
                </div>
                
                <!-- Content -->
                <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                  Email
                </h3>
                <div class="text-center">
                  <p class="text-gray-700 dark:text-gray-300 text-lg font-medium mb-3 break-all">
                    rathaphearom222@gmail.com
                  </p>
                  <div class="space-y-2">
                    <div class="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm">
                      <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                      Within 24 hours response
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">
                      Average response time: 2-4 hours
                    </div>
                  </div>
                </div>
                
                <!-- Action Button -->
                <a 
                  href="mailto:rathaphearom222@gmail.com" 
                  class="mt-6 block w-full py-3 text-center rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  Send Email
                </a>
              </div>
            </div>

            <!-- Availability Card with Particles Effect -->
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div class="relative bg-white dark:bg-gray-900 rounded-xl p-8 border-2 border-transparent group-hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <!-- Animated Icon -->
                <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div class="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                    <span class="text-2xl">💼</span>
                  </div>
                </div>
                
                <!-- Content -->
                <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                  Availability
                </h3>
                <div class="space-y-4">
                  <div class="flex items-center bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-3">
                      <span class="text-white text-sm">🚀</span>
                    </div>
                    <span class="text-gray-800 dark:text-gray-300 font-medium">Frontend / Full-stack roles</span>
                  </div>
                  <div class="flex items-center bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mr-3">
                      <span class="text-white text-sm">🎓</span>
                    </div>
                    <span class="text-gray-800 dark:text-gray-300 font-medium">Student collaborations</span>
                  </div>
                  <div class="flex items-center bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mr-3">
                      <span class="text-white text-sm">💡</span>
                    </div>
                    <span class="text-gray-800 dark:text-gray-300 font-medium">Open to new challenges</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Enhanced Social Links Section -->
        <div class="relative max-w-4xl mx-auto">
          <!-- Decorative Background -->
          <div class="absolute -inset-4 bg-gradient-to-r from-primary-500/5 via-transparent to-blue-500/5 rounded-3xl blur-xl"></div>
          
          <div class="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-12 border-2 border-gray-200/50 dark:border-gray-800/50">
            <!-- Section Header -->
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Connect With Me
              </h2>
              <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Let's stay connected! Reach out through any platform you prefer.
              </p>
            </div>

            <!-- Social Links Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                class="group relative"
              >
                <!-- Glow Effect -->
                <div class="absolute -inset-0.5 bg-gradient-to-br from-primary-400 to-blue-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                
                <!-- Card -->
                <div class="relative bg-white dark:bg-gray-800 rounded-xl p-8 flex flex-col items-center justify-center border-2 border-gray-200 dark:border-gray-700 group-hover:border-transparent transition-all duration-500 group-hover:scale-105">
                  
                  <!-- Animated Icon Container -->
                  <div class="relative mb-6">
                    <div class="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-blue-500 blur group-hover:blur-lg opacity-0 group-hover:opacity-50 transition duration-500"></div>
                    <div 
                      class="relative w-20 h-20 rounded-full flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12"
                      :class="social.color"
                    >
                      <div v-html="social.icon" class="transform group-hover:scale-125 transition-transform duration-500"></div>
                    </div>
                  </div>
                  
                  <!-- Label -->
                  <span class="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition duration-300 mb-2">
                    {{ social.name }}
                  </span>
                  
                  <!-- Status Indicator -->
                  <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition duration-300">
                    <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                    Click to connect
                  </div>
                  
                  <!-- Hover Arrow -->
                  <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300">
                    <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>

            <!-- Stats Bar -->
            <div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 animate-count" data-count="100">100</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider mt-2">Reply Rate</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 animate-count" data-count="24">24</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider mt-2">Hour Response</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 animate-count" data-count="4">4</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider mt-2">Ways to Connect</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

   
  </div>
</template>

<script setup>
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/PhearomRatha",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7.024 2.31a9 9 0 0 1 2.125 1.046A11.4 11.4 0 0 1 12 3c.993 0 1.951.124 2.849.355a9 9 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.5 9.5 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a4 4 0 0 1 .333-1.581a9.5 9.5 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.73-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z"/></g></svg>`,
    color: "bg-gray-900 text-white"
  },
  {
    name: "Email",
    url: "mailto:rathaphearom222@gmail.com",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M13 19c0-3.31 2.69-6 6-6c1.1 0 2.12.3 3 .81V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h9.09c-.05-.33-.09-.66-.09-1M4 8V6l8 5l8-5v2l-8 5zm13.75 14.16l-2.75-3L16.16 18l1.59 1.59L21.34 16l1.16 1.41z"/></svg>`,
    color: "bg-gradient-to-br from-green-500 to-teal-500 text-white"
  },
  {
    name: "Telegram",
    url: "https://t.me/PhaaromRatha",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><defs><linearGradient id="SVGuySfwdaH" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2aabee"/><stop offset="100%" stop-color="#229ed9"/></linearGradient></defs><path fill="url(#SVGuySfwdaH)" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.04 128.04 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51s-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0"/><path fill="#fff" d="M57.94 126.648q55.98-24.384 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072"/></svg>`,
    color: "bg-gradient-to-br from-blue-500 to-cyan-500 text-white"
  },
  {
    name: "Phone",
    url: "tel:0887886959",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/></svg>`,
    color: "bg-gradient-to-br from-purple-500 to-pink-500 text-white"
  },
];
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(20px) rotate(-5deg);
  }
}

@keyframes gradient-x {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-position: right center;
  }
}

@keyframes count-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
}

.animate-bounce-subtle {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.animate-gradient-x {
  background-size: 200% auto;
  animation: gradient-x 3s ease infinite;
}

.animate-count {
  animation: count-up 0.8s ease-out forwards;
}

/* Custom hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:-rotate-12 {
  transform: rotate(-12deg);
}
</style>