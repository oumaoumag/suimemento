import { useState } from 'react';
import { Heading, Text, Flex, Button, TextField } from '@radix-ui/themes';
import { Transaction } from '@mysten/sui/transactions';
import { useSignAndExecuteTransaction } from '@mysten/dapp-kit';
import { TESTNET_BADGE_PACKAGE_ID } from '../constants';

function BadgeMinting() {
    const [code, setCode] = useState('');
    const { mutate: signAndExecute, isPending } = useSignAndExecuteTransaction();
  
    const handleMint = () => {
      const tx = new Transaction();
      tx.moveCall({
        target: `${TESTNET_BADGE_PACKAGE_ID}::badge::mint_badge`,
        arguments: [tx.pure(code)],
      });
      signAndExecute(
        { transaction: tx },
        { onSuccess: () => alert('Badge minted successfully!') }
      );
    };

    return (
        <div className="page badge-minting">
          <Heading size="8">Mint Your Badge</Heading>
          <Flex direction="column" gap="3">
            <TextField.Root
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter your unique code"
            />
            <Button onClick={handleMint} disabled={isPending}>
              {isPending ? 'Minting...' : 'Claim Badge'}
            </Button>
          </Flex>
        </div>
      );
    }