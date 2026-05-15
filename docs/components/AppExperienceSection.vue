<template>
  <section id="app-experience" ref="sectionRef" class="w-full bg-white font-sans text-[#0a3855] flex flex-col justify-center py-20 lg:py-28 scroll-mt-0 overflow-hidden">
    <div class="max-w-7xl w-full mx-auto px-4 md:px-12">
      
      <div 
        class="text-center max-w-3xl mx-auto mb-16 xl:mb-24 transition-all duration-1000 ease-out z-10 relative"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <h3 class="text-[#518ba8] text-xs xl:text-sm font-bold tracking-widest uppercase mb-4">
          App Experience
        </h3>
        <h2 class="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-5 tracking-tight leading-tight text-[#164e63]">
          A <span class="text-[#2d9c6c]">Beautiful App</span> for Beautiful <br class="hidden md:block" /> Pets
        </h2>
        <p class="text-sm xl:text-base text-slate-500 max-w-2xl mx-auto">
          Designed with love for pet parents. Every screen crafted to make shopping for your furry friends a delightful experience.
        </p>
      </div>

      <div 
        class="relative w-full max-w-4xl mx-auto h-[450px] md:h-[600px] flex justify-center items-center transition-all duration-1000 delay-300 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-24 scale-95'"
      >
        
        <div class="absolute left-4 lg:left-12 top-12 w-[160px] md:w-[240px] aspect-[9/19] bg-[#0f172a] rounded-[2rem] md:rounded-[2.5rem] shadow-2xl p-1.5 md:p-2 -rotate-12 translate-y-8 float-slow">
          <div class="relative w-full h-full bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-slate-800">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 md:h-6 bg-[#0f172a] rounded-b-xl md:rounded-b-2xl z-10"></div>
            <img src="/Details.png" alt="Petsy Screen 1" class="w-full h-full object-cover bg-slate-50" />
          </div>
        </div>

        <div class="absolute right-4 lg:right-12 top-8 w-[160px] md:w-[240px] aspect-[9/19] bg-[#0f172a] rounded-[2rem] md:rounded-[2.5rem] shadow-2xl p-1.5 md:p-2 rotate-12 translate-y-12 float-medium z-10">
          <div class="relative w-full h-full bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-slate-800">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 md:h-6 bg-[#0f172a] rounded-b-xl md:rounded-b-2xl z-10"></div>
            <img src="/sign_in.png" alt="Petsy Screen 3" class="w-full h-full object-cover bg-slate-50" />
          </div>
        </div>

        <div class="absolute z-20 w-[190px] md:w-[280px] aspect-[9/19] bg-[#0f172a] rounded-[2rem] md:rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(45,156,108,0.4)] p-1.5 md:p-2 float-fast border border-slate-700">
          <div class="relative w-full h-full bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-slate-800">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 md:h-6 bg-[#0f172a] rounded-b-xl md:rounded-b-2xl z-10"></div>
            <img src="/Cart.png" alt="Petsy Screen 2" class="w-full h-full object-cover bg-slate-50" />
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

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true
      observer.disconnect()
    }
  }, { threshold: 0.2 }) 
  
  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<style scoped>
/* Individual floating animations for the 3 phones to make it look organic */
.float-slow {
  animation: float-organic 8s ease-in-out infinite;
}
.float-medium {
  animation: float-organic 7s ease-in-out infinite 1s;
}
.float-fast {
  animation: float-organic 6s ease-in-out infinite 2s;
}

@keyframes float-organic {
  0%   { transform: translateY(0px) rotate(var(--tw-rotate, 0)); }
  50%  { transform: translateY(-20px) rotate(var(--tw-rotate, 0)); }
  100% { transform: translateY(0px) rotate(var(--tw-rotate, 0)); }
}
</style>