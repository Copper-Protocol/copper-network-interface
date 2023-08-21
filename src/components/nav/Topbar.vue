<script setup>
import {onMounted, ref} from 'vue'
import { storeToRefs } from 'pinia'
import { formatEthAddress } from '../../lib/util'

import NetworkSwitcher from '@/components/network/Switcher.vue'
import {
  HomeIcon,
  DesktopComputerIcon,
  BookOpenIcon,
  CloudDownloadIcon,
  CurrencyDollarIcon,
  InformationCircleIcon
} from "@vue-hero-icons/outline"

const menuItems = ref([
{
    name: 'Home',
    icon: HomeIcon,
    to: '/'
  },
  {
    name: 'Network',
    icon: DesktopComputerIcon,
    to: '/construction'
  },
  {
    name: 'Docs',
    icon: BookOpenIcon,
    to: '/docs'
  },
  {
    name: 'Development',
    icon: BookOpenIcon,
    to: '/docs'
  },
  {
    name: 'Token',
    icon: CurrencyDollarIcon,
    to: '/token'
  },
  {
    name: 'Airdrop',
    icon: CloudDownloadIcon,
    to: '/airdrop'
  },
  {
    name: 'About',
    icon: InformationCircleIcon,
    to: '/about'
  },
  {
    name: 'Admin',
    icon: InformationCircleIcon,
    to: '/admin/dashboard'
  },
])
import menuLogo from '@/assets/images/Copper-Logo_light-p-500.png'
import AConnectWallet from "@/components/AConnectWallet.vue"
import {useCopperProtocolStore} from '@/store/copperProtocol.js';
import {useNavigationStore} from '@/store/navigation.js';

const ethersStore = useCopperProtocolStore();
const navStore = useNavigationStore();
const {topbar, getTopbar} = storeToRefs(navStore)
const {disconnectFromEth} = ethersStore

function disconnect () {
  console.log(`DISCONNECT`)
  disconnectFromEth()
}
onMounted(() => {
  console.log(`Mounted...`, {topbarLinks: getTopbar})
})
</script>
<template>
<nav class="flex items-center justify-between flex-wrap bg-black p-6 flex-shrink-1 flex-grow-0">
  <div class="flex items-center flex-shrink-1 flex-grow-0 text-white mr-8">
   <span>
    <img :src="getTopbar.logoImg" :alt="getTopbar.title" height="10px" width="250" />
   </span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="flex w-full block flex-grow lg:flex lg:items-right lg:w-auto justify-end">
    <div class="text-sm  justify-end">
      <router-link 
        :to="item.to" 
        :key="idx" 
        v-for="(item, idx) in topbar.menuItems"
        class="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 text-white mr-6 text-lg">
        {{ item.name }}
      </router-link>
      <div class="inline-block p-2 px-4">
        <NetworkSwitcher class="z-10" />
      </div> 
      <div class="inline-block" v-if="!ethersStore.account">
        <AConnectWallet v-if="!ethersStore.account" />
      </div>
      <div class="inline-block p-2 px-4" v-if="ethersStore.account">
          <button class="bg-green-500 hover:bg-green-600 text-white font-bold   py-3 px-4 rounded focus:outline-none focus:shadow-outline flex">{{ formatEthAddress(ethersStore.account) }}</button>
      </div>
      <div class="inline-block p-2 px-4" v-if="ethersStore.account">
         <button @click="disconnectFromEth" class="bg-red-500 hover:bg-red-600 text-white font-bold   py-3 px-4 rounded focus:outline-none focus:shadow-outline flex">Disconnet Wallet</button>
      </div>

    </div>
  </div>
</nav>
</template>
