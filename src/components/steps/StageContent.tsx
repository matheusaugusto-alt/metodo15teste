"use client";

import type { Stage } from '@/lib/data';
import { iconMap } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ChecklistItemComponent from './ChecklistItem';

interface StageContentProps {
  stage: Stage;
}

export default function StageContent({ stage }: StageContentProps) {
  return (
    <Accordion type="multiple" defaultValue={stage.blocks.map(b => b.title)} className="w-full space-y-4">
      {stage.blocks.map((block) => {
        const IconComponent = iconMap[block.icon];
        return (
          <AccordionItem key={block.title} value={block.title} className="border bg-card rounded-xl shadow-sm transition-shadow hover:shadow-md">
            <AccordionTrigger className="text-lg font-headline font-semibold hover:no-underline px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <IconComponent className="h-5 w-5" />
                </div>
                {block.title}
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-0 pb-6 px-6">
              {block.type === 'checklist' && block.items && (
                <div className="space-y-3 pl-14">
                  {block.items.map((item) => (
                    <ChecklistItemComponent key={item.id} item={item} />
                  ))}
                </div>
              )}
              {block.content && (
                <div className="prose prose-sm max-w-none text-muted-foreground pl-14">
                  <ul className="space-y-2 list-disc">
                    {block.content.map((line, index) => (
                      <li key={index}>{line}</li>
                    ))}
                  </ul>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
