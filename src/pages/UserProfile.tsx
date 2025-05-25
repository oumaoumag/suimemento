import { Heading, Flex, Text } from '@radix-ui/themes';
import { useCurrentAccount } from '@mysten/dapp-kit';

function UserProfile() {
    const currentAccount = useCurrentAccount();
  
    // Mock badge data (replace with blockchain fetch)
    const badges = [
      { id: "0x101", name: "Art Expo 2025", level: 1 },
      { id: "0x102", name: "Tech Summit", level: 2 },
    ];