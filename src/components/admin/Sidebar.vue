<template>
  <aside class="bg-gray-800 text-white w-1/4 p-6">
    <nav>
      <ul class="w-1/2 space-y-1 flex flex-wrap">
        <li v-for="link in links" :key="link.to" class="p-1 w-full">
          <router-link :to="link.to" class="w-full rounded-lg hover:bg-gray-700">
            {{ link.text }}
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
const links = [
  { text: 'Admin Home', to: '/admin/dashboard' },
  { text: 'Meetings', to: '/admin/meetings' },
  { text: 'Trustees', to: '/admin/trustees' },
  { text: 'Documents', to: '/admin/documents' },
  { text: 'Beneficiaries', to: '/admin/beneficiaries' }
  // Add more links as needed
];
</script>
