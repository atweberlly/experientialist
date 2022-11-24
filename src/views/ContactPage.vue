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
          <h1
            class="text-center font-display text-4xl uppercase tracking-tight text-primary-300 md:text-5xl"
          >
            Contact Us
          </h1>
          <p class="mt-4 text-center text-secondary-400">
            We have had the pleasure of planning, assisting, and consulting on some amazing client
            events over the years.
          </p>

          <div class="mx-auto mt-8 h-96 max-w-5xl bg-gray-500 md:mt-16"></div>

          <div class="mx-auto mt-4 max-w-5xl md:mt-8">
            <h1 class="text-center font-display text-3xl text-secondary-300 md:text-5xl">
              Contact us to find out more or <br />
              how we can help you better.
            </h1>
            <div class="mt-8 flex flex-col gap-8 lg:mt-12 lg:flex-row xl:gap-16">
              <form class="grid grid-cols-1 gap-4 lg:w-9/12">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label class="form-label" for="name">Your name</label>
                    <input class="form-input" id="name" type="text" placeholder="" />
                  </div>

                  <div>
                    <label class="form-label" for="email">Your email</label>
                    <input class="form-input" id="email" type="email" placeholder="" />
                  </div>
                </div>

                <div>
                  <label class="form-label" for="subject">Subject</label>
                  <input class="form-input" id="subject" type="text" placeholder="" />
                </div>

                <div>
                  <label class="form-label" for="message">Message</label>
                  <textarea
                    class="form-input h-32"
                    id="message"
                    type="text"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                <div>
                  <button
                    class="w-full bg-primary-300 px-4 py-3 text-sm uppercase tracking-wide text-white lg:w-auto"
                    type="submit"
                  >
                    Send message
                  </button>
                </div>
              </form>
              <div>
                <div>
                  <h5 class="text-xl font-medium text-secondary-300 md:text-2xl">Address</h5>
                  <p class="mt-5 text-primary-200">
                    224 Pump Hill Gardens sw, <br />
                    Calgary, Alberta, Canada, T2V 4M6
                  </p>
                </div>
                <div class="mt-8 md:mt-16">
                  <h5 class="text-xl font-medium text-secondary-300 md:text-2xl">Contact Info</h5>
                  <p class="mt-5 text-primary-200">
                    <span class="block">
                      Email: <a href="mailto:hello@experientialist.ca">hello@experientialist.ca</a>
                    </span>
                    <span class="block"> Phone : <a href="tel:+60 000000">+60 000000</a> </span>
                  </p>
                </div>
              </div>
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
