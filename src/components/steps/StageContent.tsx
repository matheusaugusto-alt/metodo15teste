
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
          const [question, answer] = item.split(': ');
          if (!answer) return null;

          return (
            <div key={index}>
              <div className="group/q flex items-center gap-3 rounded-xl bg-muted p-3 transition-transform duration-200 hover:-translate-y-0.5">
                <HelpCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                <h4 className="font-headline text-base font-semibold text-primary">{question.replace(/“|”/g, '')}</h4>
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

const ErrorsBlock = ({ content }: { content:string[] }) => {
    return (
      <div className="space-y-5">
        {content.map((item, index) => {
          const [error, rest] = item.split(': Atrapalha: ');
          let atrapalha = rest;
          let corrija;

          if (rest?.includes('; Corrija: ')) {
            [atrapalha, corrija] = rest.split('; Corrija: ');
          }
          
          return (
            <div key={index} className="flex flex-col gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                <h4 className="font-semibold text-red-700">{error}</h4>
                {atrapalha && <p className="text-sm text-red-900/80"><span className='font-medium'>Atrapalha:</span> {atrapalha}</p>}
                {corrija && (
                  <p className="text-sm text-green-800/90"><span className='font-medium text-green-700'>Corrija:</span> {corrija}</p>
                )}
            </div>
          );
        })}
      </div>
    );
};
  
const InfoBlock = ({ content }: { content: string[] }) => {
    return (
      <div className="space-y-2 text-foreground/80 prose prose-sm max-w-none">
        {content.map((line, index) => {
            if (line.trim() === '') {
                return <div key={index} className="h-4"></div>; // Spacer for empty lines
            }
            if (line.startsWith('- ')) {
                 return <p key={index} className="pl-4">{line}</p>;
            }
            if (line.endsWith('?') || line.endsWith(':')) {
                return <h5 key={index} className="font-semibold text-foreground/90 mt-4">{line}</h5>;
            }
            return <p key={index}>{line}</p>;
        })}
      </div>
    );
};

export default function StageContent({ stage }: StageContentProps) {
  const checklistBlocks = stage.blocks.filter(block => block.type === 'checklist');
  const otherBlocks = stage.blocks.filter(block => block.type !== 'checklist');
  const blocksToRender = [...otherBlocks, ...checklistBlocks];

  if (blocksToRender.length === 0) return null;

  return (
    <Accordion type="multiple" className="w-full space-y-4">
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
