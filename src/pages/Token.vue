<script setup>
import BaseContainer from "@/components/base/Container.vue"
import imgCopperToken from "@/assets/images/CopperToken.png"

const keyFeatures = [
  "Secure and Immutable Transactions: Copper Token transactions are recorded on the Ethereum blockchain, ensuring security and transparency.",
  "Fast and Low-Cost Transactions: With Ethereum's blockchain technology, Copper Token transactions are processed swiftly and with minimal fees.",
  "Decentralized Governance: Copper Token operates under a decentralized governance model, empowering token holders in decision-making.",
  "Community Incentives: Copper Token rewards active participants through staking and other incentive mechanisms.",
  "Interoperability: As an ERC-20 token, Copper Token can interact with other Ethereum-based applications.",
  "Privacy and Security: Copper Token prioritizes user privacy and employs cryptographic techniques for secure transactions.",
];

const useCases = [
  "E-commerce and Payments: Copper Token offers an efficient and secure payment option for online retailers and customers.",
  "Decentralized Finance (DeFi): Users can leverage Copper Token within various DeFi protocols for lending, borrowing, and more.",
  "Supply Chain Management: Copper Token streamlines supply chain transactions with smart contracts.",
  "Tokenized Assets: Copper Token enables the tokenization of real-world assets for fractional ownership and liquidity.",
  "Microtransactions and Remittances: Copper Token's low fees make it ideal for microtransactions and cross-border remittances.",
];

const securityMeasures = [
  "Smart Contract Audits: Regular audits ensure the smart contract code is secure.",
  "Multi-Signature Wallets: Critical funds are stored in multi-signature wallets for added security.",
  "Token Locking: Team and advisor tokens are subject to vesting schedules.",
  "Bug Bounty Programs: A bug bounty program encourages security researchers to identify vulnerabilities.",
];

</script>
<template>
  <BaseContainer class="bg-gray-900">
    <div class="flex w-full flex-grow p-2 flex-wrap">
      <div class="w-2/3 p-2 mb-8">
        <h1 class="text-5xl font-bold w-full p-2">Copper Token</h1>
        <h3 class="text-2xl font-bold w-full p-2">Empowering Decentralized Transactions</h3>
        <p class="p-2">
          Copper Token is a revolutionary digital asset that operates on the Ethereum blockchain, offering seamless and secure decentralized transactions. By harnessing the power of blockchain technology, Copper Token empowers individuals and businesses with true financial autonomy and sovereignty.

        </p>
        <p class="p-2">
          With its efficient and cost-effective transaction capabilities, Copper Token represents a new era of digital finance, providing a gateway to the world of decentralized finance (DeFi) and various other applications. Embrace the future of finance with Copper Token and unlock a world of possibilities.

        </p>
        <!--
          features and other supporting information go here
        --> 
         <!-- Key Features Section -->

      </div>
      <div class="w-1/3 p-2 mx-auto mb-8">
        <img :src="imgCopperToken" alt="Copper Token" />
      </div>
      <div class="flex w-full flex-wrap justify-around">
      <div class="w-2/3 border-1 border-gray-100 mb-8">
        <h2 class="text-2xl font-semibold text-white mb-4">Key Features:</h2>
        <ul class="list-disc list-inside text-white">
          <li v-for="feature in keyFeatures" :key="feature" class="mb-4">
            {{ feature }}
          </li>
        </ul>
      </div>

      <!-- Use Cases Section -->
      <div class="w-2/3 border-1 border-gray-100 mb-8">
        <h2 class="text-2xl font-semibold text-white mb-4">Use Cases:</h2>
        <ul class="list-disc list-inside text-white">
          <li v-for="useCase in useCases" :key="useCase" class="mb-4">
            {{ useCase }}
          </li>
        </ul>
      </div>

     <!-- Security Measures Section -->
      <div class="w-2/3 border-1 border-gray-100 mb-8">
        <h2 class="text-2xl font-semibold text-white mb-4">Security Measures:</h2>
        <ul class="list-disc list-inside text-white">
          <li v-for="measure in securityMeasures" :key="measure" class="mb-4">
            {{ measure }}
          </li>
        </ul>
      </div>
    </div>
    </div>
  </BaseContainer>
</template>