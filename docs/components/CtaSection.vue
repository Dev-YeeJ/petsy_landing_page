<template>
  <section class="w-full bg-white font-sans text-white py-12 lg:py-24 px-4 md:px-12 relative overflow-hidden">
    <div class="max-w-7xl mx-auto bg-gradient-to-br from-[#0a3855] via-[#0f5b49] to-[#2d9c6c] rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
      
      <svg class="absolute top-10 left-20 w-16 h-16 text-white/5 -rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C9.5 2 7.5 4 7.5 6.5S9.5 11 12 11s4.5-2 4.5-4.5S14.5 2 12 2zm-5 4.5c0-1.5-1-2.5-2.5-2.5S2 5 2 6.5s1 2.5 2.5 2.5S7 8 7 6.5zm10 0c0-1.5-1-2.5-2.5-2.5S12 5 12 6.5s1 2.5 2.5 2.5S17 8 17 6.5zm-5 6.5c-3.5 0-6.5 2.5-7.5 6h15c-1-3.5-4-6-7.5-6z"/></svg>
      <svg class="absolute bottom-20 right-16 w-24 h-24 text-white/5 rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C9.5 2 7.5 4 7.5 6.5S9.5 11 12 11s4.5-2 4.5-4.5S14.5 2 12 2zm-5 4.5c0-1.5-1-2.5-2.5-2.5S2 5 2 6.5s1 2.5 2.5 2.5S7 8 7 6.5zm10 0c0-1.5-1-2.5-2.5-2.5S12 5 12 6.5s1 2.5 2.5 2.5S17 8 17 6.5zm-5 6.5c-3.5 0-6.5 2.5-7.5 6h15c-1-3.5-4-6-7.5-6z"/></svg>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <div class="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
          <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Happy pet parent" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
            <span class="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-1">Join the Family</span>
            <h4 class="text-2xl md:text-3xl font-extrabold text-white">10,000+ Happy Pets</h4>
          </div>
        </div>

        <div class="space-y-8">
          <div>
            <h2 class="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              Your Pet Deserves <span class="text-[#86efac]">the Best.</span>
            </h2>
            <p class="text-white/80 text-sm md:text-base leading-relaxed max-w-lg">
              Download Petsy today and join thousands of pet parents who have discovered the easiest way to keep their furry friends happy, healthy, and spoiled with love.
            </p>
          </div>

          <div class="flex flex-wrap gap-4">
            <button class="bg-white text-[#0a3855] px-5 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform shadow-lg">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.8 1.95.12 3.32.96 4.09 2.29-3.23 1.85-2.69 5.92.36 7.15-.75 1.58-1.58 3.01-3.03 3.53zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
              <div class="text-left">
                <div class="text-[0.6rem] font-bold leading-none mb-1 text-slate-500">Download on the</div>
                <div class="text-sm font-bold leading-none">App Store</div>
              </div>
            </button>
            <button class="bg-white text-[#0a3855] px-5 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform shadow-lg">
              <svg class="w-6 h-6 text-[#2d9c6c]" fill="currentColor" viewBox="0 0 24 24"><path d="M3 20.5V3.5C3 2.67 3.67 2 4.5 2c.26 0 .52.07.74.2l13.56 7.82c.8.46.8 1.5 0 1.96L5.24 19.8A1.49 1.49 0 014.5 20c-.83 0-1.5-.67-1.5-1.5zm1.5-16.1v13.2l6.23-6.6-6.23-6.6z"/></svg>
              <div class="text-left">
                <div class="text-[0.6rem] font-bold leading-none mb-1 text-slate-500">Get it on</div>
                <div class="text-sm font-bold leading-none">Google Play</div>
              </div>
            </button>
          </div>

          <div class="flex flex-wrap items-center gap-6 text-sm text-[#86efac] font-medium pt-2">
            <span class="flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg> Secure</span>
            <span class="flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg> Free Delivery</span>
            <span class="flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg> Vet Approved</span>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>