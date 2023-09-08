<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 shadow-md rounded-md w-96">
      <h2 class="text-2xl font-semibold mb-4">Upload File to IPFS</h2>
      <input
        type="file"
        @change="handleFileChange"
        class="mb-4"
      />
      <button
        @click="uploadFile"
        :disabled="uploading || !fileToUpload"
        class="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        {{ uploading ? 'Uploading...' : 'Upload' }}
      </button>
      <p class="mt-4" v-if="ipfsCid">
        IPFS CID: {{ ipfsCid }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCommitText } from '@/HeliaApi/useCommitText.js'

const { commitText, cid, fetchCommitedText } = useCommitText()
const uploading = ref(false)
const ipfsCid = ref('')
const fileToUpload = ref(null)

const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    fileToUpload.value = file
  }
}

const uploadFile = async () => {
  if (!fileToUpload.value) return

  uploading.value = true
  await commitText(fileToUpload.value)
  await fetchCommitedText()
  ipfsCid.value = cid.value
  uploading.value = false
}
</script>
