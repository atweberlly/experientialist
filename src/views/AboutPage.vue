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
              <a id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="underline"
                >About</a
              >
              <div
                id="dropdownNavbar"
                class="z-10 hidden w-fit divide-y divide-gray-100 bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700"
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
      <section class="min-h-screen bg-sunset bg-cover bg-center bg-no-repeat">
        <h1
          class="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-center font-display text-5xl uppercase tracking-tight text-white md:text-6xl"
        >
          The Founder
        </h1>
      </section>

      <section class="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div class="container">
          <div
            class="grid grid-cols-1 gap-12 sm:mx-auto sm:max-w-sm md:max-w-none md:grid-cols-2 lg:items-center lg:gap-16 xl:max-w-5xl xl:gap-y-24"
          >
            <div>
              <div class="text-primary-300">
                <h1 class="font-display text-4xl tracking-tight md:text-5xl">Natasha Botbijl</h1>
                <p class="mt-2 font-display text-2xl font-normal italic">Founder</p>
              </div>

              <p class="mt-5 text-secondary-300 md:mt-16">
                Hello! I'm Natasha, the founder of Experientialist, and I take great joy in
                facilitating extraordinary moments for others—whether through events, customer
                experience, or life in general.
              </p>
              <img class="translate-y-8 md:translate-y-1/2" src="/images/about-4.png" alt="" />
            </div>
            <div class="order-first md:order-last">
              <img class="w-full" src="/images/natasha-1.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section class="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div class="container">
          <div
            class="grid grid-cols-1 gap-12 sm:mx-auto sm:max-w-sm md:max-w-none md:grid-cols-2 lg:items-center lg:gap-16 xl:max-w-5xl xl:gap-y-24"
          >
            <div class="mt-8 lg:mt-16">
              <img class="w-full" src="/images/natasha-2.png" alt="" />
              <div class="mx-auto w-10/12 -translate-y-1/4 rounded-lg bg-white p-8 shadow-lg">
                <div
                  class="mx-auto flex h-16 w-16 -translate-y-full items-center justify-center rounded-full bg-white shadow-lg"
                >
                  <svg
                    class="m-auto h-6 w-6 text-secondary-300"
                    viewBox="0 0 23 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.0064 19.3893C16.1576 19.3893 14.7592 18.6036 13.8111 17.0323C13.0052 15.7064 12.6023 14.0859 12.6023 12.1708C12.6023 9.71551 13.1949 7.50576 14.38 5.54153C15.6125 3.57731 17.4613 2.00593 19.9263 0.827393L20.5662 2.15324C19.0967 2.79162 17.8168 3.79828 16.7265 5.17324C15.6836 6.5482 15.1621 7.94771 15.1621 9.37178C15.1621 9.96104 15.2332 10.4766 15.3755 10.9186C16.1339 10.2802 17.0109 9.96104 18.0064 9.96104C19.2863 9.96104 20.3529 10.403 21.2062 11.2869C22.1069 12.1217 22.5572 13.2511 22.5572 14.6752C22.5572 16.001 22.1069 17.1305 21.2062 18.0635C20.3529 18.9474 19.2863 19.3893 18.0064 19.3893ZM5.91827 19.3893C4.0695 19.3893 2.67106 18.6036 1.72297 17.0323C0.917098 15.7064 0.51416 14.0859 0.51416 12.1708C0.51416 9.71551 1.10672 7.50576 2.29183 5.54153C3.52434 3.57731 5.37312 2.00593 7.83815 0.827393L8.47811 2.15324C7.00857 2.79162 5.72865 3.79828 4.63835 5.17324C3.59545 6.5482 3.074 7.94771 3.074 9.37178C3.074 9.96104 3.14511 10.4766 3.28732 10.9186C4.04579 10.2802 4.92278 9.96104 5.91827 9.96104C7.19819 9.96104 8.26479 10.403 9.11807 11.2869C10.0188 12.1217 10.4691 13.2511 10.4691 14.6752C10.4691 16.001 10.0188 17.1305 9.11807 18.0635C8.26479 18.9474 7.19819 19.3893 5.91827 19.3893Z"
                      fill="#0B4F4A"
                    />
                  </svg>
                </div>
                <div class="-mt-12">
                  <p class="text-center text-sm text-secondary-200">
                    The memorable experiences I've had while travelling has solidified my passion
                    for providing an excellent travel experience. Don’t just travel to go somewhere,
                    travel to experience it!
                  </p>
                </div>
              </div>
            </div>
            <div class="order-first md:order-last">
              <div class="text-primary-300">
                <h1 class="font-display text-4xl tracking-tight md:text-5xl">
                  A Traveler at Heart
                </h1>
              </div>

              <p class="mt-5 text-secondary-300 md:mt-8">
                I started travelling when I was 12 and haven't stopped since.
              </p>
              <p class="mt-5 text-secondary-300 md:mt-8">
                Throughout my travels, I've had some pretty unique up-close experiences with
                wildlife. I've swum with whale sharks and been within touching distance of panthers
                and barracudas. I even had a pet monkey for a day! I aspire to see and experience
                every kind of adventure on this planet. These fun encounters have embedded my love
                for travelling.
              </p>
              <p class="mt-5 text-secondary-300 md:mt-8">
                I have travelled extensively and have always been captivated by the uniqueness of
                different cultures. I love getting to know the locals and experiencing the culture
                from their perspective.
              </p>

              <img
                class="translate-y-8 md:translate-y-1/2 md:translate-x-16"
                src="/images/about-5.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section class="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div class="container">
          <div
            class="grid grid-cols-1 gap-12 sm:mx-auto sm:max-w-sm md:max-w-none md:grid-cols-2 lg:items-center lg:gap-16 xl:max-w-5xl xl:gap-y-24"
          >
            <div>
              <div class="text-primary-300">
                <h1 class="font-display text-4xl tracking-tight md:text-5xl">
                  An Excellent Travel Service Provider
                </h1>
              </div>

              <p class="mt-5 text-secondary-300 md:mt-8">
                As a traveler, I love luxury and can often be very particular about how an
                experience is crafted. I believe that an excellent service provider treats people
                well and goes out of their way to ensure that your experience is unforgettable.
              </p>
              <p class="mt-5 text-secondary-300 md:mt-8">
                This has shaped my passion for creating exceptional customer experiences.
              </p>

              <img class="translate-y-8 md:translate-y-1/4" src="/images/natasha-3.png" alt="" />
            </div>
            <div>
              <img class="w-full" src="/images/about-6.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section class="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div class="container">
          <div
            class="grid grid-cols-1 gap-12 sm:mx-auto sm:max-w-sm md:max-w-none md:grid-cols-2 lg:items-center lg:gap-16 xl:max-w-5xl xl:gap-y-24"
          >
            <div>
              <img class="w-full" src="/images/natasha-4.png" alt="" />
            </div>
            <div class="order-first md:order-last">
              <div class="text-primary-300">
                <h1 class="font-display text-2xl italic tracking-tight md:text-3xl">
                  Featured in <span class="uppercase not-italic text-black">forbes</span> Magazine
                </h1>
              </div>

              <p class="mt-5 text-secondary-300 md:mt-8">
                I am humbled to say that I have been featured in FORBES Magazine for my work in the
                customer experience field.
              </p>
              <p class="mt-5 text-secondary-300 md:mt-8">
                I'm a certified corporate event destination planner, and I have my certification in
                many different travel locations.
              </p>
              <p class="mt-5 text-secondary-300 md:mt-8">
                I have been a consultant within the hospitality industry, helping hotels and service
                professionals prefect their client experiences. I love helping companies understand
                what it takes to wow their customers and keep them coming back for more
              </p>

              <img
                class="translate-y-8 md:translate-y-1/4 md:translate-x-16"
                src="/images/about-7.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section class="mb-32 bg-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div class="container">
          <div
            class="grid grid-cols-1 gap-12 sm:mx-auto sm:max-w-sm md:max-w-none md:grid-cols-2 lg:items-center lg:gap-16 xl:max-w-5xl xl:gap-y-24"
          >
            <div>
              <div class="text-primary-300">
                <h1 class="font-display text-4xl tracking-tight md:text-5xl">
                  A Mother of Young Kids Who Love to Travel
                </h1>
              </div>

              <p class="mt-5 text-secondary-300 md:mt-8">
                I have two young kids who love to explore and travel– they are my inspiration for
                wanting to see as much of the world as possible. My son is on the spectrum and has
                achieved amazing things through experiences (that I am so proud of!), which is why
                inclusion and sustainability are such essential causes for me.
              </p>
              <p class="mt-5 text-secondary-300 md:mt-8">
                Over the years, I have spoken on many stages about customer experience–sharing my
                insights and learnings with others.
              </p>
              <p class="mt-5 text-secondary-300 md:mt-8">
                I look forward to helping you plan your next company retreat, event, or personal
                travel experience. Our agents are some of the most educated and dedicated
                individuals in the industry!
              </p>
            </div>
            <div class="mt-4 lg:mt-16">
              <img class="w-full" src="/images/natasha-5.png" alt="" />
            </div>
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

export default {
  mounted: () => {
    slider()
    mobileNav()
  },
}
</script>
