import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePortfolioStore = defineStore('portfolio', () => {
  // State
  const theme = ref('light')
  const activeSection = ref('home')
  const isLoading = ref(false)
  
  // Projects state
  const projects = ref([
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with cart, payment, and admin dashboard",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Tailwind"],
      image: "/assets/images/project1.jpg",
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team features",
      technologies: ["Vue.js", "Firebase", "Vuex", "CSS3"],
      image: "/assets/images/project2.jpg",
      github: "https://github.com/yourusername/taskapp",
      live: "https://taskapp-demo.com",
      featured: true
    }
  ])

  // Skills state
  const skills = ref([
    { name: "Vue.js", level: 90, category: "frontend", icon: "🎯" },
    { name: "JavaScript", level: 95, category: "frontend", icon: "⚡" },
    { name: "Tailwind CSS", level: 85, category: "frontend", icon: "🎨" },
    { name: "Node.js", level: 80, category: "backend", icon: "🚀" },
    { name: "Git", level: 90, category: "tools", icon: "📦" },
    { name: "UI/UX Design", level: 75, category: "design", icon: "✨" }
  ])

  // Getters
  const featuredProjects = computed(() => projects.value.filter(p => p.featured))
  const frontendSkills = computed(() => skills.value.filter(s => s.category === 'frontend'))
  const backendSkills = computed(() => skills.value.filter(s => s.category === 'backend'))
  
  // Actions
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('portfolio-theme', theme.value)
  }
  
  const setActiveSection = (section) => {
    activeSection.value = section
  }
  
  const addProject = (project) => {
    projects.value.push({ ...project, id: projects.value.length + 1 })
  }

  return {
    theme,
    activeSection,
    isLoading,
    projects,
    skills,
    featuredProjects,
    frontendSkills,
    backendSkills,
    toggleTheme,
    setActiveSection,
    addProject
  }
})