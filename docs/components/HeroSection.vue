<template>
  <!-- ADDED: id="home" so the ScrollSpy can find it -->
  <div id="home" class="h-screen bg-gradient-to-br from-[#eaf4ed] to-[#fdf8f0] font-sans text-[#0a3855] flex flex-col overflow-hidden relative scroll-mt-24">
    
    <!-- Fixed Navigation Bar -->
    <header class="fixed top-0 left-0 w-full pt-4 px-4 md:px-12 z-[100]">
      <nav class="max-w-7xl mx-auto bg-white/80 backdrop-blur-md rounded-full px-8 py-3 flex justify-between items-center shadow-sm border border-slate-100/50">
        
        <!-- Logo -->
        <a href="#home" class="block">
          <img src="/petsy-logo.png" alt="Petsy Logo" class="h-7 w-auto object-contain" />
        </a>

        <!-- Links with Dynamic Active States -->
        <ul class="hidden md:flex items-center gap-2 font-medium text-sm">
          <li>
            <a href="#home" 
               class="px-4 py-2 rounded-full transition-all duration-300"
               :class="activeSection === 'home' ? 'bg-[#2d9c6c]/10 text-[#2d9c6c] font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-[#2d9c6c]'">
              Home
            </a>
          </li>
          <li>
            <a href="#features" 
               class="px-4 py-2 rounded-full transition-all duration-300"
               :class="activeSection === 'features' ? 'bg-[#2d9c6c]/10 text-[#2d9c6c] font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-[#2d9c6c]'">
              Features
            </a>
          </li>
          <li>
            <a href="#how-it-works" 
               class="px-4 py-2 rounded-full transition-all duration-300"
               :class="activeSection === 'how-it-works' ? 'bg-[#2d9c6c]/10 text-[#2d9c6c] font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-[#2d9c6c]'">
              How It Works
            </a>
          </li>
          <li>
            <a href="#why-petsy" 
               class="px-4 py-2 rounded-full transition-all duration-300"
               :class="activeSection === 'why-petsy' ? 'bg-[#2d9c6c]/10 text-[#2d9c6c] font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-[#2d9c6c]'">
              Why Petsy
            </a>
          </li>
          <li>
            <a href="#testimonials" 
               class="px-4 py-2 rounded-full transition-all duration-300"
               :class="activeSection === 'testimonials' ? 'bg-[#2d9c6c]/10 text-[#2d9c6c] font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-[#2d9c6c]'">
              Testimonials
            </a>
          </li>
        </ul>

        <!-- CTA Button -->
        <button class="bg-[#2d9c6c] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#248259] transition-colors flex items-center gap-2">
          Download App <span aria-hidden="true">&rarr;</span>
        </button>
      </nav>
    </header>

    <!-- Main Hero Section -->
    <main class="max-w-7xl w-full mx-auto px-4 md:px-12 flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center min-h-0 z-10 pb-4 pt-24 lg:pt-28">
      
      <!-- Left Column: Typography -->
      <div class="space-y-4 lg:space-y-6">
        <div class="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full text-xs font-bold tracking-widest text-slate-500 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-[#2d9c6c]"></span>
          TRUSTED BY 10,000+ PET PARENTS
        </div>

        <h1 class="text-4xl md:text-5xl lg:text-[3.8rem] font-extrabold leading-[1.05] tracking-tight">
          Everything <br /> Your Pet Loves, <br /> Delivered <br /> Instantly.
        </h1>

        <p class="text-base lg:text-lg text-slate-600 max-w-md leading-relaxed">
          Shop premium pet products with same-day delivery. From vet-approved essentials to gourmet treats, we bring joy to your furry friends in hours, not days.
        </p>

        <div class="flex flex-wrap items-center gap-3 pt-1">
          <button class="bg-[#2d9c6c] text-white px-6 py-3 lg:px-8 lg:py-3.5 rounded-full font-bold text-base lg:text-lg hover:bg-[#248259] transition-colors shadow-lg shadow-[#2d9c6c]/30">
            Shop Now &rarr;
          </button>
          <button class="bg-white text-[#0a3855] px-6 py-3 lg:px-8 lg:py-3.5 rounded-full font-bold text-base lg:text-lg hover:bg-slate-50 transition-colors flex items-center gap-3 shadow-md">
            <div class="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-green-50 flex items-center justify-center text-[#2d9c6c] text-sm">▶</div>
            Watch Demo
          </button>
        </div>
      </div>

      <!-- Right Column: Image -->
      <div class="relative w-full h-full flex justify-center items-end min-h-0">
        <div class="floating-wrapper w-full h-full flex justify-center items-end">
          <img src="/phone-mockup.png" alt="Petsy App in Hand" class="z-10 w-auto max-h-[90%] object-contain drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// SCROLLSPY LOGIC: Tracks which section is currently on screen
const activeSection = ref('home')
let observer = null

onMounted(() => {
  // Grab all main sections by their ID
  const sections = document.querySelectorAll('div[id="home"], section[id]')
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If the section takes up at least 50% of the screen, set it to active!
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, { threshold: 0.5 }) 

  sections.forEach(section => observer.observe(section))
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.floating-wrapper { animation: float-organic 6s ease-in-out infinite; }
@keyframes float-organic {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}
/* This ensures that clicking a link smoothly scrolls down instead of instantly jumping */
html { scroll-behavior: smooth; }
</style>