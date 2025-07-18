'use client';

import { useSignAndExecuteTransaction, useSuiClient } from '@mysten/dapp-kit';
import { Transaction } from '@mysten/sui/transactions';
import { useCallback } from 'react';

// Replace with your actual package ID after deployment
const PACKAGE_ID = '0x0'; // You'll need to update this after deploying

export function useSuiContracts() {
  const client = useSuiClient();
  const { mutate: signAndExecute } = useSignAndExecuteTransaction();

  const createEvent = useCallback(
    async (
      name: string,
      date: number,
      location: string,
      description: string,
      badgeDesign: string
    ) => {
      const tx = new Transaction();
      
      tx.moveCall({
        target: `${PACKAGE_ID}::event::create_event`,
        arguments: [
          tx.pure.string(name),
          tx.pure.u64(date),
          tx.pure.string(location),
          tx.pure.string(description),
          tx.pure.string(badgeDesign),
        ],
      });

      return new Promise((resolve, reject) => {
        signAndExecute(
          { transaction: tx },
          {
            onSuccess: (result) => {
              console.log('Event created:', result);
              resolve(result);
            },
            onError: (error) => {
              console.error('Error creating event:', error);
              reject(error);
            },
          }
        );
      });
    },
    [signAndExecute]
  );

  const mintBadge = useCallback(
    async (
      eventId: string,
      name: string,
      imageUrl: string,
      recipient: string
    ) => {
      const tx = new Transaction();
      
      tx.moveCall({
        target: `${PACKAGE_ID}::badge::mint_badge`,
        arguments: [
          tx.pure.id(eventId),
          tx.pure.string(name),
          tx.pure.string(imageUrl),
          tx.pure.address(recipient),
        ],
      });

      return new Promise((resolve, reject) => {
        signAndExecute(
          { transaction: tx },
          {
            onSuccess: (result) => {
              console.log('Badge minted:', result);
              resolve(result);
            },
            onError: (error) => {
              console.error('Error minting badge:', error);
              reject(error);
            },
          }
        );
      });
    },
    [signAndExecute]
  );

  const claimBadge = useCallback(
    async (eventId: string, code: string) => {
      const tx = new Transaction();
      
      tx.moveCall({
        target: `${PACKAGE_ID}::badge::claim_badge`,
        arguments: [
          tx.pure.id(eventId),
          tx.pure.string(code),
        ],
      });

      return new Promise((resolve, reject) => {
        signAndExecute(
          { transaction: tx },
          {
            onSuccess: (result) => {
              console.log('Badge claimed:', result);
              resolve(result);
            },
            onError: (error) => {
              console.error('Error claiming badge:', error);
              reject(error);
            },
          }
        );
      });
    },
    [signAndExecute]
  );

  const upgradeBadge = useCallback(
    async (badgeId: string) => {
      const tx = new Transaction();
      
      tx.moveCall({
        target: `${PACKAGE_ID}::badge::upgrade_badge`,
        arguments: [tx.object(badgeId)],
      });

      return new Promise((resolve, reject) => {
        signAndExecute(
          { transaction: tx },
          {
            onSuccess: (result) => {
              console.log('Badge upgraded:', result);
              resolve(result);
            },
            onError: (error) => {
              console.error('Error upgrading badge:', error);
              reject(error);
            },
          }
        );
      });
    },
    [signAndExecute]
  );

  const getUserBadges = useCallback(
    async (userAddress: string) => {
      try {
        const objects = await client.getOwnedObjects({
          owner: userAddress,
          filter: {
            StructType: `${PACKAGE_ID}::badge::Badge`,
          },
          options: {
            showContent: true,
            showType: true,
          },
        });
        
        return objects.data;
      } catch (error) {
        console.error('Error fetching user badges:', error);
        return [];
      }
    },
    [client]
  );

  const getEvents = useCallback(
    async () => {
      try {
        // This would need to be implemented based on how you store events
        // For now, returning empty array
        return [];
      } catch (error) {
        console.error('Error fetching events:', error);
        return [];
      }
    },
    [client]
  );

  return {
    createEvent,
    mintBadge,
    claimBadge,
    upgradeBadge,
    getUserBadges,
    getEvents,
  };
}