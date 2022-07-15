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
    <main></main>
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
