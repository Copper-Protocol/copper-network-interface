<template>
  <layout class="w-full">
    <template #sidebar>
      <!-- Sidebar content here -->
      <AdminSidebar />
    </template>
    <template #content>
      <div class="p-4 bg-white rounded-lg shadow">
        <h2 class="text-2xl font-semibold mb-4">Dashboard</h2>
        <!-- Dashboard content here -->
      </div>
    </template>
  </layout>
</template>

<script setup>
import Layout from '@/components/layout/Admin.vue';
import AdminSidebar from "@/components/admin/Sidebar.vue"

</script>
