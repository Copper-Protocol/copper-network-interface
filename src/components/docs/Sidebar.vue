<template>
    <nav class="bg-gray-800 text-white  p-6">
      <ul class="space-y-1 flex flex-wrap">
        <li v-for="link in links" :key="link.to" class="p-1 w-full">
          <a :href="`#/${link.to}`" class="w-full rounded-lg hover:bg-gray-700">
            {{ link.text }}
          </a>
        </li>
      </ul>
    </nav>
</template>

<script setup>
const links = [
  { text: 'Doc Home', to: '/docs/home' },
  { text: 'Getting Started', to: '/docs/getting-started' },
  { text: 'DAOPlus', to: '/docs/daoplus' },
  // { text: 'Trustees', to: '/admin/trustees' },
  // { text: 'Documents', to: '/admin/documents' },
  // { text: 'Beneficiaries', to: '/admin/beneficiaries' }
  // Add more links as needed
];
</script>
