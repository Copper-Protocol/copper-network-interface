import { defineStore, acceptHMRUpdate } from 'pinia';
import { ethers, providers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js';
import detectEthereumProvider from '@metamask/detect-provider';

import copperTrustAbi from '@/ethers-artifacts/contracts/CopperDiamond/facets/CopperTrust/CopperTrust.sol/CopperTrust.json';
import copperTokenAbi from '@/ethers-artifacts/contracts/CopperToken/CopperToken.sol/CopperToken.json';
import copperAirdropAbi from '@/ethers-artifacts/contracts/CopperAirdrop/CopperAirdrop.sol/CopperAirdrop.json';

export const useCopperProtocolStore = defineStore('copperProtocol', {
  state: () => {
    return {
      account: null,
      authorizedNetworks: [
        // 1, // ETH Mainnet
        5, // Goerli
        11155111, // Sepolia
        // 100, // Gnosischain
        // 137, // polygon
        // 42161, // Arbitrum One
        // 42170, // Arbitrum Nova
        // 421613, // Arbitrum Goerli
        // 10, // Optimism
        // 420, // Optimism Goerli
      ],
      networks: {
        // 1: {
        //   hex: '0x1',
        //   name: 'ETH Mainnet',
        // },
        5: {
          hex: '0x5',
          name: 'Goerli',
          chainId: 5
        },
        11155111: {
          hex: '0x' + (11155111).toString(16),
          name: 'Sepolia',
          chainId: 11155111
        },
        // 100: {
        //   hex: '0x64',
        //   name: 'Gnosischain',
        // },
        // 137: {
        //   hex: '0x89',
        //   name: 'Polygon',
        // },
        // 42161: {
        //   hex: '0xA421',
        //   name: 'Arbitrum One',
        // },
        // 42170: {
        //   hex: '0xA422',
        //   name: 'Arbitrum Nova',
        // },
        // 421613: {
        //   hex: '0xA423',
        //   name: 'Arbitrum Goerli',
        // },
        // 10: {
        //   hex: '0xA',
        //   name: 'Optimism',
        // },
        // 420: {
        //   hex: '0x1A4',
        //   name: 'Optimism Goerli',
        // },
      },
      contracts: {
        copperDiamond: {
          address: import.meta.env.VITE_COPPER_DIAMOND_ADDRESS,
          gasLimit: 300000,
        },
        copperToken: {
          address: import.meta.env.VITE_COPPER_TOKEN_ADDRESS,
          gasLimit: 300000,
        },
        copperAirdrop: {
          address: import.meta.env.VITE_COPPER_AIRDROP_ADDRESS,
          gasLimit: 300000,
        },
      },
      network: {
        chainId: null,
        name: null
      },
      loading: false,
    };
  },
  getters: {
    ethereum() {
      return window.ethereum;
    },
    provider(state) {
      return new providers.Web3Provider(state.ethereum);
    },
    // account(state) {
    //   return state.account
    // },
    copperTrustContract(state) {
      const signer = state.provider.getSigner(
        state.account ? state.account : state.contracts.copperDiamond.address
      );
      return new ethers.Contract(
        state.contracts.copperDiamond.address,
        copperTrustAbi.abi,
        signer
      );
    },
    copperTokenContract(state) {
      const signer = state.provider.getSigner(
        state.account ? state.account : state.contracts.copperToken.address
      );
      return new ethers.Contract(
        state.contracts.copperToken.address,
        copperTokenAbi.abi,
        signer
      );
    },
    copperAirdropContract(state) {
      const signer = state.provider.getSigner(
        state.account ? state.account : state.contracts.copperAirdrop.address
      );
      return new ethers.Contract(
        state.contracts.copperAirdrop.address,
        copperAirdropAbi.abi,
        signer
      );
    },
    isConnected: (state) => !!state.account,
    currectNetwork: state => state.network,
    isWrongNetwork: (state) =>
      state.network.chainId
        ? !state.authorizedNetworks.includes(state.network.chainId)
        : true,
  },
  actions: {
    async initialize() {
      try {
        // Check if there's a connected Ethereum provider
        const provider = await detectEthereumProvider();
    
        // Check if there's a connected account and chainId
        if (provider) {
          // Get the current account and chainId from the connected provider
          const accounts = await this.ethereum.request({ method: 'eth_accounts' });
          const currentAccount = accounts[0];
          const currentChainId = await this.getCurrentNetwork();
    
          // Check if there's a stored account and chainId in local storage
          const storedAccount = localStorage.getItem('copperProtocolAccount');
          const storedChainId = localStorage.getItem('copperProtocolChainId');
    
          // Compare the stored account with the current account
          if (storedAccount && storedAccount.toLowerCase() !== currentAccount.toLowerCase()) {
            // Update the stored account with the current account
            localStorage.setItem('copperProtocolAccount', currentAccount);
            this.account = currentAccount;
          } else if (!storedAccount) {
            // If there's no stored account, store the current account
            localStorage.setItem('copperProtocolAccount', currentAccount);
            this.account = currentAccount;
          }
    
          // Check if the stored chainId matches the current chainId
          if (storedChainId && parseInt(storedChainId, 10) !== currentChainId) {
            // Automatically switch to the stored network
            await this.switchNetwork(parseInt(storedChainId, 10));
          }
    
          // Set the network chainId
          this.network.chainId = currentChainId;
    
          // Add an event listener to handle network changes
          const self = this;
          this.ethereum.on('chainChanged', () => {
            self.reload();
          });
        }
      } catch (error) {
        console.error('Error initializing:', error.message);
      }
    },
    async  connectWallet(wallet) {
      try {
        if (wallet === 'metamask') {
          await this.useMetamask();
        } else {
          await this.useWalletConnect();
        }
        // await this.fetchWaves();
      } catch (error) {
        console.error('Error connecting wallet:', error.message);
      }
    },

    async useMetamask() {
      try {
        const provider = await detectEthereumProvider();
        if (provider && provider === this.ethereum) {
          const accounts = await this.ethereum.request({
            method: 'eth_requestAccounts',
          });
          const chainId = await this.ethereum.request({
            method: 'eth_chainId',
          });
          const signer = this.provider.getSigner(accounts[0]);
          const signature = await signer.signMessage(accounts[0]);
          this.account = accounts[0];
          localStorage.setItem('copperProtocolAccount', this.account)
          this.network.chainId = parseInt(chainId, 16); // Convert chainId to a number
          if (this.isWrongNetwork) await this.switchNetwork();
        } else {
          console.log('Metamask is not installed');
        }
      } catch (error) {
        console.error('Error using Metamask:', error.message);
      }
    },

    async useWalletConnect() {
      try {
        const provider = new WalletConnectProvider({
          infuraId: import.meta.env.VITE_INFURA_KEY,
        });
        await provider.enable();
        const web3 = new providers.Web3Provider(provider);
        const accounts = await web3.eth.getAccounts();
        const chainId = await web3.eth.getChainId();
        this.account = accounts[0];
        localStorage.setItem('copperProtocolAccount', this.account)

        this.network.chainId = chainId;
        if (this.isWrongNetwork) await this.switchNetwork();
      } catch (error) {
        console.error('Error using WalletConnect:', error.message);
      }
    },

    async switchNetwork(chainId) {
      try {
        const provider = await detectEthereumProvider()
        const isSameNetwork = provider.chainId === `0x${(chainId).toString(16)}`
        // console.log({provider, isSameNetwork, chainId: (chainId).toString(16)})
        if (isSameNetwork) return
        if (typeof chainId === 'undefined') {
          // Provide a default authorized network chainId or handle this case accordingly
          chainId = 1; // Ethereum Mainnet
        }

        if (!this.authorizedNetworks.includes(chainId)) {
          alert('Unauthorized network. Please switch to an authorized network.');
          return;
        }

        await this.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x' + chainId.toString(16) }],
        });
        this.setNetwork(this.networks[chainId])
        this.reload();

      } catch (error) {
        console.error('Error switching network:', error.message);
      }
    },
    async getCurrentNetwork () {
      const provider = await detectEthereumProvider()
      console.log(`FOUND NETWORK: `, this.network.chainId, this.networks, provider.chainId)
      return parseInt(provider.chainId, 16)
    },
    async setNetwork (network) {
      // Store the connected chain ID in local storage
      return await localStorage.setItem('copperProtocolChainId', network.chainId);

    },
    async disconnectFromEth() {
      console.log(`DISCONNECT...`)
      try {
        // Check if there's a connected Ethereum provider
        const provider = await detectEthereumProvider();
    
        if (provider) {
          // Disconnect the provider
          await provider.disconnect();
    
          // Reset the account and network chainId
          this.account = null;
          this.network.chainId = null;
    
          // Clear the stored account and chainId from local storage
          localStorage.removeItem('copperProtocolAccount');
          localStorage.removeItem('copperProtocolChainId');
        }
      } catch (error) {
        console.error('Error disconnecting from Ethereum:', error.message);
      }
    },
    
    reload() {
      window.location.reload();
      
    },

    // ... other actions ...
  },
});
// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCopperProtocolStore, import.meta.hot))
}
