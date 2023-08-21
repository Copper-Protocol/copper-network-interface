export function formatEthAddress(address) {
    if (address.length !== 42) {
      throw new Error('Invalid Ethereum address length');
    }
  
    const prefix = address.slice(0, 2); // Get the "0x" prefix
    const firstFour = address.slice(2, 6); // Get the first four characters
    const lastFour = address.slice(-4); // Get the last four characters
  
    return `${prefix}${firstFour}...${lastFour}`
  }
  