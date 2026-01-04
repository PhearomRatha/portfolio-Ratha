<template>
  <div class="min-h-[70vh] flex items-center py-10">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto px-4"
    >

      <!-- IMAGE (TOP ON MOBILE, RIGHT ON DESKTOP) -->
      <div class="order-1 lg:order-2 flex justify-center">
        <div class="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96">
          
          <!-- Glow -->
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10 animate-pulse"></div>

          <!-- Rings -->
          <div class="absolute inset-0 border-4 border-blue-200 dark:border-blue-900/30 rounded-full animate-spin-slow"></div>
          <div class="absolute inset-4 border-2 border-purple-200 dark:border-purple-900/30 rounded-full animate-spin-slow-reverse"></div>

          <!-- Image -->
          <div class="absolute inset-2 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl">
            <img
              src="/public/Image/profile.png"
              alt="Ratha"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Dots -->
          <div class="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
          <div class="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full animate-bounce animation-delay-1000"></div>
        </div>
      </div>

      <!-- TEXT (BOTTOM ON MOBILE, LEFT ON DESKTOP) -->
      <div class="order-2 lg:order-1 text-center lg:text-left">

        <!-- Badge -->
        <div class="mb-4 inline-flex">
          <span
            class="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clip-rule="evenodd"
              />
            </svg>
            Open to new opportunities
          </span>
        </div>

        <!-- Title -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-zinc-900 dark:text-white">
          Hi, I'm RATHA
        </h1>

        <!-- Subtitle -->
        <div class="relative inline-block mb-4">
          <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Developer
            </span>
          </h2>
          <div class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        <!-- Description -->
        <p class="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
          I’m passionate about learning new things and growing in
          <span class="font-medium text-blue-600 dark:text-blue-400">
            web development
          </span>.
          I enjoy building modern websites and improving my skills through real projects.
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <router-link
            to="/projects"
            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            View Projects
          </router-link>

          <a
            href="/Phearom Ratha Curriculum Vitae (1).pdf"
            class="px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:border-blue-500 transition font-medium"
          >
            Download CV
          </a>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes spin-slow-reverse {
      from { transform: rotate(0deg); }
      to { transform: rotate(-360deg); }
    }
    .animate-spin-slow {
      animation: spin-slow 20s linear infinite;
    }
    .animate-spin-slow-reverse {
      animation: spin-slow-reverse 15s linear infinite;
    }
    .animation-delay-1000 {
      animation-delay: 1s;
    }
  `;
  document.head.appendChild(style);
});
</script>
