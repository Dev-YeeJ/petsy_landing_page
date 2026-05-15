<template>
  <section id="why-petsy" ref="sectionRef" class="w-full bg-[#fafaf9] font-sans text-[#0a3855] flex flex-col justify-center py-20 lg:py-24 scroll-mt-0">
    <div class="max-w-7xl w-full mx-auto px-4 md:px-12">
      
      <div 
        class="text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <h3 class="text-[#2d9c6c] text-xs xl:text-sm font-bold tracking-widest uppercase mb-4">
          Why Choose Us
        </h3>
        <h2 class="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-5 tracking-tight leading-tight">
          Trusted by <span class="text-[#2d9c6c] italic font-serif">Pet Parents</span> <br /> Everywhere
        </h2>
        <p class="text-sm xl:text-base text-slate-500 max-w-2xl mx-auto">
          Join thousands of happy pet owners who have made Petsy their go-to for everything their furry friends need.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-stretch">
        
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="bg-white rounded-3xl p-6 xl:p-8 flex flex-col items-center justify-center text-center shadow-lg shadow-slate-200/40 border border-slate-50 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-[#2d9c6c]/10 h-full w-full"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'"
          :style="{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }"
        >
          <div class="w-14 h-14 rounded-full bg-[#2d9c6c]/10 text-[#2d9c6c] flex items-center justify-center mb-4 xl:mb-6 shrink-0">
            <span v-html="stat.icon" class="w-6 h-6"></span>
          </div>
          
          <h4 class="text-3xl xl:text-4xl font-black mb-1 xl:mb-2 tracking-tight text-balance">
            {{ stat.value }}
          </h4>
          
          <p class="text-xs xl:text-sm font-medium text-slate-500">
            {{ stat.label }}
          </p>
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

const stats = [
  { value: '10k+', label: 'Happy Pet Owners', icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>` },
  { value: 'Same-Day', label: 'Delivery Available', icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>` },
  { value: '500+', label: 'Trusted Products', icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>` },
  { value: '4.9', label: 'App Store Rating', icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>` }
]
</script>