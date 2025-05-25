import { useState } from 'react';
import { Heading, Flex, Text, Button, TextField } from '@radix-ui/themes';
import { Transaction } from '@mysten/sui/transactions';
import { useSignAndExecuteTransaction } from '@mysten/dapp-kit';
import { TESTNET_EVENT_PACKAGE_ID } from '../constants';

function OrganizerPortal() {
    const [eventName, setEventName] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [badgeDesign, setBadgeDesign] = useState('');
    const { mutate: signAndExecute, isPending } = useSignAndExecuteTransaction();