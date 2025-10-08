import { Smartphone, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const iphoneSteps = [
  {
    title: 'Passo 1: Menu de Compartilhamento',
    description: 'Abra o menu de compartilhamento do Safari clicando no ícone central.',
    src: 'https://i.imgur.com/2hCL7cl.png',
    alt: 'Passo 1: Abrir o menu de compartilhamento do Safari.',
  },
  {
    title: 'Passo 2: Role para baixo',
    description: 'Role para baixo nas opções de compartilhamento para encontrar mais ações.',
    src: 'https://i.imgur.com/BQ8gZqs.png',
    alt: 'Passo 2: Rolar para baixo nas opções de compartilhamento.',
  },
  {
    title: 'Passo 3: Adicionar à Tela de Início',
    description: 'Selecione a opção "Adicionar à Tela de Início" para criar o atalho.',
    src: 'https://i.imgur.com/ZaDUNKW.png',
    alt: 'Passo 3: Selecionar a opção "Adicionar à Tela de Início".',
  },
  {
    title: 'Passo 4: Confirme a Adição',
    description: 'Confirme o nome do aplicativo e clique em "Adicionar" para finalizar.',
    src: 'https://i.imgur.com/9TnjTD5.png',
    alt: 'Passo 4: Confirmar para adicionar o aplicativo à tela de início.',
  },
];

export default function InfoPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <Smartphone className="h-10 w-10 text-primary mb-4" />
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
          Aviso Importante
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Para usar o Método FICA-15 da melhor forma, adicione-o à tela inicial do seu celular. Siga o passo a passo abaixo:
        </p>
      </div>

      <div className="bg-card p-6 sm:p-8 rounded-2xl border">
        <h2 className="font-headline text-2xl font-semibold mb-6 text-center">
          iPhone (Safari)
        </h2>
        <Carousel className="w-full max-w-xs sm:max-w-sm mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {iphoneSteps.map((step, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center text-center gap-4 p-1">
                  <div className="relative w-full aspect-[9/19] rounded-xl overflow-hidden border-4 border-foreground/10 shadow-lg">
                    <Image
                      src={step.src}
                      alt={step.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 80vw, 25vw"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-headline text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex -left-16" />
          <CarouselNext className="hidden sm:inline-flex -right-16" />
        </Carousel>
      </div>
    </div>
  );
}