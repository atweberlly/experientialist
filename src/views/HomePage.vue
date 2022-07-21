<template>
  <div class="min-h-screen cursor-default antialiased">
    <header class="header" id="header">
      <div class="container">
        <div class="flex items-center justify-between py-8">
          <a class="inline-block" href="#">
            <img class="h-auto w-48" src="/images/experientialist-logotype-white.png" id="header-logo" alt="Experientialist" />
          </a>
          <div class="hidden md:block">
            <nav class="flex items-center gap-4 text-sm uppercase lg:gap-8">
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">News</a>
              <a href="#">Villas</a>
              <a class="border border-primary-300 px-4 py-3 text-primary-300" href="#">Plan your Experience</a>
            </nav>
          </div>
          <button class="md:hidden" type="button">
            <span class="sr-only">Open menu</span>
            <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
    <main>
      <section class="min-h-screen bg-resort bg-cover bg-center bg-no-repeat"></section>
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
              <div class="mt-4 flex flex-col items-start gap-3">
                <a class="text-sm uppercase tracking-wide underline-offset-4 hover:underline" href="#">About</a>
                <a class="text-sm uppercase tracking-wide underline-offset-4 hover:underline" href="#">FAQ</a>
                <a class="text-sm uppercase tracking-wide underline-offset-4 hover:underline" href="#">Service &amp; Fees</a>
                <a class="text-sm uppercase tracking-wide underline-offset-4 hover:underline" href="#">How we work</a>
              </div>
            </nav>
            <nav aria-label="Connect">
              <div class="font-display text-xl uppercase tracking-tight text-primary-300">Connect</div>
              <div class="mt-4 flex flex-col items-start gap-1">
                <a class="group flex items-center gap-4 text-sm uppercase tracking-wide" href="#">
                  <span class="fab fa-facebook text-2xl"></span>
                  <span class="underline-offset-4 group-hover:underline">Facebook</span>
                </a>
                <a class="group flex items-center gap-4 text-sm uppercase tracking-wide" href="#">
                  <span class="fab fa-twitter text-2xl"></span>
                  <span class="underline-offset-4 group-hover:underline">Twitter</span>
                </a>
                <a class="group flex items-center gap-4 text-sm uppercase tracking-wide" href="#">
                  <span class="fab fa-instagram text-2xl"></span>
                  <span class="underline-offset-4 group-hover:underline">Instagram</span>
                </a>
                <a class="group flex items-center gap-4 text-sm uppercase tracking-wide" href="#">
                  <span class="fab fa-tiktok text-2xl"></span>
                  <span class="underline-offset-4 group-hover:underline">TikTok</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
        <div class="mt-12 flex flex-col gap-4 text-sm text-secondary-50/50 md:mt-16 lg:mt-20 lg:flex-row lg:justify-between">
          <p>Copyright &copy; 2022. <span class="uppercase">Experientialist</span>. All rights reserved.</p>
          <div class="flex flex-col items-start gap-4 md:flex-row lg:gap-8">
            <a class="underline underline-offset-4 hover:text-secondary-50" href="#">Terms &amp; Conditions</a>
            <a class="underline underline-offset-4 hover:text-secondary-50" href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  mounted: () => {
    const header = document.getElementById('header')
    const headerLogo = document.getElementById('header-logo')

    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight) {
        header.classList.add('scrolled')
        headerLogo.setAttribute('src', '/images/experientialist-logotype.png')
      } else {
        header.classList.remove('scrolled')
        headerLogo.setAttribute('src', '/images/experientialist-logotype-white.png')
      }
    })
  },
}
</script>
