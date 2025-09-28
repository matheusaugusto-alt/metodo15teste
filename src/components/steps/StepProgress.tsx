"use client";

import { useEffect, useState } from 'react';
import type { ChecklistItem } from '@/lib/data';
import { useProgress } from '@/hooks/use-progress';
import { Progress } from '@/components/ui/progress';

interface StepProgressProps {
  items: ChecklistItem[];
}

export default function StepProgress({ items }: StepProgressProps) {
  const { progress, isLoaded } = useProgress();
  const [completionPercentage, setCompletionPercentage] = useState(0);

  useEffect(() => {
    if (isLoaded && items.length > 0) {
      const completedCount = items.filter(item => progress[item.id]).length;
      setCompletionPercentage((completedCount / items.length) * 100);
    }
  }, [progress, items, isLoaded]);

  if (!isLoaded) {
    return <Progress value={0} className="w-full" />;
  }

  return <Progress value={completionPercentage} className="w-full" />;
}
