<script setup>
import { ref, onMounted } from 'vue';
import { useCopperProtocolStore } from './store/copperProtocol.js';
import ALogo from './components/ALogo.vue';
import ALoading from './components/base/ALoading.vue';
import NavTopbar from './components/nav/Topbar.vue';
import NavBottombar from './components/nav/Bottombar.vue';
import HomeView from './pages/Home.vue'
const isLoading = ref(true);
const store = useCopperProtocolStore();

onMounted(async () => {
  store.initialize();
  isLoading.value = false
});

</script>

<template>
  <div class="w-screen h-screen overflow-auto bg-gray-800 text-white flex flex-wrap pt-24">
    <NavTopbar class="h-24 w-screen fixed top-0 right-0 left-0" />
    <RouterView  />
    <NavBottombar />
  </div>
</template>
