"use client";

import type { Stage } from '@/lib/data';
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
      {stage.blocks.map((block) => (
        <AccordionItem key={block.title} value={block.title} className="border bg-card rounded-lg px-4">
          <AccordionTrigger className="text-lg font-headline hover:no-underline">
            <div className="flex items-center gap-3">
              <block.icon className="h-5 w-5 text-primary" />
              {block.title}
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4">
            {block.type === 'checklist' && block.items && (
              <div className="space-y-3">
                {block.items.map((item) => (
                  <ChecklistItemComponent key={item.id} item={item} />
                ))}
              </div>
            )}
            {block.content && (
              <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                {block.content.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
