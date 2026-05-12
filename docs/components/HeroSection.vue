<template>
  <!-- CHANGED: min-h-screen is now h-screen to strictly lock the height and prevent scrolling -->
  <div class="h-screen bg-gradient-to-br from-[#eaf4ed] to-[#fdf8f0] font-sans text-[#0a3855] flex flex-col overflow-hidden relative">
    
    <!-- Floating Navigation Bar (Reduced top padding slightly) -->
    <header class="pt-4 px-4 md:px-12 shrink-0 z-50">
      <nav class="max-w-7xl mx-auto bg-white/80 backdrop-blur-md rounded-full px-8 py-3.5 flex justify-between items-center shadow-sm">
        
        <!-- Logo -->
        <a href="/" class="block">
          <img src="/petsy-logo.png" alt="Petsy Logo" class="h-7 w-auto object-contain" />
        </a>

        <!-- Links -->
        <ul class="hidden md:flex gap-8 font-medium text-sm">
          <li><a href="#" class="hover:text-[#2d9c6c] transition-colors">Home</a></li>
          <li><a href="#" class="hover:text-[#2d9c6c] transition-colors">Features</a></li>
          <li><a href="#" class="hover:text-[#2d9c6c] transition-colors">Why Petsy</a></li>
          <li><a href="#" class="hover:text-[#2d9c6c] transition-colors">Testimonials</a></li>
          <li><a href="#" class="hover:text-[#2d9c6c] transition-colors">How It Works</a></li>
        </ul>

        <!-- CTA Button -->
        <button class="bg-[#2d9c6c] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#248259] transition-colors flex items-center gap-2">
          Download App <span aria-hidden="true">&rarr;</span>
        </button>
      </nav>
    </header>

    <!-- Main Hero Section (min-h-0 allows the grid to shrink inside the flex container) -->
    <main class="max-w-7xl w-full mx-auto px-4 md:px-12 flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center min-h-0 z-10 pb-4">
      
      <!-- Left Column: Typography & Buttons (Tightened spacing) -->
      <div class="space-y-4 lg:space-y-6">
        <!-- Trust Badge -->
        <div class="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full text-xs font-bold tracking-widest text-slate-500 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-[#2d9c6c]"></span>
          TRUSTED BY 10,000+ PET PARENTS
        </div>

        <!-- Headline -->
        <h1 class="text-4xl md:text-5xl lg:text-[3.8rem] font-extrabold leading-[1.05] tracking-tight">
          Everything <br />
          Your Pet Loves, <br />
          Delivered <br />
          Instantly.
        </h1>

        <!-- Subheadline -->
        <p class="text-base lg:text-lg text-slate-600 max-w-md leading-relaxed">
          Shop premium pet products with same-day delivery. From vet-approved essentials to gourmet treats, we bring joy to your furry friends in hours, not days.
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-wrap items-center gap-3 pt-1">
          <button class="bg-[#2d9c6c] text-white px-6 py-3 lg:px-8 lg:py-3.5 rounded-full font-bold text-base lg:text-lg hover:bg-[#248259] transition-colors flex items-center gap-2 shadow-lg shadow-[#2d9c6c]/30">
            Shop Now <span>&rarr;</span>
          </button>
          
          <button class="bg-white text-[#0a3855] px-6 py-3 lg:px-8 lg:py-3.5 rounded-full font-bold text-base lg:text-lg hover:bg-slate-50 transition-colors flex items-center gap-3 shadow-md">
            <div class="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-green-50 flex items-center justify-center text-[#2d9c6c] text-sm">
              ▶
            </div>
            Watch Demo
          </button>
        </div>
      </div>

      <!-- Right Column: Image scaling (Changed to h-full and max-h-full) -->
      <div class="relative w-full h-full flex justify-center items-end min-h-0">
        <div class="floating-wrapper w-full h-full flex justify-center items-end">
          <!-- max-h-[90%] ensures the image scales down based on screen height, preventing scrolling -->
          <img 
            src="/phone-mockup.png" 
            alt="Petsy App in Hand" 
            class="z-10 w-auto max-h-[90%] object-contain drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] -webkit-[mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]" 
          />
        </div>
      </div>

    </main>
  </div>
</template>

<style scoped>
/* Smooth, continuous floating animation */
.floating-wrapper {
  animation: float-organic 6s ease-in-out infinite;
}

@keyframes float-organic {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px); /* Slightly reduced distance so it doesn't hit the top */
  }
  100% {
    transform: translateY(0px);
  }
}
</style>