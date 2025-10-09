import { PawPrint, Info } from 'lucide-react';
import { courseSteps } from '@/lib/data';
import StepCard from '@/components/steps/StepCard';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block bg-primary/10 p-3 rounded-2xl mb-4">
              <PawPrint className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
              Método FICA-15
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Seu passo a passo para deixar o cachorro tranquilo para o banho
            </p>
          </div>
          <div className="relative h-80 lg:h-full min-h-[300px] rounded-3xl overflow-hidden shadow-lg shadow-primary/10">
             <div className="absolute inset-0 bg-gradient-to-t from-primary via-cyan-400 to-transparent opacity-20"></div>
            <Image
              src="https://i.imgur.com/WIskf54.png"
              alt="Happy dog getting a bath"
              fill
              priority
              className="object-cover"
              data-ai-hint="happy dog bath"
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <Link href="/info">
              <Info className="mr-2 h-5 w-5" />
              Informações importantes
            </Link>
          </Button>
        </div>

        <div className="mt-20 sm:mt-28">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground">
              Comece sua jornada
            </h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">Siga nossos 4 passos para um banho tranquilo e uma experiência positiva para seu pet.</p>
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
