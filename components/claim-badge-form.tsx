'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSuiContracts } from '@/hooks/use-sui-contracts';
import { useCurrentAccount } from '@mysten/dapp-kit';
import { toast } from 'sonner';

const claimSchema = z.object({
  eventId: z.string().min(1, 'Event ID is required'),
  code: z.string().min(1, 'Claim code is required'),
});

type ClaimFormData = z.infer<typeof claimSchema>;

export function ClaimBadgeForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { claimBadge } = useSuiContracts();
  const account = useCurrentAccount();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ClaimFormData>({
    resolver: zodResolver(claimSchema),
  });

  const onSubmit = async (data: ClaimFormData) => {
    if (!account) {
      toast.error('Please connect your wallet first');
      return;
    }

    setIsLoading(true);
    try {
      await claimBadge(data.eventId, data.code);
      toast.success('Badge claimed successfully!');
      reset();
    } catch (error) {
      console.error('Error claiming badge:', error);
      toast.error('Failed to claim badge. Check your code and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!account) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">
            Please connect your wallet to claim badges
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Claim Event Badge</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="eventId">Event ID</Label>
            <Input
              id="eventId"
              {...register('eventId')}
              placeholder="Enter event ID"
            />
            {errors.eventId && (
              <p className="text-sm text-red-500 mt-1">{errors.eventId.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="code">Claim Code</Label>
            <Input
              id="code"
              {...register('code')}
              placeholder="Enter your claim code"
            />
            {errors.code && (
              <p className="text-sm text-red-500 mt-1">{errors.code.message}</p>
            )}
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? 'Claiming Badge...' : 'Claim Badge'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}