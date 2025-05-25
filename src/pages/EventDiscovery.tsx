import { Heading, Flex, Text } from '@radix-ui/themes';
import { useSuiClientQuery } from '@mysten/dapp-kit';

function EventDiscovery() {
    // PLaceholder for blockchain data fetching
    const { data, isPending, error } = useSuiClientQuery('getObjects', {
        owner: 'EVENT_REGISTRY_ADDRESS', // To Be updated with actual address
    }, { enabled: false }); // Disabled unit contract is ready
}