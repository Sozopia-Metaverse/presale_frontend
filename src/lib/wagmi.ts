import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base, zora } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Sozopia',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // Get this from https://cloud.walletconnect.com
  chains: [mainnet, polygon, optimism, arbitrum, base, zora],
  ssr: true,
}); 