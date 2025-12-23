<template>
  <section class="py-12 px-4 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900 rounded-2xl my-8">
    <!-- Section Header -->
    <div class="max-w-4xl mx-auto text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Featured <span class="text-blue-600">Projects</span>
      </h2>
      <p class="text-gray-600 dark:text-gray-400 text-lg">
        Some of my recent work showcasing my skills and expertise in full-stack development.
      </p>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in projects"
        :key="project.name"
        class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-xl"
      >
        <!-- Project Image -->
        <img
          :src="project.image"
          :alt="project.name"
          class="w-full h-48 object-cover"
        />

        <!-- Project Content -->
        <div class="p-6">
          <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">
            {{ project.name }}
          </h3>

          <p class="text-gray-600 dark:text-gray-400 mb-4 text-sm">
            {{ project.description }}
          </p>

          <!-- Tech Tags -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Buttons -->
          <div class="flex items-center gap-3">
            <!-- Live Demo -->
            <a
              :href="project.link"
              target="_blank"
              class="px-5 py-2 text-sm font-semibold rounded-lg
                     bg-blue-600 text-white
                     hover:bg-blue-700 transition"
            >
              Live Demo
            </a>

            <!-- GitHub -->
            <a
              v-if="project.git"
              :href="project.git"
              target="_blank"
              class="px-5 py-2 text-sm font-semibold rounded-lg
                     border border-gray-300 dark:border-gray-600
                     text-gray-700 dark:text-gray-300
                     hover:bg-gray-100 dark:hover:bg-gray-700 
                     transition"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects } from '../../stores/projects'
</script>
