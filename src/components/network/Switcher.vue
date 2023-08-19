<template>
  <div class="relative">
    <button
      @click.prevent="toggleDropdown"
      :class="`bg-blue-500 hover:bg-blue-600 text-white font-bold   py-3 px-4 rounded focus:outline-none focus:shadow-outline flex`"
    >
    NETWORK: {{ selectedNetwork.name }}
      <svg
        v-if="showDropdown"
        class="w-5 h-5 ml-2 -mr-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </button>
    <div
      v-if="showDropdown"
      class="absolute mt-2 w-full bg-white text-black rounded-md shadow-lg z-100"
    >
      <ul>
        <li
          v-for="network in store.networks"
          :key="network.chainId"
          @click.prevent="handleSwitchNetwork(network)"
          class="cursor-pointer px-4 py-2 hover:bg-gray-100"
        >
          {{ network.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {useCopperProtocolStore} from '@/store/index.js';
import {reactive, computed, ref, onServerPrefetch, onMounted} from 'vue'
const store = useCopperProtocolStore();

const networkOptions = Object.keys(store.networks).map(key => ({...store.networks[key], chainId: key}))
console.log({networkOptions})
const account = ref(null)

// let _showDropdown = 0
let showDropdown = ref(false);
let startingNetwork = ref(11155111)

let selectedNetwork = ref(``); // Set the default selected network
console.log({selectedNetwork: selectedNetwork.value})
function toggleDropdown() {
  console.log(`TOGGLE DROP DOWN`, {showDropdown, selectedNetwork: selectedNetwork.value})
  showDropdown.value = !showDropdown.value;
}

function handleSwitchNetwork(network) {
  console.log({network: parseInt(network.hex, 16), _: network})
  selectedNetwork.value = store.networks[network.chainId] || 'Unkown';
  showDropdown.value = false;
  store.switchNetwork(network.chainId);
}


onServerPrefetch(async () => {
  console.log(`prefetching`)
  // component is rendered as part of the initial request
  // pre-fetch data on server as it is faster than on the client
  startingNetwork.value = await store.getCurrentNetwork()
  log({startingNetwork: startingNetwork.value})
  selectedNetwork.value = store.networks[startingNetwork.value] || 'Unkown'
})

onMounted(async () => {
  console.log(`onMounted`, `'${startingNetwork.value}'`)
  // if (!startingNetwork.value && startingNetwork.value === ``) {
    // if startingNetwork is null on mount, it means the component
    // is dynamically rendered on the client. Perform a
    // client-side fetch instead.
    startingNetwork.value = await store.getCurrentNetwork()
    console.log({_startingNetwork: startingNetwork.value})
    selectedNetwork.value = store.networks[startingNetwork.value]  || 'Unkown'
    console.log({__startingNetwork: startingNetwork.value})

  // } else {

  // }
})
</script>

<style>
/* Add any custom styling for the dropdown here */
/* Set a higher z-index for the dropdown */
</style>
