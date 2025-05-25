import { Heading, Flex, Text } from '@radix-ui/themes';

function Marketplace() {
    // Mock marketplace listings
    const listings = [
      { id: "0x201", name: "Music Fest Badge", price: "5 SUI" },
      { id: "0x202", name: "Tech Summit Badge", price: "8 SUI" },
    ];
    
    return (
        <div className="page marketplace">
          <Heading size="8">Marketplace</Heading>
          <Flex direction="column" gap="3">
            {listings.map(listing => (
              <div key={listing.id} className="listing-card">
                <Text>{listing.name}</Text>
                <Text>Price: {listing.price}</Text>
              </div>
            ))}
          </Flex>
        </div>
      );
    }

    export default Marketplace;