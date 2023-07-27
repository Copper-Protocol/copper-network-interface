<template>
  <BaseContainer class=" h-screen bg-black">
  <div class="flex items-center justify-center w-full">
    <div class="p-8 bg-grey-900 rounded-md shadow-lg">
      <h1 class="text-5xl font-bold mb-4">Under Construction</h1>
      <p class="text-gray-600 mb-8">This page is currently under construction. Please check back later!</p>
      <img :src="imgConstruction" alt="Under Construction" class="w-40 h-40 mx-auto mb-4">
      <router-link to="/" class="text-blue-500 font-semibold underline">Go Back to Homepage</router-link>
    </div>
  </div>
</BaseContainer>
</template>

<script setup>
// Add any script setup logic if required
import BaseContainer from "@/components/base/Container.vue"
import imgConstruction from "@/assets/images/CopperToken.png"

</script>

<style>
/* Add custom styles here */
</style>
