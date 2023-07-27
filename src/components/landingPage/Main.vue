<script setup>
import polyCopper from '@/assets/images/low_poly_copper_earth-removebg.png'
import BaseContainer from "@/components/base/Container.vue"

</script>

<template>
  <BaseContainer class="lg:h-screen bg-black items-center p-4">
    <div class=" w-full  lg:grid lg:grid-cols-2 lg:grid-flow-col lg:gap-4">

      <div id="" class="flex flex-wrap justify-center align-center">
        <h2 class="lg:text-5xl text-4xl font-bold">Uniting Tribes Through Tokenization to Build a Strong and Collaborative Community</h2>
        <p class="p-2">Our team of community-driven contributors are dedicated to creating better network tooling and seamless usability to bring the benefits of decentralization and sovereignty to the masses.</p>
        
        <div class="flex justify-between pb-4 pt-4 w-full">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Copper Trust</button>
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Build on Copper</button>
        </div>
      </div>
      <div id="" class="flex justify-center align-center">
        <img loading="lazy" :src="polyCopper" alt="" class="fn-cover-image">
      </div>
    </div>
</BaseContainer>

</template>