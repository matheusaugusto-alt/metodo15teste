"use client";

import { useProgress } from '@/hooks/use-progress';
import type { ChecklistItem } from '@/lib/data';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface ChecklistItemProps {
  item: ChecklistItem;
}

export default function ChecklistItemComponent({ item }: ChecklistItemProps) {
  const { isItemCompleted, toggleItemCompletion, isLoaded } = useProgress();

  if (!isLoaded) {
    return (
      <div className="flex items-center space-x-3 animate-pulse">
        <div className="h-4 w-4 rounded-sm bg-muted"></div>
        <div className="h-4 w-3/4 rounded bg-muted"></div>
      </div>
    );
  }

  const completed = isItemCompleted(item.id);

  return (
    <div className="flex items-center space-x-3 p-2 rounded-md transition-colors hover:bg-accent/50">
      <Checkbox
        id={item.id}
        checked={completed}
        onCheckedChange={() => toggleItemCompletion(item.id)}
        aria-labelledby={`label-${item.id}`}
      />
      <Label
        htmlFor={item.id}
        id={`label-${item.id}`}
        className={`flex-1 text-base cursor-pointer ${completed ? 'text-muted-foreground line-through' : 'text-foreground'}`}
      >
        {item.text}
      </Label>
    </div>
  );
}
