<template>
  <!-- <aside class="bg-gray-800 text-white p-6">
    <nav>
      <ul class="w-1/2 space-y-1 flex flex-wrap">
        <li v-for="link in links" :key="link.to" class="p-1 w-full hover:bg-gray-700">
          <router-link :to="link.to" class="w-full rounded-lg">
            {{ link.text }}
          </router-link>
        </li>
      </ul>
    </nav>
  </aside> -->
  <TwoColSiderbar :items="links" title="Admin Dashboard" />
</template>

<script setup>
import TwoColSiderbar from "@/components/layout/TwoColSidebar.vue"
const links = [
  { name: 'Admin Home', to: '/admin/dashboard' },
  { name: 'Meetings', to: '/admin/meetings' },
  { name: 'Trustees', to: '/admin/trustees' },
  { name: 'Documents', to: '/admin/documents' },
  { name: 'Beneficiaries', to: '/admin/beneficiaries' }
  // Add more links as needed
];
</script>
