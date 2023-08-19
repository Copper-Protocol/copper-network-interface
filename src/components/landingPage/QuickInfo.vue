<script setup>
import BaseContainer from "@/components/base/Container.vue"
import placeHolder1 from "@/assets/images/placeholder1.jpg"
import placeHolder3 from "@/assets/images/placeholder3.jpg"
import vidPlaceHolder1 from "@/assets/images/vid-placeholder.jpg"
// images/placeholder3.jpg
</script>

<template>
  <BaseContainer class="bg-blue-800 text-grey-300">
  <div class="w-full">
    <div class="">
      <div class="p-4">
        <h2 class="text-3xl font-bold">About Copper Network</h2>
        <div class="">
          <div class=""><img :src="placeHolder1" width="503" alt="" class="screenshot"></div>
          <div class="">
            <p class="">In an increasingly digital world, traditional centralized systems consistently pose significant obstacles to progress with outdated frameworks and intermediaries who stifle innovation, limit transparency, and impede the growth of marginalized communities seeking to shape their own destiny.  Businesses struggle to build resilient and efficient ecosystems, supply chains face inefficiencies and lack traceability, and payment networks remain burdened by lengthy processes and high fees. In addition, the alarming reality of a widening racial wealth gap presents a pressing concern that demands immediate attention. Despite efforts to address systemic inequities, a clear path to effectively tackle this issue remains elusive. Black Americans, whose buying power contributes a staggering $2 trillion to the GDP, have not been met with the reciprocity and economic opportunities they deserve. The absence of a comprehensive solution perpetuates this inequality, hindering the advancement and prosperity of marginalized communities. It&#x27;s clear that a transformative solution is needed to break free from these constraints and unlock the true potential of collaboration and sovereignty.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full p-4">
      <div class="">
        <h2 class="">Why Copper Network?</h2>
        <p class="">Imagine a world where value, payments, and money is moving as fast as information.  Through the power of blockchain, we provide the tools and infrastructure to onboard enterprises to web3, enable seamless collaboration, enhanced transparency, and reduced friction across industries. By aligning incentives, leveraging decentralized networks, and using smart contract capabilities, we usher in a new era of trust and efficiency where participants can benefit from community networks and governance. Together, we build a future where businesses thrive, supply chains operate seamlessly, and payment networks empower individuals to transact with ease.</p>
      </div>
      <div class=""><img :src="vidPlaceHolder1" width="502" alt="" class="screenshot">
        <p class="">Double click an image to replace it.</p>
      </div>
    </div>
    <div class="p-4">
      <div class=""><img :src="placeHolder3" width="240" alt="" class="screenshot">
        <p class="">You can also double click an image to change its size.</p>
      </div>
      <div class="">
        <h2 class="">Parents, and text alignment</h2>
        <p class="">By now you may have noticed that web design, simply put, is a series of boxes inside of boxes with text and images inside of them. Try selecting the parent element of this text <span class="class">Right 2</span> then changing the text alignment.</p>
      </div>
    </div>
  </div>
</BaseContainer>

</template>