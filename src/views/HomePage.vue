<template>
  <div class="min-h-screen cursor-default antialiased">
    <header>
      <div class="container">
        <div class="flex items-center justify-between py-8">
          <div>
            <a class="inline-block" href="#">
              <img class="h-auto w-48" src="/images/experientialist-logotype.png" alt="Experientialist" />
            </a>
          </div>
          <button class="md:hidden">
            <span class="sr-only">Open menu</span>
            <svg fill="none" stroke="currentColor" stroke-width="2" class="h-6 w-6" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div class="hidden md:block">
            <nav class="flex items-center gap-4 text-sm uppercase lg:gap-8">
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">News</a>
              <a href="#">Villas</a>
              <a class="border border-primary-300 px-4 py-3 text-primary-300" href="#">Plan your Experience</a>
            </nav>
          </div>
        </div>
      </div>
      <div></div>
    </header>
    <main>
      <!-- <section class="bg-secondary-50 py-12">
        <div class="container relative">
          <div class="hidden sm:absolute sm:top-1/2 sm:left-0 sm:z-10 sm:-rotate-90 sm:select-none sm:items-center sm:gap-2">
            <div class="font-display text-4xl uppercase tracking-tight text-secondary-300">Welcome</div>
            <div class="h-0.5 w-24 bg-primary-300"></div>
          </div>
          <div class="grid grid-cols-1 gap-8 sm:mx-auto sm:max-w-sm md:mx-0 md:max-w-none md:grid-cols-2 md:items-center">
            <div class="relative">
              <img class="relative" src="/images/karl-muscat-_p0OdENA13Y-unsplash.jpg" alt="" />
            </div>
            <div>
              <h2 class="font-display text-3xl tracking-tight text-primary-300">To experience is to know</h2>
              <p class="mt-4 text-secondary-300">We have been cultivating years of experiences and venturing into the most authentic places in the world in order to bring you the safest, most knowledgeable experiences your company and family can explore.</p>
              <p class="mt-4 text-secondary-300">When you work with us, you can rest easy knowing that every detail is taken care of, all the adventure without sacrificing luxury is thought through, you can truly elevate your travel.</p>
              <p class="mt-4 italic text-primary-500">We know exactly how to build the most lucrative itinerary that will engage even the most uncompromising spirit.</p>
            </div>
          </div>
        </div>
      </section> -->
      <section class="relative bg-nature bg-cover bg-center bg-no-repeat py-16 sm:py-20 md:py-24 lg:py-28">
        <div class="absolute inset-0 h-full w-full bg-gradient-to-r from-black/50 to-black/25" aria-hidden="true"></div>
        <div class="container relative text-white">
          <div>
            <h2 class="font-display text-4xl lg:text-5xl xl:text-6xl">
              Let your inner
              <br />
              Adventurer out!
            </h2>
            <div class="mt-6">
              <a class="inline-block bg-primary-300 px-4 py-3 text-sm uppercase tracking-wide" href="#">Let us help</a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="bg-secondary-500 py-12 text-secondary-50 md:py-16 lg:py-20">
      <div class="container">
        <div class="flex flex-col items-start gap-8 lg:flex lg:flex-row lg:justify-between">
          <div class="lg:max-w-md">
            <img class="w-40" src="/images/experientialist-logotype-alt.png" alt="Experientialist" />
            <p class="mt-8 text-lg"><span class="uppercase">Expieriantalist</span> is a dedicated <span class="uppercase">mice</span> and Luxury Travel planning agency. We are uncompromising in experience, adventure, and passion.</p>
          </div>
          <div class="flex flex-col items-start gap-8 lg:flex-row lg:gap-12">
            <nav aria-label="Experience">
              <div class="font-display text-xl uppercase tracking-tight text-primary-300">Experience</div>
              <div class="mt-4 flex flex-col items-start gap-2">
                <a class="text-sm uppercase tracking-wide underline-offset-4 hover:underline" href="#">About</a>
                <a class="text-sm uppercase tracking-wide underline-offset-4 hover:underline" href="#">FAQ</a>
                <a class="text-sm uppercase tracking-wide underline-offset-4 hover:underline" href="#">Service &amp; Fees</a>
                <a class="text-sm uppercase tracking-wide underline-offset-4 hover:underline" href="#">How we work</a>
              </div>
            </nav>
            <nav aria-label="Connect">
              <div class="font-display text-xl uppercase tracking-tight text-primary-300">Connect</div>
              <div class="mt-4 flex flex-col items-start gap-2">
                <a class="text-sm uppercase tracking-wide underline-offset-4 hover:underline" href="#">Facebook</a>
                <a class="text-sm uppercase tracking-wide underline-offset-4 hover:underline" href="#">Twitter</a>
                <a class="text-sm uppercase tracking-wide underline-offset-4 hover:underline" href="#">Instagram</a>
                <a class="text-sm uppercase tracking-wide underline-offset-4 hover:underline" href="#">TikTok</a>
              </div>
            </nav>
          </div>
        </div>
        <div class="mt-8 flex flex-col gap-4 text-sm text-secondary-50/50 lg:flex-row lg:justify-between">
          <p>Copyright &copy; 2022. <span class="uppercase">Experientialist</span>. All rights reserved.</p>
          <div class="flex flex-col items-start gap-4 md:flex-row">
            <a class="underline underline-offset-4 hover:text-secondary-50" href="#">Terms &amp; Conditions</a>
            <a class="underline underline-offset-4 hover:text-secondary-50" href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
