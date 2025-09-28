import { notFound } from 'next/navigation';
import { courseSteps } from '@/lib/data';
import type { ChecklistItem } from '@/lib/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StageContent from '@/components/steps/StageContent';
import StepProgress from '@/components/steps/StepProgress';

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

  const allChecklistItems: ChecklistItem[] = step.stages.flatMap(stage =>
    stage.blocks
      .filter(block => block.type === 'checklist' && block.items)
      .flatMap(block => block.items as ChecklistItem[])
  );

  return (
    <div className="container mx-auto max-w-4xl p-4 md:p-8">
      <div className="mb-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
            <step.icon className="h-6 w-6" />
          </div>
          <h1 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            {step.title}
          </h1>
        </div>
        <p className="mt-4 text-lg text-muted-foreground">{step.longDescription}</p>
        
        {allChecklistItems.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Progresso da Etapa</h3>
            <StepProgress items={allChecklistItems} />
          </div>
        )}
      </div>

      <Tabs defaultValue={step.stages[0].id} className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {step.stages.map((stage) => (
            <TabsTrigger key={stage.id} value={stage.id}>
              {stage.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {step.stages.map((stage) => (
          <TabsContent key={stage.id} value={stage.id} className="mt-6">
            <StageContent stage={stage} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
