<template>
  <section id="testimonials" ref="sectionRef" class="w-full bg-[#fafaf9] font-sans text-[#0a3855] flex flex-col justify-center py-20 lg:py-24 scroll-mt-0">
    <div class="max-w-7xl w-full mx-auto px-4 md:px-12">
      
      <!-- Section Header -->
      <div 
        class="text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <div class="flex items-center justify-center gap-2 mb-4">
          <span class="w-2 h-2 rotate-45 bg-[#2d9c6c]"></span>
          <h3 class="text-[#2d9c6c] text-xs xl:text-sm font-bold tracking-widest uppercase">
            What Pet Parents Say
          </h3>
          <span class="w-2 h-2 rotate-45 bg-[#2d9c6c]"></span>
        </div>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
        
        <div 
          v-for="(review, index) in reviews" 
          :key="index"
          class="relative bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/40 border border-slate-50 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-[#2d9c6c]/10"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'"
          :style="{ transitionDelay: isVisible ? `${index * 200}ms` : '0ms' }"
        >
          <!-- Background Quote Icon -->
          <svg class="absolute top-6 right-6 w-12 h-12 text-slate-100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>

          <!-- User Info -->
          <div class="flex items-center gap-4 mb-6 relative z-10">
            <img :src="review.image" :alt="review.name" class="w-12 h-12 rounded-full object-cover shadow-sm border border-slate-100" />
            <div>
              <h4 class="font-bold text-sm xl:text-base">{{ review.name }}</h4>
              <p class="text-xs text-[#2d9c6c] font-medium">{{ review.title }}</p>
            </div>
          </div>

          <!-- Stars -->
          <div class="flex gap-1 mb-4 relative z-10">
            <svg v-for="i in 5" :key="i" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          </div>

          <!-- Review Text -->
          <p class="text-sm xl:text-base text-slate-500 leading-relaxed relative z-10">
            "{{ review.text }}"
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

const reviews = [
  {
    name: 'Sarah Mitchell',
    title: 'Dog Mom to Bella',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Petsy has completely changed how I shop for Bella. Same-day delivery is a lifesaver when I run out of food unexpectedly. The app is so easy to use!'
  },
  {
    name: 'James Cooper',
    title: 'Cat Dad to Whiskers',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'The tailored suggestions are spot on. Whiskers is picky, but Petsy always suggests products he actually loves. Vet-approved labels give me peace of mind too.'
  },
  {
    name: 'Emily & Tom Reed',
    title: 'Parents to Max',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'We have tried many pet apps, but Petsy is on another level. The tracking feature lets us know exactly when Max\'s treats will arrive. Absolutely love it!'
  }
]
</script>