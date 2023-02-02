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
      <section class="h-[90vh] w-full py-8 sm:py-12 md:h-screen md:py-16 lg:py-20">
        <div class="relative">
          <h1
            class="absolute top-44 z-20 w-full text-center font-display text-4xl font-bold tracking-tight text-primary-300 md:top-28 md:text-6xl lg:top-72 2xl:text-9xl"
          >
            Plan your <br /><span class="ml-5 italic">Experience</span>
          </h1>
          <div class="absolute h-full w-full">
            <div class="absolute inset-y-72 left-10 w-1/2 md:left-16 lg:inset-y-56 xl:inset-y-20">
              <img
                class="tilt-img absolute left-16 top-0 w-80 shadow-2xl md:left-44 lg:left-16 lg:top-10 xl:left-36 xl:top-10"
                src="/images/indoor-shot.png"
                alt="Indoor"
              />
              <img
                class="tilt-img absolute left-0 top-40 w-36 shadow-2xl md:top-52 md:w-56 lg:top-[25rem] xl:left-12 xl:top-[26rem]"
                src="/images/falls-adventure.png"
                alt="Falls Adventure"
              />
              <img
                class="tilt-img absolute left-full right-0 top-44 w-36 shadow-2xl md:top-36 md:w-56 lg:left-40 lg:top-[28rem] xl:left-64 xl:top-[28rem]"
                src="/images/girl-with-giraffe.png"
                alt="Girl with giraffe"
              />
            </div>
            <div class="absolute inset-y-20 right-0 hidden w-1/2 lg:block xl:right-5 2xl:right-16">
              <img
                class="tilt-img absolute top-0 right-32 w-80 shadow-2xl xl:right-48 2xl:right-64"
                src="/images/diner.png"
                alt="Diner"
              />
              <img
                class="tilt-img absolute inset-y-80 right-64 w-40 shadow-2xl xl:right-80"
                src="/images/swimming-maldives.png"
                alt="Swimming in Maldives"
              />
              <img
                class="tilt-img absolute inset-y-60 right-10 w-56 shadow-2xl xl:right-24"
                src="/images/girl-in-sofa.png"
                alt="Girl in sofa"
              />
            </div>
          </div>
        </div>
        <button class="absolute left-0 bottom-12 mx-auto w-full animate-bounce" id="scroll-down">
          <span class="sr-only">Scroll down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 72 72"
            class="mx-auto h-12 w-12"
          >
            <path
              fill="#C69646"
              d="M51.87 17.13a2.987 2.987 0 0 0-4.23 0L36 28.74 24.33 17.1a2.99 2.99 0 0 0-5.107 2.115 2.991 2.991 0 0 0 .877 2.115L33.87 35.1a2.988 2.988 0 0 0 4.23 0l13.77-13.77a2.953 2.953 0 0 0 0-4.2Z"
            ></path>
            <path
              fill="#C69646"
              d="M51.87 36.9a2.986 2.986 0 0 0-4.23 0L36 48.51 24.36 36.87a2.99 2.99 0 1 0-4.23 4.23L33.9 54.87a2.988 2.988 0 0 0 4.23 0L51.9 41.1a2.979 2.979 0 0 0-.03-4.2Z"
            ></path>
          </svg>
        </button>
      </section>
      <section id="form-section" class="py-8 sm:py-12 md:py-16 lg:py-20">
        <div class="container mt-24 lg:my-32">
          <h5 class="text-center text-xl tracking-tight text-secondary-300 md:text-2xl">
            Have a trip in mind and want to work with us? Please fill out the form below and we’ll
            set up a time to connect!
          </h5>
          <p class="mt-4 text-center text-secondary-500">
            Just have a general question or want to learn more about our services?
          </p>

          <div class="mx-auto mt-8 w-full bg-[#F8F3EC] p-5 text-center md:mt-16 md:w-3/4 lg:w-2/5">
            <p class="text-normal font-bold md:text-lg">Please be advised:</p>
            <p class="mt-5 text-sm font-medium italic">
              We at Experientialist know how crucial it is for you to have a trouble-free trip. We
              strongly suggest that you book your flight through the company you prefer and leave
              the land travel to us, since that's what we do best.
            </p>
            <p class="mt-5 text-sm">
              Please review our services and fees at
              <a href="#" class="text-primary-300">https://experientialist.ca/fees</a>
            </p>
          </div>

          <div class="mx-auto mt-4 max-w-5xl md:mt-8">
            <div class="mt-8 flex lg:mt-12">
              <form class="grid w-full grid-cols-1 gap-4 md:gap-10">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <label class="form-label" for="name"
                      >Your Full Name <span class="text-red-500">*</span></label
                    >
                    <input class="form-input" id="name" type="text" placeholder="ex: John Doe" />
                  </div>

                  <div>
                    <label class="form-label" for="email"
                      >Your email<span class="text-red-500">*</span></label
                    >
                    <input
                      class="form-input"
                      id="email"
                      type="email"
                      placeholder="ex: johndoe@main.com"
                    />
                  </div>

                  <div>
                    <label class="form-label" for="phone"
                      >Your Phone number<span class="text-red-500">*</span></label
                    >
                    <input
                      class="form-input"
                      id="phome"
                      type="text"
                      placeholder="ex: (307) 555-0133"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <label class="form-label" for="name">Where would you like to go?</label>
                    <input class="form-input" id="place" type="text" placeholder="ex: hawaii" />
                  </div>
                  <div>
                    <label class="form-label" for="depart">When would you like to depart?</label>
                    <input
                      class="form-input"
                      id="depart"
                      type="date"
                      placeholder="ex: 03/25/2023"
                    />
                  </div>
                  <div>
                    <label class="form-label" for="depart">When would you like to return?</label>
                    <input
                      class="form-input"
                      id="depart"
                      type="date"
                      placeholder="ex: 03/28/2023"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <label class="form-label" for="date-flexible">Are your dates flexible?</label>
                    <div class="flex">
                      <div class="form-inline mr-4">
                        <input
                          class="form-radio-input"
                          type="radio"
                          name="date-flexible"
                          id="date-flexible1"
                          value="Yes"
                        />
                        <label for="date-flexible1">Yes</label>
                      </div>
                      <div class="form-inline">
                        <input
                          class="form-radio-input"
                          type="radio"
                          name="date-flexible"
                          id="date-flexible2"
                          value="No"
                        />
                        <label for="date-flexible2">No</label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label class="form-label" for="name"
                      >Number of travelers?<span class="text-red-500">*</span></label
                    >
                    <input class="form-input" id="travelers" type="text" placeholder="ex: 2" />
                  </div>
                  <div>
                    <label class="form-label" for="name">Approx. ages of travelers?</label>
                    <input class="form-input" id="travelers" type="text" placeholder="ex: 20-25" />
                  </div>
                </div>
                <div>
                  <label class="form-label" for="message"
                    >How far are you in the planning process? Have you booked anything yet?</label
                  >
                  <textarea
                    class="form-input h-20"
                    id="message"
                    type="text"
                    placeholder="Type your answer here..."
                  ></textarea>
                </div>

                <div>
                  <p class="my-5 text-sm italic text-primary-200">
                    Please answer the following questions:
                  </p>
                  <div>
                    <label class="form-label !text-base !normal-case" for="budget"
                      >What is your land only budget (no flights) for all travelers in your group?
                      Please note: in most destinations we partner with hotels that run anywhere
                      from $500-$1000+ per night per room. This means we generally work with budgets
                      of $1,000 per day and up for full itinerary planning.<span
                        class="text-red-500"
                        >*</span
                      ></label
                    >
                    <div class="flex flex-col gap-2">
                      <div class="form-inline mr-4">
                        <input
                          class="form-radio-input"
                          type="radio"
                          name="budget"
                          id="budget1"
                          value="Up to $5,000"
                        />
                        <label for="budget1">Up to $5,000</label>
                      </div>
                      <div class="form-inline">
                        <input
                          class="form-radio-input"
                          type="radio"
                          name="budget"
                          id="budget2"
                          value="$5,000 to $10,000"
                        />
                        <label for="budget2">$5,000 to $10,000</label>
                      </div>
                      <div class="form-inline">
                        <input
                          class="form-radio-input"
                          type="radio"
                          name="budget"
                          id="budget3"
                          value="$10,000 to $15,000"
                        />
                        <label for="budget3">$10,000 to $15,000</label>
                      </div>
                      <div class="form-inline">
                        <input
                          class="form-radio-input"
                          type="radio"
                          name="budget"
                          id="budget4"
                          value="$15,000 to $20,000"
                        />
                        <label for="budget4">$15,000 to $20,000</label>
                      </div>
                      <div class="form-inline">
                        <input
                          class="form-radio-input"
                          type="radio"
                          name="budget"
                          id="budget5"
                          value="$20,000 to $40,000"
                        />
                        <label for="budget5">$20,000 to $40,000</label>
                      </div>
                      <div class="form-inline">
                        <input
                          class="form-radio-input"
                          type="radio"
                          name="budget"
                          id="budget6"
                          value="Over $40,000"
                        />
                        <label for="budget6">Over $40,000</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label class="form-label !text-base !normal-case" for="agree"
                    >The process of researching and putting together a customized, bespoke proposal
                    that matches your travel desires takes time. Please review our services and fees
                    at
                    <a href="#" class="italic text-primary-300">https://experientialist.ca/fees</a>.
                    Our fees vary and are based upon the number of travelers, destinations, the
                    level of complication anticipated and other factors.
                    <span class="text-red-500">*</span></label
                  >
                  <div class="flex flex-col gap-2">
                    <div class="form-inline mr-4">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="agree"
                        id="agree"
                        value=""
                      />
                      <label for="agree"
                        >I confirm that I have read and understand the fees that may be associated
                        with travel arrangements made through Experientialist.</label
                      >
                    </div>
                  </div>
                </div>
                <div>
                  <label class="form-label !text-base !normal-case" for="hotel"
                    >What kind of hotels do you like to stay in?
                    <span class="text-red-500">*</span></label
                  >
                  <div class="flex flex-col gap-2">
                    <div class="form-inline mr-4">
                      <input
                        class="form-radio-input"
                        type="radio"
                        name="hotel"
                        id="hotel1"
                        value="Moderate"
                      />
                      <label for="hotel1">Moderate</label>
                    </div>
                    <div class="form-inline">
                      <input
                        class="form-radio-input"
                        type="radio"
                        name="hotel"
                        id="hotel2"
                        value="Luxury"
                      />
                      <label for="hotel2">Luxury</label>
                    </div>
                    <div class="form-inline">
                      <input
                        class="form-radio-input"
                        type="radio"
                        name="hotel"
                        id="hotel3"
                        value="Boutique"
                      />
                      <label for="hotel3">Boutique</label>
                    </div>
                    <div class="form-inline">
                      <input
                        class="form-radio-input"
                        type="radio"
                        name="hotel"
                        id="hotel4"
                        value="Luxury villas or apartments"
                      />
                      <label for="hotel4">Luxury villas or apartments</label>
                    </div>
                    <div class="form-inline">
                      <input
                        class="other-input form-radio-input"
                        type="radio"
                        name="hotel"
                        id="hotel5"
                        value="Other"
                      />
                      <label for="hotel5">Other</label>
                      <textarea
                        class="form-input h-18 mt-3 hidden w-52"
                        id="hotel5-specify"
                        type="text"
                        placeholder="Please specify your answer..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div>
                  <label class="form-label !text-base !normal-case" for="experience"
                    >What kind of experience are you looking for?</label
                  >
                  <div class="flex flex-col gap-2">
                    <div class="form-inline mr-4">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="experience"
                        id="experience1"
                        value="Romantic"
                      />
                      <label for="experience1">Romantic</label>
                    </div>
                    <div class="form-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="experience"
                        id="experience2"
                        value="Rest and Relaxation"
                      />
                      <label for="experience2">Rest and Relaxation</label>
                    </div>
                    <div class="form-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="experience"
                        id="experience3"
                        value="Off the beaten path"
                      />
                      <label for="experience3">Off the beaten path</label>
                    </div>
                    <div class="form-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="experience"
                        id="experience4"
                        value="Luxury villas or apartments"
                      />
                      <label for="experience4">Luxury villas or apartments</label>
                    </div>
                    <div class="form-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="experience"
                        id="experience5"
                        value="Local culture"
                      />
                      <label for="experience5">Local Culture</label>
                    </div>
                    <div class="form-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="experience"
                        id="experience6"
                        value="Family friendly"
                      />
                      <label for="experience6">Family friendly</label>
                    </div>
                    <div class="form-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="experience"
                        id="experience7"
                        value="Food and wine"
                      />
                      <label for="experience7">Food and wine</label>
                    </div>
                    <div class="form-inline">
                      <input
                        class="other-input form-check-input"
                        type="checkbox"
                        name="experience"
                        id="experience8"
                        value="Other"
                      />
                      <label for="experience8">Other</label>
                      <textarea
                        class="form-input h-18 mt-3 hidden w-52"
                        id="experience8-specify"
                        type="text"
                        placeholder="Please specify your answer..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div>
                  <label class="form-label !text-base !normal-case" for="activities"
                    >What activities are you interested in?</label
                  >
                  <div class="flex flex-col gap-2">
                    <div class="form-inline mr-4">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="activities"
                        id="activities1"
                        value="Beach and water"
                      />
                      <label for="activities1">Beach and water</label>
                    </div>
                    <div class="form-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="activities"
                        id="activities2"
                        value="Gambling"
                      />
                      <label for="activities2">Gambling</label>
                    </div>
                    <div class="form-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="activities"
                        id="activities3"
                        value="Scuba"
                      />
                      <label for="activities3">Scuba</label>
                    </div>
                    <div class="form-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="activities"
                        id="activities4"
                        value="Adventure activities"
                      />
                      <label for="activities4">Adventure activities</label>
                    </div>
                    <div class="form-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="activities"
                        id="activities5"
                        value="Golf"
                      />
                      <label for="activities5">Golf</label>
                    </div>

                    <div class="form-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="activities"
                        id="activities6"
                        value="Nightlife"
                      />
                      <label for="activities6">Nightlife</label>
                    </div>
                    <div class="form-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="activities"
                        id="activities7"
                        value="Arts and theater"
                      />
                      <label for="activities7">Arts and theater</label>
                    </div>
                    <div class="form-inline">
                      <input
                        class="other-input form-check-input"
                        type="checkbox"
                        name="activities"
                        id="activities8"
                        value="Other"
                      />
                      <label for="activities8">Other</label>
                      <textarea
                        class="form-input h-18 mt-3 hidden w-52"
                        id="activities8-specify"
                        type="text"
                        placeholder="Please specify your answer..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div>
                  <label class="form-label !text-base !normal-case" for="question1"
                    >If traveling with more than 2 people, what is your preferred room set up? (A
                    suite, connecting rooms, etc.)? <span class="text-red-500">*</span></label
                  >
                  <textarea
                    class="form-input h-20"
                    id="question1"
                    type="text"
                    placeholder="Type your answer here..."
                  ></textarea>
                </div>
                <div>
                  <label class="form-label !text-base !normal-case" for="question2"
                    >Anything you absolutely must do or see?</label
                  >
                  <textarea
                    class="form-input h-20"
                    id="question2"
                    type="text"
                    placeholder="Type your answer here..."
                  ></textarea>
                </div>
                <div>
                  <label class="form-label !text-base !normal-case" for="question3"
                    >What would make this a "wow" trip that you will be talking about for years to
                    come?</label
                  >
                  <textarea
                    class="form-input h-20"
                    id="question3"
                    type="text"
                    placeholder="Type your answer here..."
                  ></textarea>
                </div>
                <div>
                  <label class="form-label !text-base !normal-case" for="question4"
                    >What are your travel pet peeves?</label
                  >
                  <textarea
                    class="form-input h-20"
                    id="question4"
                    type="text"
                    placeholder="Type your answer here..."
                  ></textarea>
                </div>
                <div>
                  <label class="form-label !text-base !normal-case" for="question5"
                    >Do your or anyone you are traveling with have any dietary restrictions or
                    mobility issues?</label
                  >
                  <textarea
                    class="form-input h-20"
                    id="question5"
                    type="text"
                    placeholder="Type your answer here..."
                  ></textarea>
                </div>
                <div>
                  <label class="form-label !text-base !normal-case" for="question6"
                    >What else would you like me to know? Please share anything additional that
                    might be important for me to know such as your preferred room set up, any
                    special events you are celebrating additional information about your budget or
                    travel preferences, etc.</label
                  >
                  <textarea
                    class="form-input h-20"
                    id="question6"
                    type="text"
                    placeholder="Type your answer here..."
                  ></textarea>
                </div>
                <div>
                  <label class="form-label !text-base !normal-case" for="survey"
                    >How did you hear about EXPERIENTIALIST?
                    <span class="text-red-500">*</span></label
                  >
                  <div class="flex flex-col gap-2">
                    <div class="form-inline mr-4">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="survey"
                        id="survey1"
                        value="Social Media"
                      />
                      <label for="survey1">Social Media (Facebook, Instagram, Youtube)</label>
                    </div>
                    <div class="form-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="survey"
                        id="survey2"
                        value="Friend or Family"
                      />
                      <label for="survey2">Friend or Family</label>
                    </div>

                    <div class="form-inline">
                      <input
                        class="other-input form-check-input"
                        type="checkbox"
                        name="survey"
                        id="survey3"
                        value="Other"
                      />
                      <label for="survey3">Other</label>
                      <textarea
                        class="form-input h-18 mt-3 hidden w-52"
                        id="survey3-specify"
                        type="text"
                        placeholder="Please specify your answer..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    class="mt-4 w-full bg-primary-300 px-4 py-3 text-sm uppercase tracking-wide text-white hover:border hover:border-primary-300 hover:bg-white hover:text-primary-300 md:mt-8 lg:w-auto"
                    type="submit"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-8 bg-secondary-500 py-8 sm:py-12 md:py-16 lg:py-20">
        <div class="container">
          <h1 class="font-display text-xl text-white md:text-2xl lg:text-4xl">
            Contact Information
          </h1>
          <p class="mt-4 text-white lg:text-lg">
            Email:
            <a
              href="mailto:hello@experientialist.ca"
              class="cursor-pointer text-primary-300 hover:font-medium"
              >hello@experientialist.ca</a
            >
          </p>
          <p class="mt-2 text-white lg:text-lg">
            Phone:
            <a href="tel:+14034603554" class="cursor-pointer text-primary-300 hover:font-medium"
              >+1 (403) 460-3554</a
            >
          </p>
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
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const tiltIMG = () => {
  addEventListener('mouseover', (event) => {
    const img = document.querySelectorAll('.tilt-img')
    const fullHeight = document.documentElement.scrollHeight
    const fullWidth = document.documentElement.scrollWidth

    const sxPos = (event.pageX / fullWidth) * 100 - 50
    const syPos = (event.pageX / fullHeight) * 100 - 50

    gsap.to(img, {
      rotationY: 0.25 * sxPos,
      rotationX: 0.15 * syPos,
      rotationZ: 0.2,
      transformPerspective: 500,
      transformOrigin: 'center center',
    })
  })
}
const scrollDown = () => {
  const scrollDownButton = document.getElementById('scroll-down')
  const sectionTwo = document.getElementById('form-section')
  if (scrollDownButton) {
    scrollDownButton.addEventListener('click', () => {
      gsap.to(window, {
        duration: 1,
        scrollTo: sectionTwo,
      })
    })
  }
}

const showSpecify = () => {
  const otherInputs = document.querySelectorAll('.other-input')
  otherInputs.forEach(function (elem) {
    elem.addEventListener('click', function () {
      const specify = elem.closest('div').querySelector('textarea')
      if (elem.checked) {
        specify.classList.remove('hidden')
      } else {
        specify.classList.add('hidden')
      }
    })
  })
}

export default {
  mounted: () => {
    tiltIMG(), scrollDown(), showSpecify()
  },
}
</script>
