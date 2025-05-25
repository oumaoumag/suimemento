import { useState } from 'react';
import { Heading, Text, Flex, Button, TextField } from '@radix-ui/themes';
import { Transaction } from '@mysten/sui/transactions';
import { useSignAndExecuteTransaction } from '@mysten/dapp-kit';
import { TESTNET_BADGE_PACKAGE_ID } from '../constants';