<template>
  <div class="min-h-screen min-w-xs bg-beach bg-cover bg-center bg-no-repeat antialiased md:bg-top lg:bg-top-16">
    <div class="absolute inset-0 min-w-xs bg-secondary-500/50 md:hidden" aria-hidden="true" aria-label="Fullscreen background overlay"></div>
    <div class="relative grid h-screen grid-cols-1 items-center py-8 text-white md:grid-cols-2 md:py-0">
      <div>
        <img class="mx-auto w-56 lg:w-64" src="/images/experientialist-logotype-alt.png" alt="Experientialist" />
      </div>
      <div class="md:relative md:h-full">
        <div class="inset-0 hidden bg-secondary-500/50 md:absolute md:block" aria-hidden="true" aria-label="Half screen background overlay"></div>
        <div class="md:relative md:flex md:h-full md:flex-col md:justify-center">
          <h1 class="text-center text-5xl uppercase tracking-tight">
            Great things
            <br />
            are coming
          </h1>
          <div class="mt-4 flex justify-center">
            <button @click="showLearnMore(true);" class="mx-auto inline-block bg-primary-300 px-4 py-3">Learn more</button>
          </div>
          <div class="mt-4 flex items-center justify-center gap-4">
            <a href="https://www.facebook.com/ExperientialistTravel" target="_blank">
              <span class="sr-only">Facebook</span>
              <span class="fab fa-facebook text-2xl"></span>
            </a>
            <a href="https://www.instagram.com/experientialist_travel/" target="_blank">
              <span class="sr-only">Instagram</span>
              <span class="fab fa-instagram text-2xl"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div id="learn-more" class="hidden w-full h-full bg-opacity-80 top-0 fixed sticky-0">
       <div class="2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
          <div class="w-96 md:w-auto bg-secondary-500 relative flex flex-col justify-center items-center py-16 px-4 md:px-24 xl:py-24 xl:px-36">
             <div role="logo">
                <img class="mx-auto w-56 lg:w-64" src="/images/experientialist-logotype-alt.png" alt="Experientialist" />
             </div>
              <div class="mt-12">
                  <h1 role="main" class="text-5xl font-display text-secondary-50 lg:text-6xl font-bold text-center">Our Blog is Launching Soon.</h1>
                </div>
                <div class="mt">
                  <p class="mt-8 sm:w-96 text-lg font-light text-secondary-100 text-center">Sign up for our latest blog posts and to be the first to know when we go live! </p>
                </div>
                <form class="flex grid-cols-2 mt-16 justify-center">
                  <div>
                    <label class="relative block">
                      <input class="placeholder:italic placeholder:text-secondary-100 text-secondary-200 block bg-white w-full py-4 pl-2 md:pl-4 pr-0 sm:pr-8 md:pr-16 shadow-sm text-sm focus:outline-none focus:border-primary-300 focus:ring-primary-300 focus:ring-1" placeholder="Enter your email here*" type="text" name="search"/>
                    </label>
                  </div>
                  <div>
                    <button class="inline-block bg-primary-300 hover:bg-primary-500 px-4 py-4 text-sm capitalize text-secondary-50">
                      Notify Me! 
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-7 hidden md:inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </form>
              <button @click="showLearnMore(true)" class="text-white absolute top-8 right-8 hover:text-secondary-50" aria-label="close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M6 6L18 18" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
          </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: () => {
    document.title = 'Coming Soon'

    
  },
  methods: {
    
   showLearnMore(flag) {
      let menu = document.getElementById('learn-more')
      menu.classList.toggle('hidden')
    }
  }
}
</script>
