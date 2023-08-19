<template>
    <div class="min-h-screen flex flex-col justify-center items-center">
      <header class="text-3xl font-semibold mb-8">Join The Movement</header>
      <main class="bg-white text-black p-6 rounded-lg shadow-md">
        <p class="mb-4">
          Be part of something great! Subscribe to our newsletter and stay updated with the latest news and updates.
        </p>
        <form @submit.prevent="subscribe" class="flex space-x-2">
          <input
            v-model="email"
            type="email"
            placeholder="Your email address"
            class="px-4 py-2 flex-grow rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <button type="submit" class="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
            Subscribe
          </button>
        </form>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
//   import { useStore } from 'pinia';
  import { useRouter } from 'vue-router';
  
//   const store = useStore();
  const router = useRouter();
  const email = ref('');
  
  const subscribe = async () => {
    // You can perform email validation here if needed
  
    // Send the email to your server for processing
    // You can use JavaScript's fetch API or another method
    // For simplicity, we'll just simulate a successful subscription here
  
    // Clear the input field
    email.value = '';
  
    // Show a confirmation message to the user
    alert('Thank you for subscribing!');
  
    // Redirect the user to a "Thank You" page or any other page you prefer
    router.push('/thank-you');
  };
  </script>
  