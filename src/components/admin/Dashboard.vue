<template>
  <layout class="w-full">
    <template #sidebar>
      <!-- Sidebar content here -->
      <AdminSidebar />
    </template>
    <template #content>

    </template>
  </layout>
</template>

<script setup>
import Layout from '@/components/layout/TwoCol.vue';
import AdminSidebar from "@/components/admin/Sidebar.vue"

</script>
