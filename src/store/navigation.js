import { defineStore, acceptHMRUpdate } from 'pinia';
import {computed, ref} from 'vue'
import NetworkSwitcher from '@/components/network/Switcher.vue'
import menuLogo from '@/assets/images/Copper-Logo_light-p-500.png'

import {
  HomeIcon,
  DesktopComputerIcon,
  BookOpenIcon,
  CloudDownloadIcon,
  CurrencyDollarIcon,
  InformationCircleIcon
} from "@vue-hero-icons/outline"


export const useNavigationStore = defineStore('navigation', () => {
  const topbar = ref({
    title: `Copper Network`,
    logoImg: menuLogo,
    menuItems: [
      {
          name: 'Home',
          icon: HomeIcon,
          to: '/'
        },
        {
          name: 'Ecosystem',
          icon: DesktopComputerIcon,
          to: '/construction'
        },
        {
          name: 'Docs',
          icon: BookOpenIcon,
          to: '/docs'
        },
        {
          name: 'Token',
          icon: CurrencyDollarIcon,
          to: '/token'
        },
        {
          name: 'Airdrop',
          icon: CloudDownloadIcon,
          to: '/airdrop'
        },
        {
          name: 'Admin',
          icon: InformationCircleIcon,
          to: '/admin/dashboard',
          meta: {
              requiresAdmin: true
          }
        },
      ]

  })

  const getTopbar = computed(() => topbar.value)

  return {
    topbar,
    getTopbar
  }
})
// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useNavigationStore, import.meta.hot))
  }