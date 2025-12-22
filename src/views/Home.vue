<template>
  <div class="animate-fade-in">
    <!-- Hero Section -->
    <section class="py-12 md:py-20">
      <Hero />
    </section>

    <!-- Skills Preview -->
    <section class="py-12 md:py-20 px-4 md:px-12 lg:px-20">
      <!-- Section Header -->
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-white mb-2">
          My <span class="text-blue-600">Skills</span>
        </h2>
        <p class="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto md:mx-0">
          Technologies and tools I work with
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <div
          v-for="skill in allSkills"
          :key="skill.name"
          class="bg-blue-50 dark:bg-blue-900 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow hover:shadow-lg transition-shadow duration-300"
        >
          <div class="text-4xl mb-3" v-html="skill.icon"></div>
          <h3 class="font-semibold text-zinc-800 dark:text-white">{{ skill.name }}</h3>
        </div>
      </div>

      <!-- View All Skills Button -->
      <div class="mt-8 text-center">
        <router-link
          to="/skills"
          class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Details
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="py-12">
     
      <FeaturedProjects />
    </section>
  </div>
</template>

<script setup>
import { skills } from "../data/skills.js";
import { usePortfolioStore } from '../stores/portfolio';
import Hero from '../components/home/Hero.vue';
import FeaturedProjects from '../components/home/FeaturedProjects.vue';

// Use all skills, not filtered
const allSkills = skills;

const store = usePortfolioStore();
</script>
