<script setup>
import BaseContainer from "@/components/base/Container.vue"

import placeholder3 from "@/assets/images/placeholder3.jpg"

</script>

<template>
  
  <BaseContainer class="h-screen bg-gray-800">
    <div class=" w-full flex justify-around">
      <div class="p-2 m-2 flex-1">
        <h1 class="text-3xl font-bold">Calling all tribes...are you ready?</h1>
        <p class="">To migrate global business to blockchain, enterprises need a trusted, public chain, with all the benefits of a private one. be part of a community-driven movement that unlocks the potential of collaboration and sovereignty. Together, we will overcome the limitations of outdated systems, seize the opportunities of the future, and build a vibrant ecosystem that paves the way for a truly decentralized and prosperous world for all tribes. Copper enables anyone holding CXC to stake it and earn rewards each time a transaction takes place, providing enterprises with a safe and secure network to do business.</p>
        <a href="#" class="button w-button">Edit this link in the settings tab in the right panel</a>
      </div>
      <div class="flex-1"><img :src="placeholder3" width="239" alt="" class="screenshot">
        <p class="">In the navigator tab located in the right panel you can see all your elements in one place.</p>
      </div>
    </div>
  </BaseContainer>

</template>