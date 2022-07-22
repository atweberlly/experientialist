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
            <a class="mx-auto inline-block bg-primary-300 px-4 py-3" href="#">Learn more</a>
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
  </div>
</template>

<script>
export default {
  mounted: () => {
    document.title = 'Coming Soon'
  },
}
</script>
