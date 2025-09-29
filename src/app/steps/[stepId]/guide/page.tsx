
'use client';
import { notFound, useRouter, useParams } from 'next/navigation';
import { courseSteps } from '@/lib/data';
import type { GuideItem } from '@/lib/data';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, AlertTriangle, Check, X, Clock, Eye, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function GuidePage() {
  const router = useRouter();
  const params = useParams();
  
  const stepId = Array.isArray(params.stepId) ? params.stepId[0] : params.stepId;
  const currentStepIndex = courseSteps.findIndex((s) => s.id === stepId);
  
  if (currentStepIndex === -1) {
    notFound();
  }
  const step = courseSteps[currentStepIndex];

  const guideItems: GuideItem[] = step?.stages.flatMap(stage =>
    stage.blocks
      .filter(block => block.type === 'guide' && block.items)
      .flatMap(block => block.items as GuideItem[])
  ) || [];

  if (!step || guideItems.length === 0) {
    notFound();
  }

  const isLastStep = currentStepIndex === courseSteps.length - 1;

  const handleAdvance = () => {
    if (isLastStep) {
      router.push('/');
    } else {
      const nextStep = courseSteps[currentStepIndex + 1];
      router.push(`/steps/${nextStep.id}`);
    }
  };

  const GuideItemCard = ({ item, index }: { item: GuideItem, index: number }) => {
    return (
      <Card className="w-full transition-all duration-300 shadow-sm">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg flex-shrink-0">
                {index + 1}
              </div>
              <h2 className="font-headline text-2xl font-bold">{item.title}</h2>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              {item.time && <Badge variant="secondary"><Clock className="h-3 w-3 mr-1" />{item.time}</Badge>}
              {item.attention && <Badge variant="outline" className="border-amber-500/50 text-amber-600"><Eye className="h-3 w-3 mr-1" />{item.attention}</Badge>}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-3">
            {item.actions.map((action, index) => (
              <li key={index} className="flex items-start gap-3">
                 <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>{action}</span>
              </li>
            ))}
          </ul>
          
          {(item.hint || item.alert) && <Separator />}

          {item.hint && (
            <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-400/20 border border-yellow-400/50">
              <Lightbulb className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-600">Dica</h4>
                <p className="text-sm text-yellow-600/80">{item.hint}</p>
              </div>
            </div>
          )}
          {item.alert && (
            <div className="flex items-start gap-3 p-3 rounded-lg bg-orange-500/20 border border-orange-500/50">
              <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
               <div>
                <h4 className="font-semibold text-orange-700">Alerta</h4>
                <p className="text-sm text-orange-700/80">{item.alert}</p>
              </div>
            </div>
          )}

        </CardContent>
      </Card>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className='flex items-center gap-2'>
              <step.icon className="h-6 w-6 text-primary" />
              <h1 className="font-headline text-lg font-bold">{step.title}</h1>
            </div>
            <Button variant="ghost" size="icon" onClick={() => router.push(`/steps/${stepId}`)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full py-8">
        <div className="container mx-auto max-w-2xl space-y-6">
            {guideItems.map((item, index) => (
                <GuideItemCard key={item.id} item={item} index={index} />
            ))}

            <div className='flex justify-end pt-6'>
                <Button size="lg" onClick={handleAdvance}>
                    {isLastStep ? 'Finalizar Curso' : 'Avançar para o Próximo Passo'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </div>
        </div>
      </main>
    </div>
  );
}
