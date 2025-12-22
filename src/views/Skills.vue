<template>
  <div class="animate-fade-in">
    <!-- Hero Section -->
    <section class="py-12">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
          My <span class="text-primary-600">Skills</span> & Expertise
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
          A comprehensive overview of my technical abilities and professional competencies
        </p>
      </div>
    </section>

    <!-- Skills by Category -->
    <section class="py-8 px-[100px]">
      <!-- Frontend Skills -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
          <span class="mr-3"></span> Frontend Development
        </h2>
       <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <SkillCard 
            v-for="skill in frontendSkills" 
            :key="skill.name"
            :skill="skill"
          />
        </div>
      </div>

      <!-- Backend Skills -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
          <span class="mr-3">🚀</span> Backend Development
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <SkillCard 
            v-for="skill in backendSkills" 
            :key="skill.name"
            :skill="skill"
          />
        </div>
      </div>

      <!-- Tools & Others -->
      <div>
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
          <span class="mr-3">🛠️</span> Tools & Others
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <SkillCard 
            v-for="skill in otherSkills" 
            :key="skill.name"
            :skill="skill"
          />
        </div>
      </div>
    </section>

    <!-- Skills Summary -->
<section class="py-12 my-8">
  <div class="max-w-3xl mx-auto">
    <div class="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 text-center transform transition-transform duration-300 hover:-translate-y-2">
      
      <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
        Continuous Learning Journey
      </h2>

      <p class="text-gray-600 dark:text-gray-400 mb-6">
        I believe in constantly updating my skills and staying current with the latest technologies.
        Currently learning about advanced Vue 3 patterns and cloud architecture.
      </p>

      <!-- Skills / Tools as cards -->
      <div class="flex flex-wrap justify-center gap-4">
        <span class="px-4 py-2 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold rounded-xl shadow hover:shadow-md transform transition hover:-translate-y-1">
          Spring
        </span>
        <span class="px-4 py-2 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 font-semibold rounded-xl shadow hover:shadow-md transform transition hover:-translate-y-1">
          Node
        </span>
        <span class="px-4 py-2 bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 font-semibold rounded-xl shadow hover:shadow-md transform transition hover:-translate-y-1">
          Express
        </span>
      </div>

    </div>
  </div>
</section>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { skills } from '../data/skills.js'  // <-- import your skills data
import SkillCard from '../components/skills/SkillCard.vue'

// Filter skills by category
const frontendSkills = computed(() => 
  skills.filter(skill => skill.category === 'frontend')
)

const backendSkills = computed(() => 
  skills.filter(skill => skill.category === 'backend')
)

const otherSkills = computed(() => 
  skills.filter(skill => !['frontend', 'backend'].includes(skill.category))
)
</script>
