
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
      <div className="flex items-center space-x-4 animate-pulse h-11">
        <div className="h-6 w-6 rounded-md bg-muted"></div>
        <div className="h-4 w-3/4 rounded bg-muted"></div>
      </div>
    );
  }

  const completed = isItemCompleted(item.id);

  return (
    <div className="flex items-center space-x-4 p-2 rounded-lg transition-colors hover:bg-accent/50 h-11">
      <Checkbox
        id={item.id}
        checked={completed}
        onCheckedChange={() => toggleItemCompletion(item.id)}
        aria-labelledby={`label-${item.id}`}
      />
      <Label
        htmlFor={item.id}
        id={`label-${item.id}`}
        className={`flex-1 text-base cursor-pointer transition-colors ${completed ? 'text-muted-foreground line-through decoration-muted-foreground/50' : 'text-foreground'}`}
      >
        {item.text}
      </Label>
    </div>
  );
}
