import { ref } from 'vue';
import { ethers } from 'ethers';

import copperTrustAbi from '@/ethers-artifacts/contracts/CopperDiamond/facets/CopperTrust/CopperTrust.sol/CopperTrust.json'
import copperTokenAbi from '@/ethers-artifacts/contracts/CopperToken/CopperToken.sol/CopperToken.json'
import copperAirdropAbi from '@/ethers-artifacts/contracts/CopperAirdrop/CopperAirdrop.sol/CopperAirdrop.json'


const copperAirdropAddress = import.meta.env.VITE_COPPER_AIRDROP_ADDRESS; // Replace with the actual address of your deployed Copper Airdrop contract
const copperAirdropABI = copperAirdropAbi.abi;
const copperAirdropContract = new ethers.Contract(copperAirdropAddress, copperAirdropABI, window.ethereum);

export function useAirdrop() {
  const address = ref('');
  const loading = ref(false);
  const error = ref('');
  const success = ref('');

  const claimAirdrop = async () => {
    loading.value = true;
    error.value = '';
    success.value = '';

    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();
      copperAirdropContract.connect(signer);

      // Check if the user's address has already claimed the airdrop
      const hasClaimed = await copperAirdropContract.hasClaimed(address.value);
      if (hasClaimed) {
        error.value = 'You have already claimed the airdrop';
        loading.value = false;
        return;
      }

      // Call the smart contract function to claim the airdrop
      await copperAirdropContract.claimAirdrop();

      // Airdrop successful
      success.value = 'Congratulations! You have claimed the airdrop successfully.';
    } catch (err) {
      error.value = 'An error occurred. Please try again later.';
    }

    loading.value = false;
  };

  return {
    address,
    loading,
    error,
    success,
    claimAirdrop,
  };
}
