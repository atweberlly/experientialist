<template>
  <div class="min-h-screen">
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
              <a class="border border-primary-300 px-4 py-3 text-primary-300 transition-colors hover:bg-primary-300 hover:text-white" href="#">Plan your Experience</a>
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
      <section class="bg-secondary-50 py-8 sm:py-12 md:py-16 lg:py-20">
        <div class="container">
          <div class="sm:max-w-md">
            <h2 class="font-display text-4xl tracking-tight text-primary-300 md:text-5xl">
              Elaborate your
              <br />
              travel experience
            </h2>
            <p class="mt-4 text-secondary-400 md:mt-8">We bring a world of possibilities closer to you by building customised bespoke itineraries to fit your corporate or family travel desires.</p>
            <p class="mt-4 text-secondary-400">Luxury experiences and unforgettable adventures await you without even lifting a finger.</p>
            <div class="mt-8">
              <a class="inline-flex items-center gap-1 bg-primary-300 px-4 py-3 text-sm tracking-wide text-white" href="#">
                <span class="text-sm uppercase">Start planning now</span>
                <svg class="h-5 w-5" fill="none" viewBox="0 0 20 20">
                  <path fill="currentColor" fill-rule="evenodd" d="M1.25 10a.625.625 0 0 1 .625-.625h14.741l-3.934-3.933a.626.626 0 1 1 .886-.885l5 5a.625.625 0 0 1 0 .885l-5 5a.626.626 0 1 1-.886-.885l3.934-3.932H1.875A.625.625 0 0 1 1.25 10Z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <img class="mt-8 aspect-video object-cover object-center md:aspect-[16/6] lg:max-w-2xl xl:aspect-[16/4] xl:max-w-4xl" src="/images/willian-justen-de-vasconcellos-lrPBS8b4G14-unsplash.jpg" alt="Sea shore" />
        </div>
      </section>
      <section class="py-8 sm:py-12 md:py-16 lg:py-20">
        <div class="container">
          <h2 class="text-center font-display text-4xl tracking-tight text-[#243a45] md:text-5xl xl:text-6xl">Each trip with us includes:</h2>
          <div class="mt-8 grid grid-cols-1 gap-8 sm:mx-auto sm:max-w-sm md:mt-12 md:max-w-none md:grid-cols-2 lg:mt-16 lg:max-w-3xl xl:max-w-none xl:grid-cols-4">
            <div class="relative overflow-hidden rounded-xl">
              <img src="/images/bespoke-itineraries.jpg" alt="Bespoke Itineraries" />
              <div class="absolute inset-x-0 bottom-0 bg-black/50 bg-grain bg-cover bg-center bg-no-repeat p-8 text-white [@supports(backdrop-filter:blur(24px))]:backdrop-blur-xl">
                <h3 class="text-2xl font-bold uppercase">Bespoke Itineraries</h3>
                <p class="mt-2 line-clamp-2">Every trip is custom tailored for you. Once you begin booking with us you will never want to go back to traveling the old way. We meet and get to know your needs and desires!</p>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-xl">
              <img src="/images/general-influence.jpg" alt="General Influence" />
              <div class="absolute inset-x-0 bottom-0 bg-black/50 bg-grain bg-cover bg-center bg-no-repeat p-8 text-white [@supports(backdrop-filter:blur(24px))]:backdrop-blur-xl">
                <h3 class="text-2xl font-bold uppercase">General Influence</h3>
                <p class="mt-2 line-clamp-2">We believe in building the world up through tourism. Protecting the natural and cultural heritage of each location, and helping the local areas thrive through travel and event dollars. We work with sustainable partners who care about the place they do business.</p>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-xl">
              <img src="/images/exclusive-benefits.jpg" alt="Exclusive Benefits" />
              <div class="absolute inset-x-0 bottom-0 bg-black/50 bg-grain bg-cover bg-center bg-no-repeat p-8 text-white [@supports(backdrop-filter:blur(24px))]:backdrop-blur-xl">
                <h3 class="text-2xl font-bold uppercase">Exclusive Benefits</h3>
                <p class="mt-2 line-clamp-2">We travel to some pretty adventuresome locations and we try EVERYTHING. This has allowed us to secure some pretty offbeat VIP benefits, amenities, access, and extras that you simply can't get on your own. We are happy to share with you!</p>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-xl">
              <img src="/images/dedicated-agent.jpg" alt="Dedicated Agent" />
              <div class="absolute inset-x-0 bottom-0 bg-black/50 bg-grain bg-cover bg-center bg-no-repeat p-8 text-white [@supports(backdrop-filter:blur(24px))]:backdrop-blur-xl">
                <h3 class="text-2xl font-bold uppercase">Dedicated Agent</h3>
                <p class="mt-2 line-clamp-2">Booking with an Experientialist is like having that awesome family member who knows just where to eat, sleep, and tour! Your experientialist will be with you every step of the way and they are trained in all thing's events, meetings and luxury travel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="relative bg-resort-2 bg-cover bg-center bg-no-repeat py-8 text-white">
        <div class="absolute inset-0 bg-secondary-500/50" aria-hidden="true" aria-label="Background overlay"></div>
        <div class="container relative">
          <h2 class="text-center font-display text-4xl tracking-tight">Don't just take our word for it...</h2>
          <div class="swiper mt-8">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <figure class="rounded border border-white/30 bg-black/50 px-8 py-4 [@supports(backdrop-filter:blur(12px))]:backdrop-blur-md">
                  <!-- <img src="" alt=""> -->
                  <div class="mx-auto h-32 w-32 rounded-full bg-white" aria-label="Profile image placeholder"></div>
                  <figcaption>
                    <h3 class="mt-8 text-center font-display text-3xl tracking-tight text-primary-300">Jenny Wilson</h3>
                    <div class="mt-1.5 text-center text-lg italic text-secondary-50">Canada</div>
                    <p class="mt-2 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore error, temporibus illum dolores cupiditate corrupti totam aperiam unde? Cum iste, voluptates rerum id quidem officiis numquam tempore fugit labore dolorem.</p>
                    <div>
                      <!-- stars -->
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>
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
import Swiper, { Navigation, Pagination } from 'swiper'

const dynamicHeader = () => {
  const header = document.getElementById('header')
  const headerLogo = document.getElementById('header-logo')

  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight / 2) {
      header.classList.add('scrolled')
      headerLogo.setAttribute('src', '/images/experientialist-logotype.png')
    } else {
      header.classList.remove('scrolled')
      headerLogo.setAttribute('src', '/images/experientialist-logotype-white.png')
    }
  })
}

const slider = () => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  })

  swiper.init()
}

export default {
  mounted: () => {
    dynamicHeader()
    slider()
  },
}
</script>
