'use client';

import { ConnectButton, useCurrentAccount } from '@mysten/dapp-kit';
import { Button } from '@/components/ui/button';
import { Wallet, LogOut } from 'lucide-react';

export function WalletConnection() {
  const account = useCurrentAccount();

  if (account) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">
          {account.address.slice(0, 6)}...{account.address.slice(-4)}
        </span>
        <ConnectButton 
          connectText="Connect Wallet"
          connectedText="Connected"
        />
      </div>
    );
  }

  return (
    <ConnectButton 
      connectText={
        <div className="flex items-center gap-2">
          <Wallet className="h-4 w-4" />
          Connect Wallet
        </div>
      }
    />
  );
}