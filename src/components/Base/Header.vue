<template>
  <div class="flex items-center justify-between px-8 py-5">
    <div class="w-56 lg:w-72">
      <a href="#">
        <img src="@/assets/white-dot-logo.svg" alt="" />
      </a>
    </div>
    <div class="w-auto hidden lg:block">
      <ul class="flex items-center mr-10">
        <li class="font-heading mr-9 text-white hover:text-gray-200 text-lg">
          <a href="#features">Features</a>
        </li>
        <li class="font-heading mr-9 text-white hover:text-gray-200 text-lg">
          <a href="#register">Register</a>
        </li>
      </ul>
    </div>
    <div class="w-auto">
      <div class="flex flex-wrap items-center">
        <div class="w-auto hidden lg:block">
          <a
            class="font-heading py-3.5 px-5 uppercase text-xs trackingx text-white font-bold bg-white bg-opacity-20 hover:bg-opacity-10 transition ease-in rounded-md"
            href="#register"
          >
            Get a head start
          </a>
        </div>
        <div class="w-auto lg:hidden">
          <!-- Burger -->
        </div>
      </div>
    </div>
  </div>
</template>
