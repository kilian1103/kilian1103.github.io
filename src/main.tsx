import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { createConfig, WagmiProvider, http } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, zora } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const chains = [mainnet, polygon, optimism, arbitrum, base, zora] as const;

const transports = {
  [mainnet.id]: http(),
  [polygon.id]: http(),
  [optimism.id]: http(),
  [arbitrum.id]: http(),
  [base.id]: http(),
  [zora.id]: http(),
};

const { connectors } = getDefaultWallets({
  appName: 'Cyberpunk CV',
  projectId: 'b1a02595ad63d0f07826eae5b784532f',
  chains
});

const wagmiConfig = createConfig({
  chains,
  connectors,
  transports
});

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiConfig}>
        <RainbowKitProvider>
          <App />
        </RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  </StrictMode>
);