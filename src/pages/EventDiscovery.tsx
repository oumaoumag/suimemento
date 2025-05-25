import { Heading, Flex, Text } from '@radix-ui/themes';
import { useSuiClientQuery } from '@mysten/dapp-kit';

function EventDiscovery() {
    // PLaceholder for blockchain data fetching
    const { data, isPending, error } = useSuiClientQuery('getObjects', {
        owner: 'EVENT_REGISTRY_ADDRESS', // To Be updated with actual address
    }, { enabled: false }); // Disabled unit contract is ready

    const mockEvents  = [
        { id: "0x1", name: "Lagos Art Expo", location: "Lagos", date: "2025-05-20" },
        { id: "0x2", name: "Cape Town Tech", location: "Cape Town", date: "2025-06-01" },
];

    return (
         <div className='page event-discovery'>
            <Heading size='8'>Discover Events</Heading>
            {isPending && <Text>Loading...</Text>}
            {error && <Text>Error: {error.message}</Text>}
            <Flex direction="column" gap="3">
                {mockEvents.map(event => (
                    <div key={event.id} className='event-card'>
                        <Text size="4">{event.name}</Text>
                        <Text>Location: {event.location}</Text>
                        <Text>Date: {event.date}</Text>
                    </div>
                ))}
            </Flex>
         </div>
    );
}

export default EventDiscovery