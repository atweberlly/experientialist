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
      <section class="flex h-[50vh] items-center bg-secondary-500 py-24 lg:h-[60vh]">
        <div class="container text-center">
          <h5 class="text-lg uppercase text-white">our story</h5>
          <h1 class="font-display text-4xl tracking-tight text-primary-300 md:text-5xl">
            We ask the questions <br />
            some fear to ask;
          </h1>
        </div>
      </section>
      <section class="bg-white pt-16 lg:pt-20">
        <div class="container">
          <img
            src="/images/about-main.png"
            alt="Man with sun hat"
            class="relative mx-auto -translate-y-1/2 md:w-2/3 lg:w-1/2"
          />
          <div class="mx-auto -mt-20 max-w-lg text-center text-secondary-300 md:-mt-24 lg:-mt-32">
            <h2 class="text-lg uppercase tracking-wide">
              We believe in the experience, the influence, and the adventure of travel.
            </h2>
            <p class="mt-4 lg:mt-8">
              We sacrifice nothing, and we believe anything is possible. We keep our partners
              accountable for their location's sustainability and ensure your travel dollars are
              responsible for supporting the community you travel to.
            </p>
          </div>

          <div
            class="mt-0 flex-none gap-0 sm:mx-auto sm:max-w-sm md:flex md:max-w-none md:grid-cols-2 md:items-center md:gap-12 lg:mt-10 lg:gap-16 xl:max-w-5xl xl:gap-y-24"
          >
            <div class="mt-8 lg:mt-16">
              <img
                class="relative w-3/4 translate-y-32 translate-x-20"
                src="/images/about-main-2.png"
                alt=""
              />
              <img
                class="w-11/12 -translate-y-full lg:-translate-x-20"
                src="/images/about-main-1.png"
                alt=""
              />
            </div>
            <div class="-mt-24">
              <div class="text-primary-300">
                <h1 class="font-display text-4xl tracking-tight md:text-5xl">Our Agents</h1>
              </div>

              <p class="mt-5 text-secondary-300 md:mt-8">
                Our agents have the passion and knowledge to make your trip or event one of the most
                unique experiences you could imagine. We believe in your adventure!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-36">
        <div class="mb-52 lg:p-10">
          <div
            class="container mt-32 h-fit w-fit flex-none bg-slate-50 py-10 px-14 md:mt-0 md:flex md:max-h-100 md:py-0 md:pb-56 lg:gap-20 lg:px-28"
          >
            <div class="mt-16 md:w-100">
              <h1 class="font-display text-4xl tracking-tight text-primary-300 md:text-5xl">
                We will make it unforgettable!
              </h1>

              <p class="mt-5 text-secondary-300 md:mt-8">
                Be it an event, tour, retreat, family reunion, wedding, or that much needed
                vacation, we will work with you to make it unforgettable!<br /><br />Ask your agent
                about some of their stories, they are happy and excited to share some must see
                opportunities! Our model is to educate, experience, explore, and share.
              </p>
            </div>
            <div class="mt-24">
              <img
                class="mx-auto block max-h-96 min-w-max rounded-lg text-center md:max-h-100"
                src="/images/about-8.png"
              />
            </div>
          </div>
        </div>
        <hr class="mx-auto block h-1 w-2/3 bg-primary-200 text-center" />
      </section>

      <section>
        <h1 class="mb-28 text-center font-display text-5xl text-secondary-300">
          Team Experientialist
        </h1>
        <div class="mb-40 grid grid-cols-2 gap-4 px-1 md:grid-cols-3 md:gap-7 lg:grid-cols-5">
          <div class="text-left">
            <img
              class="mx-auto block max-h-80 w-full rounded-lg text-center"
              src="/images/natasha-6.png"
            />
            <p class="mt-3 font-display text-xl">Natasha</p>
            <p class="text-xs">CEO</p>
            <a class="mt-2 block h-fit w-fit bg-primary-300 px-3 py-2 text-white" href="#">
              Check my bio
            </a>
          </div>
          <div class="text-left">
            <img
              class="mx-auto block max-h-80 w-full rounded-lg text-center"
              src="/images/Dale-1.png"
            />
            <p class="mt-3 font-display text-xl">Dale Botbijl</p>
            <p class="text-xs">Sales Manager</p>
            <a class="mt-2 block h-fit w-fit bg-primary-300 px-3 py-2 text-white" href="#">
              Check my bio
            </a>
          </div>
          <div class="text-left">
            <img
              class="mx-auto block max-h-80 w-full rounded-lg text-center"
              src="/images/Yvette-1.png"
            />
            <p class="mt-3 font-display text-xl">Yvette Marasigan</p>
            <p class="text-xs">Development</p>
            <a class="mt-2 block h-fit w-fit bg-primary-300 px-3 py-2 text-white" href="#">
              Check my bio
            </a>
          </div>
          <div class="text-left">
            <img
              class="mx-auto block max-h-80 w-full rounded-lg text-center"
              src="/images/Jonah-1.png"
            />
            <p class="mt-3 font-display text-xl">Jonah Castro</p>
            <p class="text-xs">Development</p>
            <a class="mt-2 block h-fit w-fit bg-primary-300 px-3 py-2 text-white" href="#">
              Check my bio
            </a>
          </div>
          <div class="text-left">
            <img
              class="mx-auto block max-h-80 w-full rounded-lg text-center"
              src="/images/Stephanie-1.png"
            />
            <p class="mt-3 font-display text-xl">Stephanie Aurelio</p>
            <p class="text-xs">Development</p>
            <a class="mt-2 block h-fit w-fit bg-primary-300 px-3 py-2 text-white" href="#">
              Check my bio
            </a>
          </div>
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
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

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
  const teamSwiper = new Swiper('.team-swiper', {
    modules: [Autoplay],
    slidesPerView: 5,
    spaceBetween: 25,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  })
  teamSwiper.init()
}

const animateCloud = () => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.to('.cloud-parallax, .text', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: '.cloud-parallax',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  })
}

export default {
  mounted: () => {
    mobileNav()
    animateCloud()
  },
}
</script>
