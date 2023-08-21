<script setup>
defineProps(['title', 'items'])
</script>
<template>
    <nav class="bg-gray-800 text-white p-6">
      <div class="text-white text-2xl font-bold border-b border-white mb-4">{{ title }}</div>
      <ul class="w-1/2 space-y-1 flex flex-wrap">
        <li v-for="item in items" :key="item.to" class="p-1 w-full  hover:bg-gray-700">
          <router-link :to="item.to" class="w-full rounded-lg">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>
</template>
