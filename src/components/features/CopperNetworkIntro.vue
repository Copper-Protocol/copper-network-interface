<template>
  <BaseContainer class="bg-gray-800 ">
    <div class="p-8 text-grey-200">
      <div class="md:flex md:justify-center md:items-center">
        <div class="md:w-1/2 md:mr-8">
          <img
            :src="imgFeature002"
            alt="Copper Network"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div class="md:w-1/2 text-center md:text-left">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Welcome to Copper Network</h2>
          <p class="text-lg text-gray-600 mb-6">
            Discover a world of possibilities with Copper Network - a trailblazing organization at the forefront of blockchain technology and decentralized solutions. Our vision is to reshape the landscape of business and governance, empowering individuals and businesses with true autonomy and sovereignty.
          </p>
          <p class="text-lg text-gray-600 mb-6">
            We believe in the power of decentralization to drive positive change and foster trust in every transaction. At Copper Network, we're committed to building a vibrant ecosystem that fosters collaboration, inclusivity, and innovation.
          </p>
          <p class="text-lg text-gray-600 mb-6">
            Our mission is to democratize access to decentralized technology, making it accessible and beneficial to all. With our cutting-edge products and protocols, we're setting new standards for transparency, security, and efficiency in the blockchain space.
          </p>
          <a href="#about" class="text-blue-500 font-semibold underline">Learn More</a>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>

<script setup>
import BaseContainer from "@/components/base/Container.vue"
import imgFeature002 from "@/assets/images/feature-002.png"
</script>

<style>
/* Add custom styles here */
</style>
