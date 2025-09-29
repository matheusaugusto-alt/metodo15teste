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
  // Filter out 'guide' blocks, and separate 'checklist' blocks from others
  const guideBlocks = stage.blocks.filter(block => block.type === 'guide');
  const checklistBlocks = stage.blocks.filter(block => block.type === 'checklist');
  const otherBlocks = stage.blocks.filter(block => block.type !== 'guide' && block.type !== 'checklist');

  // Recombine, putting checklists at the end
  const blocksToRender = [...otherBlocks, ...checklistBlocks];

  if (blocksToRender.length === 0) return null;

  return (
    <Accordion type="multiple" defaultValue={blocksToRender.map(b => b.title)} className="w-full space-y-4">
      {blocksToRender.map((block) => {
        const IconComponent = iconMap[block.icon];
        return (
          <AccordionItem key={block.title} value={block.title} className="border bg-card rounded-2xl shadow-[0_6px_20px_rgba(27,39,94,0.08)] dark:shadow-none transition-shadow hover:shadow-lg">
            <AccordionTrigger className="text-lg font-headline font-semibold hover:no-underline px-4 sm:px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <IconComponent className="h-6 w-6" />
                </div>
                <span className="text-left">{block.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-0 pb-6 px-4 sm:px-6">
              {block.type === 'checklist' && block.items && (
                <div className="space-y-3 pl-0 sm:pl-16">
                  {block.items.map((item) => (
                    <ChecklistItemComponent key={item.id} item={item} />
                  ))}
                </div>
              )}
              {block.content && (
                <div className="prose prose-sm max-w-none text-foreground/80 pl-0 sm:pl-16">
                  <ul className="space-y-2">
                    {block.content.map((line, index) => (
                      <li key={index} className="pl-2">{line}</li>
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
