<section id="contact" class="pt-36 pb-20 min-h-screen flex items-center reveal reveal-up">
  <div class="container mx-auto px-4 lg:px-20">
    <div class="flex flex-wrap items-center">
      
      <!-- Kolom Kiri: Teks & Kontak -->
      <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0 reveal reveal-left">
        <h2 class="text-brand-purple font-bold text-xl uppercase tracking-[0.3em] mb-6">Contact Me</h2>
        <h1 class="text-6xl md:text-8xl lg:text-9xl font-extrabold text-text-dark dark:text-gray-100 leading-[0.9] tracking-tighter mb-12">
          Get In <span class="text-gray-400 dark:text-gray-400 italic font-serif">Touch</span><span class="text-brand-purple">.</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed mb-16">
          I'm currently available for freelance work. If you have a project that you want to get started, let's talk and build something amazing together.
        </p>

        <div class="flex flex-col gap-10">
          <!-- Email Link -->
          <div class="group flex items-center gap-6 reveal reveal-up" style="transition-delay: 100ms;">
            <div class="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-brand-purple group-hover:bg-brand-purple dark:border-gray-800 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 dark:text-gray-400 group-hover:text-white transition-colors"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div>
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-400 mb-1">Email Me</p>
              <a href="mailto:hello@annaska.com" class="text-2xl md:text-3xl font-bold text-text-dark dark:text-gray-100 hover:text-brand-purple transition">hello@annaska.com</a>
            </div>
          </div>

          <!-- Social Links -->
          <div class="group flex items-center gap-6 reveal reveal-up" style="transition-delay: 200ms;">
            <div class="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-brand-purple group-hover:bg-brand-purple dark:border-gray-800 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 dark:text-gray-400 group-hover:text-white transition-colors"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </div>
            <div>
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-400 mb-1">Follow Me</p>
              <div class="flex gap-6 mt-1">
                <a href="#" class="text-xl font-bold text-text-dark dark:text-gray-100 hover:text-brand-purple transition">Instagram</a>
                <a href="#" class="text-xl font-bold text-text-dark dark:text-gray-100 hover:text-brand-purple transition">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Kolom Kanan: Email Form -->
      <div class="w-full self-center px-4 lg:w-1/2 mt-16 lg:mt-0 reveal reveal-right">
        <form action="mailto:hello@annaska.com" method="post" enctype="text/plain" class="bg-white border border-gray-100 rounded-[2rem] p-6 md:p-8 shadow-xl shadow-purple-500/5 transition-colors duration-300 dark:bg-gray-900 dark:border-gray-800">
          <div class="mb-8">
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-brand-purple mb-3">Send a Message</p>
            <h3 class="text-3xl md:text-4xl font-extrabold text-text-dark dark:text-white">Let's work together.</h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label for="name" class="block text-sm font-bold text-text-dark dark:text-gray-100 mb-2">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" class="input-framer w-full" required>
            </div>
            <div>
              <label for="email" class="block text-sm font-bold text-text-dark dark:text-gray-100 mb-2">Email</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" class="input-framer w-full" required>
            </div>
          </div>

          <div class="mb-5">
            <label for="subject" class="block text-sm font-bold text-text-dark dark:text-gray-100 mb-2">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Project inquiry" class="input-framer w-full" required>
          </div>

          <div class="mb-6">
            <label for="message" class="block text-sm font-bold text-text-dark dark:text-gray-100 mb-2">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." class="input-framer w-full resize-none" required></textarea>
          </div>

          <button type="submit" class="w-full bg-brand-purple text-white px-8 py-4 rounded-2xl font-bold text-base transition duration-300 hover:bg-purple-700 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-brand-purple/20">
            Send Message
          </button>
        </form>
      </div>

    </div>
  </div>
</section>