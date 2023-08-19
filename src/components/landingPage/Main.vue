<script setup>
import polyCopper from '@/assets/images/low_poly_copper_earth-removebg.png'
import BaseContainer from "@/components/base/Container.vue"

</script>

<template>
  <BaseContainer class=" bg-black items-center md:h-[calc(100vh-96px)] overflow-auto p-4">
    <div class=" w-full  lg:grid lg:grid-cols-2 lg:grid-flow-col lg:gap-4">

      <div id="" class="flex flex-wrap justify-center align-center">
        <h2 class="lg:text-5xl text-4xl font-bold">Uniting Tribes Through Tokenization to Build a Strong and Collaborative Community</h2>
        <p class="p-2">Our team of community-driven contributors are dedicated to creating better network tooling and seamless usability to bring the benefits of decentralization and sovereignty to the masses.</p>
        
        <div class="flex justify-between pb-4 pt-4 w-full">
          <RouterLink
            to="/construction"
            class="text-primary bg-blue-900 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 rounded-full px-6 pt-2 h-10 hover:bg-blue-500 active:bg-yellow-800"
          >
            Copper Trust
        </RouterLink>
          <RouterLink
            to="/construction"
            class="text-primary bg-green-900 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 rounded-full px-6 pt-2 h-10 hover:bg-green-500 active:bg-red-800"
          >
            Build on Copper
        </RouterLink>
        </div>
      </div>
      <div id="" class="flex justify-center align-center">
        <img loading="lazy" :src="polyCopper" alt="" class="fn-cover-image">
      </div>
    </div>
</BaseContainer>

</template>