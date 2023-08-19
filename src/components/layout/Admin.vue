<template>
  <div class="flex h-screen bg-gray-100">
    <aside class="bg-gray-800 text-white w-1/4 p-6">
      <slot name="sidebar"></slot>
    </aside>
    <main class="flex-1 p-6">
      <slot name="content"></slot>
    </main>
  </div>
</template>

<style>
/* Add Tailwind classes or custom styles here */
</style>
