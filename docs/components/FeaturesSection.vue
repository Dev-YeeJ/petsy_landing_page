<template>
  <!-- CHANGED: Removed lg:h-screen and overflow-hidden. Adjusted py to give equal top/bottom breathing room -->
  <section id="features" ref="sectionRef" class="w-full bg-white font-sans text-[#0a3855] flex flex-col justify-center py-20 lg:py-24 scroll-mt-0">
    <div class="max-w-7xl w-full mx-auto px-4 md:px-12 flex-1 flex flex-col justify-center">
      
      <!-- Section Header -->
      <div 
        class="text-center max-w-3xl mx-auto mb-12 xl:mb-16 transition-all duration-1000 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <h3 class="text-[#2d9c6c] text-xs xl:text-sm font-bold tracking-widest uppercase mb-3 xl:mb-4">
          Premium Features
        </h3>
        <h2 class="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-4 xl:mb-5 tracking-tight leading-tight">
          Everything You Need to Spoil <br class="hidden md:block" />
          <span class="text-[#2d9c6c]">Your Pet</span>
        </h2>
        <p class="text-sm xl:text-base text-slate-500 max-w-2xl mx-auto px-4">
          From lightning-fast delivery to personalized product suggestions, we have got every detail covered for your furry family members.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
        
        <!-- Feature Card Loop -->
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="bg-white rounded-2xl xl:rounded-[2rem] p-6 xl:p-8 border border-slate-100 shadow-lg shadow-slate-200/40 transition-all duration-300 ease-out cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2d9c6c]/10 hover:border-[#2d9c6c]/20 active:scale-95 flex flex-col"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'"
          :style="{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }"
        >
          <!-- Icon Container -->
          <div class="w-12 h-12 xl:w-14 xl:h-14 rounded-xl xl:rounded-2xl bg-green-50 flex items-center justify-center text-[#2d9c6c] mb-4 xl:mb-6 shrink-0">
            <span v-html="feature.icon" class="w-6 h-6 xl:w-7 xl:h-7"></span>
          </div>

          <!-- Text Content -->
          <h4 class="text-lg xl:text-xl font-bold mb-2">{{ feature.title }}</h4>
          <p class="text-sm xl:text-base text-slate-500 leading-relaxed flex-1">
            {{ feature.description }}
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

const features = [
  {
    title: 'Fast Delivery',
    description: "Get your pet essentials delivered the same day. No more last-minute store runs when you're out of treats or food.",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`
  },
  {
    title: 'Tailored Suggestions',
    description: "Discover the perfect items for your pet based on their unique breed, age, and dietary needs, curated from our wide catalog.",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>`
  },
  {
    title: 'Trusted Products',
    description: "Every product is hand-picked and verified. We partner with top brands to ensure quality and safety for your furry friends.",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`
  },
  {
    title: 'Secure Checkout',
    description: "Shop with confidence using our encrypted payment system. Multiple payment options including Apple Pay and Google Pay.",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>`
  },
  {
    title: 'Real-Time Tracking',
    description: "Track your order every step of the way. Know exactly when your pet's goodies will arrive at your door.",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`
  },
  {
    title: 'Vet-Approved Essentials',
    description: "All health and wellness products are reviewed by licensed veterinarians. Your pet's health is our top priority.",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>`
  }
]
</script>