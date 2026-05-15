<template>
  <footer class="w-full bg-[#0a1128] font-sans text-slate-300 py-16 px-4 md:px-12 border-t border-slate-800">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
      
      <div class="lg:col-span-2 space-y-6">
        <a href="#" class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-[#2d9c6c] flex items-center justify-center text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C9.5 2 7.5 4 7.5 6.5S9.5 11 12 11s4.5-2 4.5-4.5S14.5 2 12 2zm-5 4.5c0-1.5-1-2.5-2.5-2.5S2 5 2 6.5s1 2.5 2.5 2.5S7 8 7 6.5zm10 0c0-1.5-1-2.5-2.5-2.5S12 5 12 6.5s1 2.5 2.5 2.5S17 8 17 6.5zm-5 6.5c-3.5 0-6.5 2.5-7.5 6h15c-1-3.5-4-6-7.5-6z"/></svg>
          </div>
          <span class="text-white text-xl font-extrabold tracking-tight">Petsy</span>
        </a>
        <p class="text-sm leading-relaxed max-w-sm text-slate-400">
          The ultimate pet eCommerce experience. Premium products, lightning-fast delivery, and endless tail wags for your furry family.
        </p>
      </div>

      <div>
        <h4 class="text-white font-bold mb-6">Product</h4>
        <ul class="space-y-4 text-sm font-medium">
          <li><a href="#" class="hover:text-[#2d9c6c] transition-colors">Features</a></li>
          <li><a href="#" class="hover:text-[#2d9c6c] transition-colors">How It Works</a></li>
          <li><a href="#" class="hover:text-[#2d9c6c] transition-colors">Pricing</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-bold mb-6">Company</h4>
        <ul class="space-y-4 text-sm font-medium">
          <li><a href="#" class="hover:text-[#2d9c6c] transition-colors">About Us</a></li>
          <li><a href="#" class="hover:text-[#2d9c6c] transition-colors">Careers</a></li>
          <li><a href="#" class="hover:text-[#2d9c6c] transition-colors">Press</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-bold mb-6">Support</h4>
        <ul class="space-y-4 text-sm font-medium">
          <li><a href="#" class="hover:text-[#2d9c6c] transition-colors">Help Center</a></li>
          <li><a href="#" class="hover:text-[#2d9c6c] transition-colors">Contact Us</a></li>
          <li><a href="#" class="hover:text-[#2d9c6c] transition-colors">Privacy Policy</a></li>
        </ul>
      </div>

    </div>

    <div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
      <p class="text-sm text-slate-500">© 2026 Petsy Inc. All rights reserved.</p>
      
      <div class="flex items-center w-full md:w-auto">
        <input 
          type="email" 
          placeholder="Enter your email" 
          class="bg-[#1e293b] text-white border border-slate-700 rounded-l-lg px-4 py-2.5 text-sm outline-none focus:border-[#2d9c6c] w-full md:w-64"
        />
        <button class="bg-[#2d9c6c] text-white px-4 py-2.5 rounded-r-lg text-sm font-bold hover:bg-[#248259] transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  </footer>
</template>