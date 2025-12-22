<template>
  <div class="skill-card group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div class="flex justify-between items-start mb-4">
      <div class="text-3xl mb-2" v-html="skill.icon"></div>
      <span class="text-2xl font-bold text-blue-600">{{ skill.level }}%</span>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-3">
      {{ skill.name }}
    </h3>

    <div class="mb-4">
      <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          class="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-in-out"
          :style="{ width: skill.level + '%' }"
        ></div>
      </div>
    </div>

    <p class="text-gray-600 dark:text-gray-400 text-sm">
      {{ skill.description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  skill: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.skill-card {
  transform: translateY(20px);

  transition: transform 0.5s ease, opacity 0.5s ease;
}

.skill-card.group:hover {
  transform: translateY(0px);
  opacity: 1;
}
</style>
