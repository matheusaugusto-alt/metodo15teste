import { notFound } from 'next/navigation';
import { courseSteps } from '@/lib/data';
import type { ChecklistItem } from '@/lib/data';
import StageContent from '@/components/steps/StageContent';
import StepProgress from '@/components/steps/StepProgress';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckSquare } from 'lucide-react';

export async function generateStaticParams() {
  return courseSteps.map((step) => ({
    stepId: step.id,
  }));
}

export default function StepPage({ params }: { params: { stepId: string } }) {
  const step = courseSteps.find((s) => s.id === params.stepId);

  if (!step) {
    notFound();
  }

  // Flatten all checklist items from all stages and all blocks for the progress bar
  const allChecklistItems: ChecklistItem[] = step.stages.flatMap(stage =>
    stage.blocks
      .filter(block => block.type === 'checklist' && block.items)
      .flatMap(block => block.items as ChecklistItem[])
  );

  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary flex-shrink-0">
            <step.icon className="h-7 w-7" />
          </div>
          <div>
            <h1 className="font-headline text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {step.title}
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">{step.longDescription}</p>
          </div>
        </div>
        
        {allChecklistItems.length > 0 && (
          <div className="mt-8">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Progresso da Etapa</h3>
            <StepProgress items={allChecklistItems} />
          </div>
        )}
      </div>

      <div className="w-full space-y-4 mb-8">
        {step.stages.map((stage) => (
          <StageContent key={stage.id} stage={stage} />
        ))}
      </div>

      <div className='bg-card border rounded-2xl p-6 my-8'>
          <div className='flex flex-col sm:flex-row items-center gap-4'>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
              <CheckSquare className="h-6 w-6" />
            </div>
            <div className='flex-grow'>
              <h2 className='font-headline text-xl font-bold'>Passo a Passo Detalhado</h2>
              <p className='text-muted-foreground mt-1'>Siga as ações em cartões interativos para uma experiência guiada.</p>
            </div>
            <Button asChild size="lg">
              <Link href={`/steps/${step.id}/guide`}>Iniciar Passo a Passo</Link>
            </Button>
          </div>
        </div>
    </div>
  );
}
