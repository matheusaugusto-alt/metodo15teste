
'use client';

import { Smartphone } from 'lucide-react';
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
    title: '1º Passo',
    description: 'Clique no ícone de compartilhamento na parte inferior da página.',
    src: 'https://i.imgur.com/A1dpBUk.png',
    alt: 'Passo 1: Clicar no ícone de compartilhamento.',
    width: 428,
    height: 926
  },
  {
    title: '2º Passo',
    description: 'Role para baixo nas opções de compartilhamento para encontrar mais ações.',
    src: 'https://i.imgur.com/YtiFfU6.png',
    alt: 'Passo 2: Rolar para baixo nas opções.',
    width: 428,
    height: 926
  },
  {
    title: '3º Passo',
    description: 'Desça um pouco a tela e clique em "Adicionar à Tela de Início".',
    src: 'https://i.imgur.com/cIMKcDD.png',
    alt: 'Passo 3: Selecionar a opção "Adicionar à Tela de Início".',
    width: 428,
    height: 926
  },
  {
    title: '4º Passo',
    description: 'Clique em "Adicionar" para finalizar.',
    src: 'https://i.imgur.com/TSK5Q0B.png',
    alt: 'Passo 4: Confirmar para adicionar o aplicativo à tela de início.',
    width: 428,
    height: 926
  },
];

const androidSteps = [
    {
    title: '1º Passo',
    description: 'Clique nos três pontinhos na parte superior da página.',
    src: 'https://i.imgur.com/2hCL7cl.png',
    alt: 'Passo 1: Abrir o menu de opções do Chrome.',
    width: 428,
    height: 926
  },
  {
    title: '2º Passo',
    description: 'Clique em "Instalar aplicativo" (em alguns celulares pode aparecer como "Adicionar à tela inicial").',
    src: 'https://i.imgur.com/BQ8gZqs.png',
    alt: 'Passo 2: Selecionar Instalar aplicativo.',
    width: 428,
    height: 926
  },
  {
    title: '3º Passo',
    description: 'Confirme a instalação clicando em "Instalar".',
    src: 'https://i.imgur.com/ZaDUNKW.png',
    alt: 'Passo 3: Confirmar a instalação.',
    width: 428,
    height: 926
  },
    {
    title: '4º Passo',
    description: 'Pronto! O aplicativo aparecerá na sua tela inicial.',
    src: 'https://i.imgur.com/9TnjTD5.png',
    alt: 'Passo 4: Aplicativo instalado na tela inicial.',
    width: 428,
    height: 926
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

      <div className="bg-card p-6 sm:p-8 rounded-2xl border mb-8">
        <h2 className="font-headline text-2xl font-semibold mb-6 text-center">
          iPhone (Safari)
        </h2>
        <Carousel className="w-full max-w-xs sm:max-w-sm mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {iphoneSteps.map((step, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center text-center gap-4 p-1">
                  <div className="mb-4">
                    <h3 className="font-headline text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                  </div>
                  <Image
                    src={step.src}
                    alt={step.alt}
                    width={step.width}
                    height={step.height}
                    className="object-contain w-full h-auto rounded-lg"
                    sizes="(max-width: 640px) 80vw, 25vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex -left-16" />
          <CarouselNext className="hidden sm:inline-flex -right-16" />
        </Carousel>
      </div>
      
      <div className="bg-card p-6 sm:p-8 rounded-2xl border">
        <h2 className="font-headline text-2xl font-semibold mb-6 text-center">
          Android (Chrome)
        </h2>
        <Carousel className="w-full max-w-xs sm:max-w-sm mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {androidSteps.map((step, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center text-center gap-4 p-1">
                  <div className="mb-4">
                    <h3 className="font-headline text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                  </div>
                  <Image
                    src={step.src}
                    alt={step.alt}
                    width={step.width}
                    height={step.height}
                    className="object-contain w-full h-auto rounded-lg"
                    sizes="(max-width: 640px) 80vw, 25vw"
                  />
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
