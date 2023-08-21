<template>
    <layout class="w-full">
      <template #sidebar>
        <!-- Sidebar content here -->
        <DocsSidebar />
      </template>
      <template #content>
        <div class="p-4 rounded-lg shadow bg-gray-900">
          <h2 class="text-2xl font-semibold mb-4">Documentation</h2>
          <!-- Dashboard content here -->
          <PageContent class="bg-gray-900"/>
        </div>
      </template>
    </layout>
  </template>
  
  <script setup>
  import Layout from '@/components/layout/TwoCol.vue';
  import DocsSidebar from "@/components/docs/Sidebar.vue"
  import PageContent from "@/components/docs/PageContent.vue"
  
  </script>
  