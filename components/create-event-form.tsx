'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSuiContracts } from '@/hooks/use-sui-contracts';
import { useCurrentAccount } from '@mysten/dapp-kit';
import { toast } from 'sonner';

const eventSchema = z.object({
  name: z.string().min(1, 'Event name is required'),
  date: z.string().min(1, 'Event date is required'),
  location: z.string().min(1, 'Location is required'),
  description: z.string().min(1, 'Description is required'),
  badgeDesign: z.string().url('Must be a valid URL').optional().or(z.literal('')),
});

type EventFormData = z.infer<typeof eventSchema>;

export function CreateEventForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { createEvent } = useSuiContracts();
  const account = useCurrentAccount();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
  });

  const onSubmit = async (data: EventFormData) => {
    if (!account) {
      toast.error('Please connect your wallet first');
      return;
    }

    setIsLoading(true);
    try {
      const dateTimestamp = new Date(data.date).getTime();
      await createEvent(
        data.name,
        dateTimestamp,
        data.location,
        data.description,
        data.badgeDesign || 'https://default-badge-design.com'
      );
      
      toast.success('Event created successfully!');
      reset();
    } catch (error) {
      console.error('Error creating event:', error);
      toast.error('Failed to create event');
    } finally {
      setIsLoading(false);
    }
  };

  if (!account) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">
            Please connect your wallet to create events
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Event</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name">Event Name</Label>
            <Input
              id="name"
              {...register('name')}
              placeholder="Enter event name"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="date">Event Date</Label>
            <Input
              id="date"
              type="datetime-local"
              {...register('date')}
            />
            {errors.date && (
              <p className="text-sm text-red-500 mt-1">{errors.date.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              {...register('location')}
              placeholder="Enter event location"
            />
            {errors.location && (
              <p className="text-sm text-red-500 mt-1">{errors.location.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              {...register('description')}
              placeholder="Describe your event"
              rows={3}
            />
            {errors.description && (
              <p className="text-sm text-red-500 mt-1">{errors.description.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="badgeDesign">Badge Design URL (Optional)</Label>
            <Input
              id="badgeDesign"
              {...register('badgeDesign')}
              placeholder="https://example.com/badge-design.png"
            />
            {errors.badgeDesign && (
              <p className="text-sm text-red-500 mt-1">{errors.badgeDesign.message}</p>
            )}
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? 'Creating Event...' : 'Create Event'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}