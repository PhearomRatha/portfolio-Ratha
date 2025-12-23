<template>
  <div class="animate-fade-in">
    <!-- Hero Section -->
    <section class="py-12">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
          My <span class="text-primary-600">Projects</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
          A collection of my work that showcases my problem-solving abilities and technical skills
        </p>
      </div>
    </section>
    <ProjectCard />
  

  

    <!-- CTA Section -->
    <section class="py-12 text-center">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Have a project in mind?
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-8">
          I'm always open to discussing new opportunities and interesting projects.
        </p>
        <router-link 
          to="/contact"
          class="inline-flex items-center px-8 py-4 bg-primary-600 text-gray-[800] rounded-lg hover:bg-primary-700 transition-colors text-lg font-semibold"
        >
          Get In Touch
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { usePortfolioStore } from '../stores/portfolio'
import ProjectCard from '../components/home/FeaturedProjects.vue'

const store = usePortfolioStore()
</script>