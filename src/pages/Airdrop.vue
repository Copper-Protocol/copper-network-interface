<script setup>
import { useCopperProtocolStore } from "@/store/index";
import { ref } from "vue";

import BaseContainer from '@/components/base/Container.vue'
const submitAirdrop = async () => {
  try {
    const store = useCopperProtocolStore();

    // Check if user is connected to the right network
    if (!store.isConnected || store.isWrongNetwork) {
      alert("Please connect to the right network.");
      return;
    }

    // Perform the airdrop action using your contract
    const copperAirdropContract = store.copperAirdropContract;
    const airdropResult = await copperAirdropContract.claimAirdrop();

    // Do something with airdropResult, e.g., show a success message
    console.log(await airdropResult.wait());


  } catch (error) {
    console.error("Error submitting airdrop:", error.message);
    alert("Error submitting airdrop:", error.message, Object.keys(error)  )
  }
};
</script>

<template>
  <BaseContainer class="h-screen items-center justify-center">
  <div class="airdrop-form">
    <h2 class="text-xl font-bold">Airdrop Form</h2>
    <form @submit.prevent="submitAirdrop">
      <label for="amount" class="block text-sm font-medium text-gray-700">Amount:</label>
      <button
        type="submit"
        class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-200 focus:outline-none"
      >
        Submit Airdrop
      </button>
    </form>
  </div>
</BaseContainer>
</template>


<style>
/* Your custom styles here or use Tailwind classes directly in the template */
</style>
