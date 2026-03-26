'use client';

import * as React from 'react';
import { Progress as ProgressPrimitive } from 'radix-ui';

import { cn } from '@/lib/utils';

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        'bg-muted h-1.5 rounded-full relative flex w-full items-center overflow-x-hidden',
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="size-full flex-1 transition-all rounded-full"
        style={{
          transform: `translateX(-${100 - (value || 0)}%)`,
          background: 'linear-gradient(90deg, hsl(249 100% 69%), hsl(186 100% 50%))',
          backgroundSize: '200% 100%',
          animation: 'gradient-shimmer 2s linear infinite',
        }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
