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
              <div class="mt-4 flex flex-col items-start gap-3">
                <a class="flex items-center gap-4 text-sm uppercase tracking-wide underline-offset-4 hover:underline" href="#">
                  <svg class="h-6 w-6" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M23.625 12C23.625 5.578 18.422.375 12 .375S.375 5.578.375 12c0 5.802 4.251 10.612 9.809 11.484V15.36H7.23V12h2.954V9.439c0-2.914 1.734-4.523 4.39-4.523 1.273 0 2.603.227 2.603.227v2.86H15.71c-1.444 0-1.895.896-1.895 1.815V12h3.225l-.516 3.36h-2.709v8.124c5.558-.872 9.809-5.682 9.809-11.484Z" />
                  </svg>
                  <span>Facebook</span>
                </a>
                <a class="flex items-center gap-4 text-sm uppercase tracking-wide underline-offset-4 hover:underline" href="#">
                  <svg class="h-6 w-6" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21.533 7.112c.015.213.015.426.015.64 0 6.502-4.949 13.994-13.995 13.994A13.9 13.9 0 0 1 0 19.538c.396.046.777.061 1.188.061 2.3 0 4.416-.777 6.106-2.101a4.928 4.928 0 0 1-4.599-3.412c.305.046.61.076.93.076a5.2 5.2 0 0 0 1.294-.167A4.92 4.92 0 0 1 .975 9.168v-.061a4.954 4.954 0 0 0 2.223.624 4.915 4.915 0 0 1-2.193-4.096c0-.914.244-1.752.67-2.483A13.981 13.981 0 0 0 11.817 8.3a5.554 5.554 0 0 1-.122-1.127 4.917 4.917 0 0 1 4.92-4.92c1.415 0 2.695.595 3.593 1.554A9.684 9.684 0 0 0 23.33 2.62a4.906 4.906 0 0 1-2.163 2.711A9.86 9.86 0 0 0 24 4.569a10.572 10.572 0 0 1-2.467 2.543Z" />
                  </svg>
                  <span>Twitter</span>
                </a>
                <a class="flex items-center gap-4 text-sm uppercase tracking-wide underline-offset-4 hover:underline" href="#">
                  <svg class="h-6 w-6" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12.003 5.847A6.143 6.143 0 0 0 5.85 12a6.143 6.143 0 0 0 6.152 6.153A6.143 6.143 0 0 0 18.155 12a6.143 6.143 0 0 0-6.152-6.153Zm0 10.153c-2.2 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.8 4-4 4ZM19.84 5.595c0 .798-.642 1.435-1.435 1.435a1.435 1.435 0 1 1 1.435-1.435Zm4.075 1.457c-.091-1.923-.53-3.626-1.939-5.029C20.575.62 18.872.181 16.95.084c-1.981-.112-7.919-.112-9.9 0-1.917.091-3.62.53-5.027 1.934C.614 3.42.18 5.124.084 7.046c-.112 1.982-.112 7.92 0 9.902.091 1.923.53 3.626 1.939 5.029 1.408 1.403 3.105 1.842 5.027 1.939 1.981.112 7.919.112 9.9 0 1.922-.091 3.625-.53 5.027-1.939 1.403-1.403 1.842-3.106 1.939-5.029.112-1.981.112-7.915 0-9.896Zm-2.56 12.022a4.05 4.05 0 0 1-2.28 2.282c-1.58.626-5.328.482-7.073.482-1.746 0-5.499.139-7.073-.482a4.05 4.05 0 0 1-2.281-2.282c-.626-1.58-.482-5.328-.482-7.074 0-1.746-.14-5.5.482-7.074a4.05 4.05 0 0 1 2.28-2.282c1.58-.626 5.328-.482 7.074-.482 1.745 0 5.498-.139 7.073.482a4.05 4.05 0 0 1 2.28 2.282c.627 1.58.482 5.328.482 7.074 0 1.746.145 5.5-.482 7.074Z" />
                  </svg>
                  <span>Instagram</span>
                </a>
                <a class="flex items-center gap-4 text-sm uppercase tracking-wide underline-offset-4 hover:underline" href="#">
                  <svg class="h-6 w-6" viewBox="0 0 21 24">
                    <path fill="currentColor" d="M21 9.84A9.847 9.847 0 0 1 15.245 8v8.377a7.619 7.619 0 1 1-6.573-7.55v4.214a3.498 3.498 0 1 0 2.448 3.336V0h4.125c-.003.348.026.696.087 1.04A5.728 5.728 0 0 0 17.86 4.8a5.692 5.692 0 0 0 3.14.944V9.84Z" />
                  </svg>
                  <span>TikTok</span>
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
