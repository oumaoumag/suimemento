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

    const handleCreateEvent = () => {
        const tx = new Transaction();
        tx.moveCall({
          target: `${TESTNET_EVENT_PACKAGE_ID}::event::create_event`,
          arguments: [
            tx.pure(eventName),
            tx.pure.u64(new Date(date).getTime() / 1000), // Convert to Unix timestamp
            tx.pure(location),
            tx.pure(description),
            tx.pure(badgeDesign),
          ],
        });
        signAndExecute(
            { transaction: tx },
            { onSuccess: () => alert('Event created successfully!') }
          );
        };

        return (
            <div className="page organizer-portal">
              <Heading size="8">Organizer Portal</Heading>
              <Flex direction="column" gap="3">
                <TextField.Root
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  placeholder="Event Name"
                />
                <TextField.Root
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Event Date"
                />
                <TextField.Root
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                />
                <TextField.Root
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                />
                <TextField.Root
                  value={badgeDesign}
                  onChange={(e) => setBadgeDesign(e.target.value)}
                  placeholder="Badge Design URL"
                />
                <Button onClick={handleCreateEvent} disabled={isPending}>
                  {isPending ? 'Creating...' : 'Create Event'}
                </Button>
              </Flex>
            </div>
          );
        }
        
        export default OrganizerPortal;