import { useState } from 'react';
import { Heading, Flex, Text, Button, TextField } from '@radix-ui/themes';
import { Transaction } from '@mysten/sui/transactions';
import { useSignAndExecuteTransaction } from '@mysten/dapp-kit';
import { TESTNET_EVENT_PACKAGE_ID } from '../constants';
