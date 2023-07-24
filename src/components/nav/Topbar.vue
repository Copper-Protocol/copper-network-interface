<script setup>
import {ref} from 'vue'
const menuItems = ref([
{
    name: 'Home',
    icon: '',
    to: '/'
  },
  {
    name: 'Network',
    icon: '',
    to: '/'
  },
  {
    name: 'Docs',
    icon: '',
    to: '/'
  },
  {
    name: 'Token',
    icon: '',
    to: '/'
  },
  {
    name: 'About',
    icon: '',
    to: '/'
  },
])
import menuLogo from '@/assets/images/Copper-Logo_light-p-500.png'
import AConnectWallet from "@/components/AConnectWallet.vue"
</script>
<template>
<nav class="flex items-center justify-around flex-wrap bg-black p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-8">
    <!-- <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> -->
    <!-- <span class="font-semibold text-xl tracking-tight">Copper Network</span>
   -->
   <span>
    <img :src="menuLogo" alt="COPPER NETWORK" height="10px" width="250" />
   </span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="flex w-full block flex-grow lg:flex lg:items-right lg:w-auto justify-end">
    <div class="text-sm lg:flex-grow  justify-end">
      <router-link 
        :to="item.to" 
        :key="idx" 
        v-for="(item, idx) in menuItems"
        class="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 text-white mr-6 text-lg">
        {{ item.name }}
      </router-link>
    <div class="inline-block">
      <!-- <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
        Connect
      </a> -->
      <AConnectWallet />
    </div> 
    </div>
  </div>
</nav>
</template>
