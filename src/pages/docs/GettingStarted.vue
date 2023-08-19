<template>
    <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-semibold mb-6">Getting Started</h1>
        
        <!-- Step 1 -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-2">Step 1: Sign Up</h2>
          <p>
            To get started, you'll need to sign up for an account. If you already have an account, you can skip this step.
          </p>
          <router-link to="/signup" class="text-blue-500 hover:underline">Sign Up Here</router-link>
        </div>
        
        <!-- Step 2 -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-2">Step 2: Log In</h2>
          <p>
            Log in to your account using your credentials.
          </p>
          <router-link to="/login" class="text-blue-500 hover:underline">Log In Here</router-link>
        </div>
        
        <!-- Step 3 -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-2">Step 3: Explore</h2>
          <p>
            Once logged in, you can start exploring our platform and all its features.
          </p>
        </div>
        
        <!-- Additional Information -->
        <div>
          <h2 class="text-xl font-semibold mb-2">Additional Information</h2>
          <p>
            For more detailed information and tutorials, please refer to our <router-link to="/docs" class="text-blue-500 hover:underline">Documentation</router-link>.
          </p>
        </div>
      </div>
    </div>
  </template>
  