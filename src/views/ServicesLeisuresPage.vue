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
              <a id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar">About</a>
              <div
                id="dropdownNavbar"
                class="!z-10 hidden w-fit divide-y divide-gray-100 bg-white shadow-sm"
              >
                <ul
                  class="border border-primary-200 py-1 text-sm text-secondary-300"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a href="/about-main" class="block px-4 py-2 hover:font-bold"
                      >The Experientialist</a
                    >
                  </li>
                  <li>
                    <a href="/about" class="block px-4 py-2 hover:font-bold">The Founder</a>
                  </li>
                </ul>
              </div>
              <a id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar2">Services</a>
              <div
                id="dropdownNavbar2"
                class="!z-10 hidden w-fit divide-y divide-gray-100 bg-white shadow-sm"
              >
                <ul
                  class="border border-primary-200 py-1 text-sm text-secondary-300"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a href="/about-main" class="block px-4 py-2 hover:font-bold"
                      >Travel Planning</a
                    >
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:font-bold">Leisures</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:font-bold">Corporate</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:font-bold">Luxury</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:font-bold">Travel</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:font-bold">Facilitation</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:font-bold">Events</a>
                  </li>
                </ul>
              </div>
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

          <button class="md:hidden" type="button" id="mobile-nav-button">
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
    <div
      class="container fixed inset-y-0 z-50 h-full w-full bg-secondary-500 py-6 lg:hidden"
      id="mobile-navigation"
    >
      <div class="flex justify-end">
        <button id="mobile-close-button">
          <svg class="h-8 w-8" viewBox="0 0 24 24">
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m6 6 12 12M6 18 18 6 6 18Z"
            />
          </svg>
        </button>
      </div>

      <nav
        class="mt-10 flex flex-col gap-10 pl-4 text-left uppercase tracking-wide"
        aria-label="Mobile navigation"
      >
        <img src="/images/experientialist-logotype-alt.png" alt="" class="h-auto w-40" />
        <div class="grid-rows-auto mt-20 grid">
          <a href="" class="block w-full border-t border-primary-100/20 py-5 text-white">About</a>
          <a href="" class="block w-full border-t border-primary-100/20 py-5 text-white"
            >Services</a
          >
          <a href="" class="block w-full border-y border-primary-100/20 py-5 text-white">News</a>
          <a href="" class="block w-full border-y border-primary-100/20 py-5 text-white">Villas</a>
          <a
            class="mt-10 block border border-primary-300/40 px-4 py-3 text-center text-primary-300 transition-colors hover:bg-primary-300 hover:text-white"
            href="#"
          >
            Plan your Experience
          </a>
        </div>
      </nav>
    </div>

    <main>
      <section class="min-h-screen bg-resort bg-cover bg-center bg-no-repeat">
        <div class="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-center">
          <h1 class="font-display text-5xl tracking-tight text-white md:text-7xl">
            Experience the Wonder
          </h1>
          <h3 class="mt-3 text-3xl text-white md:mt-6">
            People don’t take trips, trips take People
          </h3>
          <div
            class="mt-5 grid w-fit grid-cols-3 justify-center gap-2 rounded-md border border-white border-opacity-40 bg-white bg-opacity-40 p-2 text-sm md:grid-cols-4 lg:grid-cols-5"
          >
            <input placeholder="Destinations" class="rounded-md p-3" />
            <input placeholder="Adventure Type" class="rounded-md p-3" />
            <input placeholder="Travel Month" class="rounded-md p-3" />
            <input placeholder="Duration" class="rounded-md p-3" />
            <a
              ><p
                class="w-max cursor-pointer rounded-md bg-warning-300 py-3 px-6 text-sm uppercase"
              >
                Find Tours
              </p></a
            >
          </div>
        </div>
      </section>

      <!-- Leisures Section -->

      <!-- Hotels, Guides, Tickets Section -->

      <!-- Popular Tours Section -->

      <section
        class="m-10 grid h-fit grid-cols-1 items-center justify-center bg-white md:m-0 md:h-[70vh] md:grid-cols-2"
      >
        <div class="m-auto block w-fit text-right">
          <img src="/images/map.png" alt="map" class="object-contain text-right" />
        </div>
        <div class="ml-5 w-[50vh]">
          <h2 class="font-display text-3xl">Popular Tours</h2>
          <p class="mt-5 text-sm text-neutral-700">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam consectetuer
            adipiscing elit, sed diam nonummy nibh...
          </p>
          <div class="mt-7 flex flex-wrap gap-y-6 gap-x-9 text-sm">
            <p class="text-black">Europe <span class="text-orange-500">(05)</span></p>
            <p class="text-black">Africa <span class="text-orange-500">(05)</span></p>
            <p class="text-black">Asia <span class="text-orange-500">(05)</span></p>
            <p class="text-black">Oceana <span class="text-orange-500">(05)</span></p>
            <p class="text-black">North America <span class="text-orange-500">(05)</span></p>
            <p class="text-black">South America <span class="text-orange-500">(05)</span></p>
          </div>
          <a
            class="mt-7 block w-fit bg-primary-300 py-3 px-4 text-sm uppercase text-white underline"
            href="#"
            >All Destinations</a
          >
        </div>
      </section>

      <section class="relative block overflow-hidden">
        <div class="absolute top-0 left-0 h-full w-full pb-[50%]">
          <img
            src="/images/david-marcu-78A265wPiO4-unsplash.png"
            alt="cloud"
            class="bg-landscape absolute bottom-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat object-cover"
          />
          <img
            src="/images/Cloud.png"
            alt="cloud"
            class="cloud-parallax absolute left-0 h-full w-full object-cover"
            data-speed=".4"
          />
        </div>
        <div class="relative mx-auto max-w-3xl place-items-center pt-[40rem] pb-20 lg:pt-[50rem]">
          <div class="container">
            <h5 class="text-center font-bold uppercase text-secondary-500">
              make every experience count!
            </h5>
            <h1 class="mt-4 text-center font-display text-3xl text-secondary-500">
              Receive helpful tips and inspiration in your inbox
            </h1>
            <div class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div>
                <label class="form-label" for="name">First Name</label>
                <input class="form-input" id="name" type="text" placeholder="" />
              </div>
              <div>
                <label class="form-label" for="name">Last Name</label>
                <input class="form-input" id="name" type="text" placeholder="" />
              </div>
              <div>
                <label class="form-label" for="name">Email</label>
                <input class="form-input" id="name" type="text" placeholder="" />
              </div>
              <div class="block">
                <div class="mt-2">
                  <label class="inline-flex items-center gap-4">
                    <div class="input-round">
                      <input type="checkbox" checked id="checkbox" />
                      <label for="checkbox"></label>
                    </div>
                    <span class="ml-2">I’m happy to receive emails from Experientialist</span>
                  </label>
                </div>
              </div>
            </div>
            <button
              class="m-auto mt-5 block w-full bg-primary-300 px-4 py-3 text-sm uppercase tracking-wide text-white lg:w-auto"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <section
        class="relative bg-nature bg-cover bg-center bg-no-repeat py-16 sm:py-20 md:py-24 lg:py-28"
      >
        <div
          class="absolute inset-0 h-full w-full bg-gradient-to-r from-black/50 to-black/25"
          aria-hidden="true"
        ></div>
        <div class="container relative text-white">
          <div>
            <h2 class="font-display text-4xl lg:text-5xl xl:text-6xl">
              Let your inner
              <br />
              Adventurer out!
            </h2>
            <div class="mt-6">
              <a
                class="inline-block bg-primary-300 px-4 py-3 text-sm uppercase tracking-wide"
                href="#"
                >Let us help</a
              >
            </div>
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
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'

const mobileNav = () => {
  const mobileNavButton = document.getElementById('mobile-nav-button')
  const mobileNavMenu = document.getElementById('mobile-navigation')
  const mobileCloseButton = document.getElementById('mobile-close-button')
  if (mobileNavButton) {
    mobileNavButton.addEventListener('click', () => {
      if (mobileNavMenu) mobileNavMenu.classList.remove('hidden')
    })
  }
  if (mobileCloseButton) {
    mobileCloseButton.addEventListener('click', () => {
      if (mobileNavMenu) mobileNavMenu.classList.add('hidden')
    })
  }
}

const slider = () => {
  const swiper = new Swiper('.first-swiper', {
    modules: [Navigation, Pagination],
    spaceBetween: 32,
    navigation: {
      prevEl: '.swiper-prev-button',
      nextEl: '.swiper-next-button',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  })

  const anotherSwiper = new Swiper('.second-swiper', {
    modules: [Navigation],
    spaceBetween: 32,
    navigation: {
      prevEl: '.swiper-prev-button',
      nextEl: '.swiper-next-button',
    },
  })

  const partnerSwiper = new Swiper('.partner-swiper', {
    modules: [Autoplay],
    slidesPerView: 5,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 3,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 5,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  })

  swiper.init()
  anotherSwiper.init()
  partnerSwiper.init()
}

export default {
  mounted: () => {
    slider()
    mobileNav()
  },
}
</script>
