<script setup>
import { useCopperProtocolStore } from "@/store/copperProtocol";
import { computed, onMounted, ref } from "vue";

import BaseContainer from '@/components/base/Container.vue'
import AConnectWallet from '@/components/AConnectWallet.vue'
import { storeToRefs } from "pinia";

// let user = ref('')
// let hasClaimed = ref('')
const copperProtocolStore = useCopperProtocolStore()

const {submitAirdrop} = copperProtocolStore
const {account, copperTokenBalance, hasClaimed, copperBalance} = storeToRefs(copperProtocolStore)
// const hasClaimed = computed(() => copperProtocolStore.hasClaimed)
onMounted(async () => {

  // try {
  //   user.value = account
  //   hasClaimed.value = await copperAirdropContract.hasClaimed(user)
  // } catch (e) {
  //   user.value = false
  //   hasClaimed.value = false
  // }
  console.log({account, hasClaimed})
})
</script>

<template>
  <BaseContainer class="h-screen items-center justify-center">

    <div class="airdrop-form" v-if="account">
    <div class="" v-if="!hasClaimed">
      <h2 class="text-5xl font-bold border-b pb-2 mb-4">Copper Airdrop</h2>
      <form @submit.prevent="submitAirdrop">
        <label for="amount" class="block text-xl font-medium text-gray-300">Claim 500 Copper Tokens</label>
        <button
        type="submit"
        class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-200 focus:outline-none"
        >
        Claim Airdrop
      </button>
    </form>
    </div>
    <div class="" v-else>
      <h1 class="text-5xl font-bold border-b pb-2 mb-4">Copper Airdrop</h1>
      <p>User ( {{ account }} ) has already claimed.</p>
      <p>BALANCE: {{ copperBalance }}</p>
    </div>
  </div>
  <div class="inline-block" v-if="!account">
        <AConnectWallet v-if="!account" />
      </div>

</BaseContainer>
</template>


<style>
/* Your custom styles here or use Tailwind classes directly in the template */
</style>
