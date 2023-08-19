<script setup>
import { ref, onMounted } from 'vue';
import { useCopperProtocolStore } from './store';
import ALogo from './components/ALogo.vue';
import ALoading from './components/base/ALoading.vue';
import AWaveIntro from './components/AWaveIntro.vue';
import AWaveLog from './components/AWaveLog.vue';
import AFooter from './components/AFooter.vue';
import NavTopbar from './components/nav/Topbar.vue';
import HomeView from './pages/Home.vue'
const isLoading = ref(true);
const store = useCopperProtocolStore();
store.initialize();
onMounted(() => isLoading.value = false);
</script>

<template>
  <div class="w-screen h-screen overflow-auto bg-gray-800 text-white flex flex-wrap">
    <NavTopbar class="h-24 w-screen" />
    <RouterView  />
  </div>
</template>