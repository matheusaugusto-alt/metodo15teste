
'use client';
import { notFound, useRouter } from 'next/navigation';
import { courseSteps } from '@/lib/data';
import type { GuideItem } from '@/lib/data';
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, AlertTriangle, Check, X, Clock, Eye } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useProgress } from '@/hooks/use-progress';
import { AnimatePresence, motion } from 'framer-motion';

export default function GuidePage({ params }: { params: { stepId: string } }) {
  const router = useRouter();
  const { toggleItemCompletion, isItemCompleted } = useProgress();

  const step = courseSteps.find((s) => s.id === params.stepId);
  const guideItems: GuideItem[] = step?.stages.flatMap(stage =>
    stage.blocks
      .filter(block => block.type === 'guide' && block.items)
      .flatMap(block => block.items as GuideItem[])
  ) || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (guideItems.length > 0) {
      setIsCompleted(isItemCompleted(guideItems[currentIndex].id));
    }
  }, [currentIndex, guideItems, isItemCompleted]);


  if (!step || guideItems.length === 0) {
    notFound();
  }

  const handleNext = () => {
    setDirection(1);
    if (currentIndex < guideItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push(`/steps/${params.stepId}`);
    }
  };

  const handleBack = () => {
    setDirection(-1);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      router.push(`/steps/${params.stepId}`);
    }
  };
  
  const handleComplete = () => {
    const currentGuideId = guideItems[currentIndex].id;
    toggleItemCompletion(currentGuideId);
    setIsCompleted(!isCompleted);
    setTimeout(handleNext, 1200);
  }

  const currentGuideItem = guideItems[currentIndex];
  const progressPercentage = ((currentIndex + 1) / guideItems.length) * 100;
  
  const cardVariants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? '100%' : '-100%',
    }),
    visible: {
      opacity: 1,
      x: '0%',
      transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction < 0 ? '100%' : '-100%',
      transition: { duration: 0.5, ease: 'easeInOut' }
    }),
  };


  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className='flex items-center gap-2'>
              <step.icon className="h-6 w-6 text-primary" />
              <h1 className="font-headline text-lg font-bold">{step.title}</h1>
            </div>
            <Button variant="ghost" size="icon" onClick={() => router.push(`/steps/${params.stepId}`)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div>
             <Progress value={progressPercentage} className="h-1" />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          variants={cardVariants}
          custom={direction}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full max-w-2xl"
        >
          <Card className={`w-full transition-all duration-1000 ${isCompleted ? 'border-green-500 border-2' : ''}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    {currentIndex + 1}
                  </div>
                  <h2 className="font-headline text-2xl font-bold">{currentGuideItem.title}</h2>
                </div>
                <div className="flex items-center gap-2">
                  {currentGuideItem.time && <Badge variant="secondary"><Clock className="h-3 w-3 mr-1" />{currentGuideItem.time}</Badge>}
                  {currentGuideItem.attention && <Badge variant="outline"><Eye className="h-3 w-3 mr-1" />{currentGuideItem.attention}</Badge>}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {currentGuideItem.actions.map((action, index) => (
                  <li key={index} className="flex items-start gap-3">
                     <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
              
              {(currentGuideItem.hint || currentGuideItem.alert) && <Separator />}

              {currentGuideItem.hint && (
                <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20 border border-secondary/50">
                  <Lightbulb className="h-5 w-5 text-secondary-foreground flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-secondary-foreground">Dica</h4>
                    <p className="text-sm text-secondary-foreground/80">{currentGuideItem.hint}</p>
                  </div>
                </div>
              )}
              {currentGuideItem.alert && (
                <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-500/20 border border-amber-500/50">
                  <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                   <div>
                    <h4 className="font-semibold text-amber-700 dark:text-amber-600">Alerta</h4>
                    <p className="text-sm text-amber-700/80 dark:text-amber-600/80">{currentGuideItem.alert}</p>
                  </div>
                </div>
              )}

            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                {currentIndex === 0 ? 'Voltar' : 'Anterior'}
              </Button>
              <Button onClick={handleComplete}>
                <Check className="mr-2 h-4 w-4" />
                {isCompleted ? 'Desmarcar' : 'Concluir Passo'}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
         </AnimatePresence>
      </main>
    </div>
  );
}