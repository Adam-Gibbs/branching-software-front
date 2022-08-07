<template>
  <section class="py-28 bg-black overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="max-w-lg mx-auto text-center mb-14">
        <img
          class="mx-auto mb-8"
          src="gradia-assets/images/newsletter/email.svg"
          alt=""
        />
        <h2
          class="mb-5 font-heading font-semibold text-6xl sm:text-7xl text-white"
        >
          Show your interest in this project
        </h2>
        <p class="text-gray-400 text-lg">
          Be the first to know about progress and development.
        </p>
      </div>
      <div class="flex flex-wrap max-w-xl mx-auto -m-2.5">
        <div class="w-full p-2.5">
          <input
            class="w-full px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 focus:border-gray-700 outline-none focus:ring-4 focus:ring-midGreen placeholder-gray-500 rounded"
            type="text"
            placeholder="Your name"
          />
        </div>
        <div class="w-full p-2.5">
          <input
            class="w-full px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 focus:border-gray-700 outline-none focus:ring-4 focus:ring-midGreen placeholder-gray-500 rounded"
            type="text"
            placeholder="Your email address"
          />
        </div>
        <div class="w-full p-2.5">
          <div class="group relative">
            <div
              class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-startGrad to-endGrad opacity-0 group-hover:opacity-50 rounded transition ease-out duration-300"
            ></div>
            <button
              class="p-1 w-full font-heading font-semibold text-lg text-white uppercase overflow-hidden rounded"
            >
              <div
                class="relative py-4 px-11 bg-gradient-to-r from-startGrad to-endGrad overflow-hidden rounded"
              >
                <p>Subscribe now</p>
              </div>
            </button>
          </div>
        </div>
        <div class="w-full p-2.5">
          <p class="text-sm text-gray-500 text-center">
            We never share your information to any third party
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
