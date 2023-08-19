<script setup>
import BaseContainer from "@/components/base/Container.vue"

</script>
<template>
<BaseContainer>
    <div class="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      <header class="text-3xl font-semibold mb-8">Thank You for Subscribing!</header>
      <main class="bg-white text-gray-900 p-6 rounded-lg shadow-md">
        <p class="mb-4 text-gray-900">
          We appreciate your subscription. You will now receive the latest news and updates from us in your inbox.
        </p>
        <router-link to="/" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
          Back to Home
        </router-link>
      </main>
    </div>
</BaseContainer>
  </template>
  