import { getFullnodeUrl } from "@mysten/sui/client";
import {
  TESTNET_EVENT_PACKAGE_ID,
  TESTNET_BADGE_PACKAGE_ID,
  TESTNET_MARKETPLACE_PACKAGE_ID,
} from "./constants.ts";
import { createNetworkConfig } from "@mysten/dapp-kit";

const { networkConfig, useNetworkVariable, useNetworkVariables } =
  createNetworkConfig({
    // devnet: {
    //   url: getFullnodeUrl("devnet"),
    //   variables: {
    //     counterPackageId: DEVNET_COUNTER_PACKAGE_ID,
    //   },
    // },
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: {
        eventPackageId: TESTNET_EVENT_PACKAGE_ID,
        badgePackageId: TESTNET_BADGE_PACKAGE_ID,
        marketplace: TESTNET_MARKETPLACE_PACKAGE_ID,
      },
    },
  //   mainnet: {
  //     url: getFullnodeUrl("mainnet"),
  //     variables: {
  //       counterPackageId: MAINNET_COUNTER_PACKAGE_ID,
  //     },
  //   },
  });

export { useNetworkVariable, useNetworkVariables, networkConfig };
