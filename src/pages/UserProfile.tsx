import { Heading, Flex, Text } from '@radix-ui/themes';
import { useCurrentAccount } from '@mysten/dapp-kit';

function UserProfile() {
    const currentAccount = useCurrentAccount();
  
    // Mock badge data (replace with blockchain fetch)
    const badges = [
      { id: "0x101", name: "Art Expo 2025", level: 1 },
      { id: "0x102", name: "Tech Summit", level: 2 },
    ];

    return (
        <div className="page user-profile">
          <Heading size="8">Your Profile</Heading>
          {!currentAccount ? (
            <Text>Please connect your wallet</Text>
          ) : (
            <Flex direction="column" gap="3">
              <Text>Address: {currentAccount.address}</Text>
              <Heading size="6">Your Badges</Heading>
              {badges.map(badge => (
                <div key={badge.id} className="badge-card">
                  <Text>{badge.name} (Level {badge.level})</Text>
                </div>
              ))}
            </Flex>
          )}
        </div>
      );
    }

    export default UserProfile;