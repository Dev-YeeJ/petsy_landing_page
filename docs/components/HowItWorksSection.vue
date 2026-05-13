<template>
  <section id="how-it-works" ref="sectionRef" class="min-h-screen w-full bg-gradient-to-b from-white to-[#fdf8f0]/50 font-sans text-[#0a3855] flex flex-col justify-center py-20 lg:py-28 scroll-mt-0">
    <div class="max-w-7xl w-full mx-auto px-4 md:px-12">
      
      <!-- Section Header -->
      <div 
        class="text-center max-w-3xl mx-auto mb-16 xl:mb-24 transition-all duration-1000 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <div class="inline-block bg-green-50 px-4 py-1.5 rounded-full mb-4 xl:mb-5">
          <h3 class="text-[#2d9c6c] text-xs xl:text-sm font-bold tracking-widest uppercase">
            Simple Steps
          </h3>
        </div>
        <h2 class="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-4 xl:mb-5 tracking-tight leading-tight">
          Getting Started Is <span class="text-[#2d9c6c]">Effortlessly Easy</span>
        </h2>
        <p class="text-sm xl:text-base text-slate-500 max-w-2xl mx-auto px-4">
          Three simple steps between your pet and their happiness. No fuss, no hassle, just joy delivered.
        </p>
      </div>

      <!-- Steps Grid -->
      <div class="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
        
        <!-- Desktop Connecting Line -->
        <div class="hidden lg:block absolute top-[120px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[#2d9c6c]/20 to-transparent -z-10"></div>
        
        <!-- Step Loop Wrapper (Handles Scroll Entrance Animation) -->
        <div 
          v-for="(step, index) in steps" 
          :key="index"
          class="transition-all duration-700 ease-out"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
          :style="{ transitionDelay: isVisible ? `${index * 200}ms` : '0ms' }"
        >
          
          <!-- Inner Content (Handles the Vue Hover Logic) -->
          <div 
            @mouseenter="hoveredStep = index"
            @mouseleave="hoveredStep = null"
            class="relative flex flex-col items-center text-center transition-all duration-500 ease-out cursor-pointer group"
            :class="hoveredStep !== null && hoveredStep !== index ? 'opacity-40 grayscale-[40%] scale-[0.97] blur-[1px]' : 'opacity-100 scale-100 blur-0'"
          >
            <!-- Number Badge (Changes color when its card is active!) -->
            <div 
              class="w-10 h-10 rounded-xl font-bold flex items-center justify-center shadow-lg mb-6 z-10 transition-all duration-300 group-hover:-translate-y-2"
              :class="hoveredStep === index ? 'bg-[#2d9c6c] text-white shadow-[#2d9c6c]/40 scale-110' : 'bg-white text-[#0a3855] border-2 border-slate-100 shadow-slate-200/50'"
            >
              0{{ index + 1 }}
            </div>

            <!-- Image Container -->
            <div 
              class="w-full max-w-[280px] aspect-[5/4] bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 flex items-center justify-center mb-8 border transition-all duration-500 overflow-hidden"
              :class="hoveredStep === index ? 'border-[#2d9c6c]/30 shadow-2xl shadow-[#2d9c6c]/15 -translate-y-2' : 'border-slate-50'"
            >
              <img 
                :src="step.image" 
                :alt="step.title" 
                class="w-full h-full object-cover transition-transform duration-700"
                :class="hoveredStep === index ? 'scale-110' : 'scale-100'"
              />
            </div>

            <!-- Text Content -->
            <h4 class="text-xl xl:text-2xl font-bold mb-3 transition-colors duration-300" :class="hoveredStep === index ? 'text-[#2d9c6c]' : 'text-[#0a3855]'">
              {{ step.title }}
            </h4>
            <p class="text-sm xl:text-base text-slate-500 leading-relaxed max-w-[280px]">
              {{ step.description }}
            </p>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)

// Vue Logic State: Tracks which card is currently being hovered
const hoveredStep = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true
      observer.disconnect()
    }
  }, { threshold: 0.2 }) 

  if (sectionRef.value) observer.observe(sectionRef.value)
})

const steps = [
  {
    title: 'Browse Products',
    description: 'Explore thousands of premium pet products curated just for your furry friend. Filter by pet type, brand, or category.',
    image: 'https://readdy.ai/api/search-image?query=Modern%203D%20illustration%20of%20person%20browsing%20pet%20products%20on%20smartphone%20cute%20minimalist%20style%20soft%20pastel%20colors%20green%20and%20cream%20tones%20clean%20white%20background&width=500&height=400&seq=12&orientation=landscape'
  },
  {
    title: 'Add to Cart',
    description: 'Select your pet\'s favorites with one tap. Our smart cart suggests complementary items you might need.',
    image: 'https://readdy.ai/api/search-image?query=Modern%203D%20illustration%20of%20shopping%20cart%20filled%20with%20pet%20products%20and%20supplies%20cute%20minimalist%20style%20soft%20pastel%20colors%20green%20and%20cream%20tones%20clean%20white%20background&width=500&height=400&seq=13&orientation=landscape'
  },
  {
    title: 'Get Fast Delivery',
    description: 'Sit back and relax. Your order arrives at your door within hours, with real-time tracking every step of the way.',
    image: 'https://readdy.ai/api/search-image?query=Modern%203D%20illustration%20of%20delivery%20person%20handing%20package%20with%20pet%20supplies%20to%20happy%20dog%20owner%20cute%20minimalist%20style%20soft%20pastel%20colors%20green%20and%20cream%20tones%20clean%20white%20background&width=500&height=400&seq=14&orientation=landscape'
  }
]
</script>