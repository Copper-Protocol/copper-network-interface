<template>
  <BaseContainer class="bg-gray-600 ">
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">{{ title }}</h1>
    <p class="text-gray-600 mb-8">{{ description }}</p>

    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 grid-gap-2">
      <div>
        <img :src="imgFeature001" alt="DAOPlus Product Image" class="w-full h-auto rounded-lg shadow-lg">
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Features:</h2>
        <ul class="list-disc list-inside">
          <li v-for="feature in features" :key="feature.title" class="mb-2">
            <span class="font-semibold">{{ feature.title }}:</span> {{ feature.description }}
          </li>
        </ul>

        <button @click="onGetStarted" class="mt-8 bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition-colors">
          Get Started
        </button>
      </div>
    </div>

    <div class="mt-12">
      <h2 class="text-3xl font-semibold mb-4">Unlocking New Opportunities with Tokenomics</h2>
      <p class="text-gray-600 mb-8">
        DAOPlus incorporates advanced tokenomics to create value and engage its community effectively. The native token (DPT) serves multiple purposes within the ecosystem, including governance, access to premium features, and staking rewards.
      </p>

      <ul class="list-disc list-inside">
        <li class="mb-2">
          <span class="font-semibold">Governance Rights:</span> Holders of DPT have the power to participate in important platform decisions and shape the future of DAOPlus.
        </li>
        <li class="mb-2">
          <span class="font-semibold">Access to Premium Features:</span> DPT holders gain exclusive access to advanced features and services, unlocking even more possibilities for their projects.
        </li>
        <li class="mb-2">
          <span class="font-semibold">Community Incentives:</span> Active community members can earn DPT rewards for their contributions, fostering a vibrant and engaged ecosystem.
        </li>
      </ul>
    </div>

    <div class="mt-12">
      <h2 class="text-3xl font-semibold mb-4">Embracing the Future of Business Governance</h2>
      <p class="text-gray-600 mb-8">
        DAOPlus empowers businesses of all sizes to embrace decentralization, reinvent their operations, and build strong, loyal communities. Whether you are a startup or an established enterprise, DAOPlus provides the tools and support needed to thrive in the new era of business governance.
      </p>
      <button @click="onJoinTheMovement" class="mt-4 bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition-colors">
        Join the Movement
      </button>
    </div>
  </div>
</BaseContainer>
</template>

<script setup>
import { ref } from 'vue';
import BaseContainer from "@/components/base/Container.vue"

import imgFeature001 from "@/assets/images/feature-001.png"
import { useRouter } from 'vue-router';
  
const router = useRouter();
const title = ref("DAOPlus - Empowering Decentralized Governance")
const description = ref(
  "DAOPlus is a revolutionary platform for decentralized governance, providing true autonomy and sovereignty to businesses and projects. Explore its features and unleash the potential of decentralization."
);
const image = ref("@/assets/images/feature-001.png")
const features = ref([
  {
    title: "Decentralized Governance",
    description: "Enable transparent decision-making and collective participation through decentralized voting and governance frameworks.",
  },
  {
    title: "Autonomy and Sovereignty",
    description: "Operate independently and without unnecessary regulatory constraints, unlocking boundless innovation.",
  },
  {
    title: "Community Empowerment",
    description: "Empower the community by allowing stakeholders to actively shape the project's direction and outcomes.",
  },
  {
    title: "Multi-Blockchain Integration",
    description: "Create a versatile ecosystem by integrating multiple blockchains for enhanced scalability and interoperability.",
  },
  {
    title: "Arbitrum Orbit L3 Chain",
    description: "Experience enhanced scalability and lower transaction costs with the upcoming Arbitrum Orbit L3 chain.",
  },
  // Add more features here
]);

const onGetStarted = () => {
  // Implement logic to handle the "Get Started" button click
  // For example, redirect to a registration page or show a modal for sign-up
  alert(`onGetStarted`)
};

const onJoinTheMovement = () => {
  // Implement logic to handle the "Join the Movement" button click
  // For example, redirect to a community forum or registration page for new users
  router.push(`/join`)
};
</script>

<style>
/* Add custom styles here */
</style>
