import { PawPrint } from 'lucide-react';
import { courseSteps } from '@/lib/data';
import StepCard from '@/components/steps/StepCard';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-block bg-primary/10 p-3 rounded-xl mb-4">
              <PawPrint className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tighter">
              Bath Time Bliss
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
              Um guia passo a passo para transformar a hora do banho do seu cão em um momento de calma e conexão.
            </p>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
            <Image
              src="https://images.unsplash.com/photo-1599422488313-25586b2648d4?q=80&w=2070&auto=format&fit=crop"
              alt="Happy dog getting a bath"
              fill
              className="object-cover"
              data-ai-hint="happy dog"
            />
          </div>
        </div>

        <div className="mt-20 sm:mt-24">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground">
              Comece sua jornada
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">Siga nossos 4 passos para um banho tranquilo.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseSteps.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
