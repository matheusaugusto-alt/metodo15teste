
'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Smartphone, Info, X } from 'lucide-react';
import Image from 'next/image';
import { ScrollArea } from '../ui/scroll-area';

const iphoneSteps = [
  {
    src: 'https://i.imgur.com/2hCL7cl.png',
    alt: 'Passo 1: Abrir o menu de compartilhamento do Safari.',
  },
  {
    src: 'https://i.imgur.com/BQ8gZqs.png',
    alt: 'Passo 2: Rolar para baixo nas opções de compartilhamento.',
  },
  {
    src: 'https://i.imgur.com/ZaDUNKW.png',
    alt: 'Passo 3: Selecionar a opção "Adicionar à Tela de Início".',
  },
  {
    src: 'https://i.imgur.com/9TnjTD5.png',
    alt: 'Passo 4: Confirmar para adicionar o aplicativo à tela de início.',
  },
];

export default function ImportantInfo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg">
          <Info className="mr-2 h-5 w-5" />
          Informações importantes
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="flex items-center gap-3 text-2xl font-headline">
            <Smartphone className="h-7 w-7 text-primary" />
            AVISO IMPORTANTE
          </DialogTitle>
        </DialogHeader>
        <div className="px-6">
            <p className="text-muted-foreground">
                Para usar o Método FICA-15 da melhor forma, é recomendado adicionar à tela inicial e utilizar como um aplicativo. Siga o passo a passo abaixo:
            </p>
        </div>
        <ScrollArea className="flex-1 px-6 mt-4">
          <div className="space-y-6">
            <div>
              <h3 className="font-headline text-xl font-semibold mb-4">iPhone (Safari)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {iphoneSteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                     <div className="relative w-full aspect-[9/19] rounded-lg overflow-hidden border-4 border-foreground/10 shadow-lg">
                        <Image
                            src={step.src}
                            alt={step.alt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                        />
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
         <DialogClose asChild>
            <Button type="button" variant="ghost" size="icon" className='absolute top-4 right-4'>
              <X className="h-5 w-5" />
              <span className="sr-only">Fechar</span>
            </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
