import React, { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';
import { Heart, Zap } from 'lucide-react';

export const DonationButton: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState('0.01');
  const [showDonationModal, setShowDonationModal] = useState(false);
  const { isConnected } = useAccount();

  const donationAddress = '0x962d4FB0d7dc03446dbAbEDb7650d37303fE223e' as `0x${string}`;

  const { data, sendTransaction } = useSendTransaction();

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    hash: data,
  });

  const handleDonate = () => {
    if (sendTransaction) {
      sendTransaction({
        to: donationAddress,
        value: parseEther(donationAmount),
      });
      setShowDonationModal(false);
    }
  };

  const presetAmounts = ['0.01', '0.05', '0.1', '0.5'];

  return (
    <div className="relative">
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          const ready = mounted && authenticationStatus !== 'loading';
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus ||
              authenticationStatus === 'authenticated');

          return (
            <div
              {...(!ready && {
                'aria-hidden': true,
                'style': {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button
                      onClick={openConnectModal}
                      type="button"
                      className="bg-cyber-pink text-cyber-black px-6 py-3 font-bold hover:bg-cyber-blue transition-all duration-300 flex items-center gap-2 border-2 border-cyber-green"
                    >
                      <Heart className="w-5 h-5" />
                      DONATE CRYPTO
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button
                      onClick={openChainModal}
                      type="button"
                      className="bg-red-500 text-white px-6 py-3 font-bold hover:bg-red-600 transition-all duration-300"
                    >
                      Wrong network
                    </button>
                  );
                }

                return (
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowDonationModal(true)}
                      className="bg-cyber-pink text-cyber-black px-6 py-3 font-bold hover:bg-cyber-blue transition-all duration-300 flex items-center gap-2 border-2 border-cyber-green"
                    >
                      <Heart className="w-5 h-5" />
                      DONATE
                    </button>
                    <button
                      onClick={openAccountModal}
                      type="button"
                      className="bg-cyber-green text-cyber-black px-4 py-3 font-bold hover:bg-cyber-blue transition-all duration-300 border-2 border-cyber-pink"
                    >
                      {account.displayName}
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>

      {/* Donation Modal */}
      {showDonationModal && isConnected && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-cyber-black border-4 border-cyber-green p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <Zap className="w-12 h-12 text-cyber-pink mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-cyber-green mb-2">
                CRYPTO DONATION
              </h3>
              <p className="text-cyber-blue">
                Support my cyberpunk journey with ETH
              </p>
            </div>

            <div className="mb-6">
              <label className="block text-cyber-green font-bold mb-2">
                AMOUNT (ETH)
              </label>
              <input
                type="number"
                step="0.001"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                className="w-full bg-cyber-black border-2 border-cyber-blue text-cyber-green p-3 font-mono focus:border-cyber-pink outline-none"
                placeholder="0.01"
              />
            </div>

            <div className="grid grid-cols-4 gap-2 mb-6">
              {presetAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setDonationAmount(amount)}
                  className="bg-cyber-blue text-cyber-black py-2 px-3 font-bold hover:bg-cyber-pink transition-all duration-300 text-sm"
                >
                  {amount}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleDonate}
                disabled={isLoading}
                className="flex-1 bg-cyber-pink text-cyber-black py-3 px-6 font-bold hover:bg-cyber-green transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'SENDING...' : 'SEND DONATION'}
              </button>
              <button
                onClick={() => setShowDonationModal(false)}
                className="bg-cyber-black border-2 border-cyber-green text-cyber-green py-3 px-6 font-bold hover:bg-cyber-green hover:text-cyber-black transition-all duration-300"
              >
                CANCEL
              </button>
            </div>

            {isSuccess && (
              <div className="mt-4 p-3 bg-cyber-green text-cyber-black text-center font-bold">
                DONATION SENT! THANK YOU, CYBER WARRIOR!
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};