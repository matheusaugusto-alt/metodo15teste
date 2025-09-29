
"use client";

import type { Stage, ContentBlock } from '@/lib/data';
import { iconMap } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ChecklistItemComponent from './ChecklistItem';
import { Check, HelpCircle, Info, AlertTriangle } from 'lucide-react';

interface StageContentProps {
  stage: Stage;
}

const getIconForType = (type: ContentBlock['type']) => {
  switch (type) {
    case 'info':
      return <Info className="h-5 w-5" />;
    case 'faq':
      return <HelpCircle className="h-5 w-5" />;
    case 'errors':
        return <AlertTriangle className="h-5 w-5" />;
    case 'checklist':
        return <Check className="h-5 w-5" />;
    default:
      return <Info className="h-5 w-5" />;
  }
}

const QABlock = ({ content }: { content: string[] }) => {
    return (
      <div className="space-y-3">
        {content.map((item, index) => {
          const separator = '?”';
          const separatorIndex = item.indexOf(separator);
          
          if (separatorIndex === -1) {
            const [question, answer] = item.split(': ');
            if (!answer) return null;
            return (
              <div key={index}>
                <div className="group/q flex items-center gap-3 rounded-xl bg-muted p-3 transition-transform duration-200 hover:-translate-y-0.5">
                  <HelpCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                  <h4 className="font-headline text-base font-semibold text-primary">{question}</h4>
                </div>
                <div className="mt-2 pl-4 border-l-[3px] border-primary/70 ml-4">
                  <p className="py-2 text-foreground/80">{answer.trim()}</p>
                </div>
              </div>
            );
          }

          const question = item.substring(1, separatorIndex + 1);
          const answer = item.substring(separatorIndex + separator.length);
          
          return (
            <div key={index}>
              <div className="group/q flex items-center gap-3 rounded-xl bg-muted p-3 transition-transform duration-200 hover:-translate-y-0.5">
                <HelpCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                <h4 className="font-headline text-base font-semibold text-primary">{question}</h4>
              </div>
              <div className="mt-2 pl-4 border-l-[3px] border-primary/70 ml-4">
                <p className="py-2 text-foreground/80">{answer.trim()}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
};

const ErrorsBlock = ({ content }: { content: string[] }) => {
    return (
      <div className="space-y-5">
        {content.map((item, index) => {
          const [error, correction] = item.split(': Corrija - ');
          return (
            <div key={index} className="flex items-start gap-4">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-secondary-foreground">
                {index + 1}
              </div>
              <div>
                <p className="font-medium text-foreground">{error}</p>
                {correction && (
                  <div className="mt-2 inline-flex items-center gap-2 rounded-lg bg-yellow-50 px-3 py-1 text-sm border border-yellow-200">
                    <span className="font-semibold text-yellow-800">Correção:</span>
                    <span className="text-yellow-900">{correction}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
};
  

const InfoBlock = ({ content }: { content: string[] }) => {
    const tldr = content.slice(0, 1);
    const details = content.slice(1);

    return (
        <div className="space-y-4">
            {tldr.length > 0 && (
                 <div className="rounded-lg bg-muted p-3 border">
                    <div className="flex items-center gap-3">
                        <Info className="h-5 w-5 flex-shrink-0 text-primary" />
                        <p className="text-sm font-medium text-primary">{tldr[0]}</p>
                    </div>
                </div>
            )}
            {details.length > 0 && (
                <ul className="space-y-2 pl-5 list-disc text-foreground/80">
                    {details.map((line, index) => (
                      <li key={index}>{line}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default function StageContent({ stage }: StageContentProps) {
  const checklistBlocks = stage.blocks.filter(block => block.type === 'checklist');
  const otherBlocks = stage.blocks.filter(block => block.type !== 'checklist');
  const blocksToRender = [...otherBlocks, ...checklistBlocks];

  if (blocksToRender.length === 0) return null;

  return (
    <Accordion type="multiple" defaultValue={blocksToRender.map(b => b.title)} className="w-full space-y-4">
      {blocksToRender.map((block) => {
        const IconComponent = iconMap[block.icon];
        return (
          <AccordionItem key={block.title} value={block.title} className="border bg-card rounded-2xl shadow-sm transition-shadow hover:shadow-md">
            <AccordionTrigger className="text-lg font-headline font-semibold hover:no-underline px-4 sm:px-6 py-4">
              <div className="flex items-center gap-4 w-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  {IconComponent && <IconComponent className="h-6 w-6" />}
                </div>
                <div className='flex flex-col items-start text-left flex-grow'>
                    <span className="text-left">{block.title}</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-0 pb-6 px-4 sm:px-6">
                <div className="pl-0 sm:pl-16 max-w-3xl">
                  {block.type === 'checklist' && block.items && (
                    <div className="space-y-2">
                      {block.items.map((item) => (
                        <ChecklistItemComponent key={item.id} item={item} />
                      ))}
                    </div>
                  )}
                   {block.type === 'faq' && block.content && <QABlock content={block.content} />}
                   {block.type === 'errors' && block.content && <ErrorsBlock content={block.content} />}
                   {block.type === 'info' && block.content && <InfoBlock content={block.content} />}
                   {block.type !== 'faq' && block.type !== 'errors' && block.type !== 'info' && block.type !== 'checklist' && block.content && (
                     <div className="prose prose-sm max-w-none text-foreground/80">
                       <ul className="space-y-2">
                         {block.content.map((line, index) => (
                           <li key={index} className="pl-2">{line}</li>
                         ))}
                       </ul>
                     </div>
                   )}
                </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
