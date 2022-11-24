<template>
  <div class="min-h-screen min-w-xs antialiased">
    <header class="header scrolled" id="header">
      <div class="container">
        <div class="flex items-center justify-between py-8">
          <a class="inline-block" href="#">
            <img
              class="h-auto w-48"
              src="/images/experientialist-logotype.png"
              id="header-logo"
              alt="Experientialist"
            />
          </a>

          <div class="hidden md:block">
            <nav class="flex items-center gap-4 text-sm uppercase lg:gap-8">
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">News</a>
              <a href="#">Villas</a>
              <a
                class="border border-primary-300 px-4 py-3 text-primary-300 transition-colors hover:bg-primary-300 hover:text-white"
                href="#"
              >
                Plan your Experience
              </a>
            </nav>
          </div>

          <button class="md:hidden" type="button">
            <span class="sr-only">Open menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
    <main>
      <section class="py-8 sm:py-12 md:py-16 lg:py-20">
        <div class="container mt-24 lg:my-32">
          <div class="absolute top-48 left-0 -z-10 -translate-y-1/2 md:top-56 lg:top-96">
            <img src="/images/mapbase.svg" alt="" />
          </div>
          <h1
            class="text-center font-display text-4xl uppercase tracking-tight text-primary-300 md:text-5xl"
          >
            OUR FAVORITE EVENTS
          </h1>
          <p class="mt-4 text-center text-secondary-400">
            We have had the pleasure of planning, assisting, and consulting on some amazing client
            events over the years.
          </p>
        </div>

        <div class="swiper event-swiper mt-24">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div
                class="relative h-[32rem] w-full bg-[url('/images/event-1.png')] bg-cover bg-no-repeat"
              >
                <div
                  class="absolute inset-0 h-full w-full bg-gradient-to-t from-secondary-400/50"
                  aria-hidden="true"
                ></div>
                <div class="container absolute inset-x-0 bottom-0 py-16 px-12">
                  <h1 class="font-display text-4xl text-primary-100 lg:text-5xl xl:text-6xl">
                    Event Name 1
                  </h1>
                  <p class="mt-2 text-white">July 2022</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div
                class="relative h-[32rem] w-full bg-[url('/images/event-2.png')] bg-cover bg-no-repeat"
              >
                <div
                  class="absolute inset-0 h-full w-full bg-gradient-to-t from-secondary-400/50"
                  aria-hidden="true"
                ></div>
                <div class="container absolute inset-x-0 bottom-0 py-16 px-12">
                  <h1 class="font-display text-4xl text-primary-100 lg:text-5xl xl:text-6xl">
                    Event Name 2
                  </h1>
                  <p class="mt-2 text-white">July 2022</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div
                class="relative h-[32rem] w-full bg-[url('/images/event-3.png')] bg-cover bg-no-repeat"
              >
                <div
                  class="absolute inset-0 h-full w-full bg-gradient-to-t from-secondary-400/50"
                  aria-hidden="true"
                ></div>
                <div class="container absolute inset-x-0 bottom-0 py-16 px-12">
                  <h1 class="font-display text-4xl text-primary-100 lg:text-5xl xl:text-6xl">
                    Event Name 3
                  </h1>
                  <p class="mt-2 text-white">July 2022</p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="mt-8 flex max-w-none items-center justify-end gap-x-2 px-10 text-primary-300 lg:px-60"
          >
            <div class="swiper-pagination"></div>
            <button class="swiper-prev-button disabled:text-primary-200" type="button">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M22.5 12a.75.75 0 0 0-.75-.75H4.06l4.721-4.719a.751.751 0 1 0-1.062-1.062l-6 6a.75.75 0 0 0 0 1.062l6 6a.751.751 0 0 0 1.062-1.062l-4.72-4.719H21.75a.75.75 0 0 0 .75-.75Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <button class="swiper-next-button disabled:text-primary-200" type="button">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M1.8 12.151a.75.75 0 0 1 .75-.75h17.69l-4.721-4.719A.751.751 0 0 1 16.58 5.62l6 6a.751.751 0 0 1 0 1.062l-6 6a.75.75 0 1 1-1.062-1.062l4.72-4.719H2.55a.75.75 0 0 1-.75-.75Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-secondary-500 py-12 text-secondary-50 md:py-16 lg:py-20">
      <div class="container">
        <div class="flex flex-col items-start gap-8 lg:flex lg:flex-row lg:justify-between">
          <div class="lg:max-w-md">
            <img
              class="w-40"
              src="/images/experientialist-logotype-alt.png"
              alt="Experientialist"
            />
            <p class="mt-8 text-lg">
              <span class="uppercase">Expieriantalist</span> is a dedicated
              <span class="uppercase">mice</span> and Luxury Travel planning agency. We are
              uncompromising in experience, adventure, and passion.
            </p>
          </div>

          <div class="flex flex-col items-start gap-8 lg:flex-row lg:gap-12">
            <nav aria-label="Experience">
              <div class="font-display text-xl uppercase tracking-tight text-primary-300">
                Experience
              </div>
              <div class="mt-4 flex flex-col items-start gap-3">
                <a
                  class="text-sm uppercase tracking-wide underline-offset-4 hover:underline"
                  href="#"
                  >About</a
                >
                <a
                  class="text-sm uppercase tracking-wide underline-offset-4 hover:underline"
                  href="#"
                  >FAQ</a
                >
                <a
                  class="text-sm uppercase tracking-wide underline-offset-4 hover:underline"
                  href="#"
                  >Service &amp; Fees</a
                >
                <a
                  class="text-sm uppercase tracking-wide underline-offset-4 hover:underline"
                  href="#"
                  >How we work</a
                >
              </div>
            </nav>

            <nav aria-label="Connect">
              <div class="font-display text-xl uppercase tracking-tight text-primary-300">
                Connect
              </div>
              <div class="mt-4 flex flex-col items-start gap-3">
                <a class="group flex items-center gap-3 text-sm uppercase tracking-wide" href="#">
                  <span class="fab fa-facebook"></span>
                  <span class="underline-offset-4 group-hover:underline">Facebook</span>
                </a>
                <a class="group flex items-center gap-3 text-sm uppercase tracking-wide" href="#">
                  <span class="fab fa-twitter"></span>
                  <span class="underline-offset-4 group-hover:underline">Twitter</span>
                </a>
                <a class="group flex items-center gap-3 text-sm uppercase tracking-wide" href="#">
                  <span class="fab fa-instagram"></span>
                  <span class="underline-offset-4 group-hover:underline">Instagram</span>
                </a>
                <a class="group flex items-center gap-3 text-sm uppercase tracking-wide" href="#">
                  <span class="fab fa-tiktok"></span>
                  <span class="underline-offset-4 group-hover:underline">TikTok</span>
                </a>
              </div>
            </nav>
          </div>
        </div>

        <div
          class="mt-12 flex flex-col gap-4 text-sm text-secondary-50/50 md:mt-16 lg:mt-20 lg:flex-row lg:justify-between"
        >
          <p>
            Copyright &copy; 2022. <span class="uppercase">Experientialist</span>. All rights
            reserved.
          </p>
          <div class="flex flex-col items-start gap-4 md:flex-row lg:gap-8">
            <a class="underline underline-offset-4 hover:text-secondary-50" href="#"
              >Terms &amp; Conditions</a
            >
            <a class="underline underline-offset-4 hover:text-secondary-50" href="#"
              >Privacy Policy</a
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import Swiper, { Navigation, Pagination } from 'swiper'

const slider = () => {
  const swiper = new Swiper('.event-swiper', {
    modules: [Navigation, Pagination],
    breakpoints: {
      320: {
        slidesPerView: 1.25,
      },
      640: {
        slidesPerView: 1.3,
      },
      1280: {
        slidesPerView: 1.5,
      },
    },
    centeredSlides: true,
    loop: true,
    spaceBetween: 32,
    navigation: {
      prevEl: '.swiper-prev-button',
      nextEl: '.swiper-next-button',
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  })

  swiper.init()
}

export default {
  mounted: () => {
    slider()
  },
}
</script>
