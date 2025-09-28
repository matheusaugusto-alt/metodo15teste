import { PawPrint } from 'lucide-react';
import { courseSteps } from '@/lib/data';
import StepCard from '@/components/steps/StepCard';

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4 sm:p-8">
      <div className="text-center mb-12 mt-8">
        <PawPrint className="mx-auto h-12 w-12 text-primary" />
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-foreground mt-4">
          Bath Time Bliss
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Um guia passo a passo para transformar a hora do banho do seu cão em um momento de calma e conexão.
        </p>
      </div>

      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseSteps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
