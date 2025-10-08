import { Smartphone } from 'lucide-react';
import Image from 'next/image';

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

export default function InfoPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="flex flex-col items-center text-center mb-8">
        <Smartphone className="h-10 w-10 text-primary mb-4" />
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
          Aviso Importante
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Para usar o Método FICA-15 da melhor forma, é recomendado adicionar à tela inicial e utilizar como um aplicativo. Siga o passo a passo abaixo:
        </p>
      </div>
      
      <div className="bg-card p-6 sm:p-8 rounded-2xl border">
        <h2 className="font-headline text-2xl font-semibold mb-6 text-center sm:text-left">
          iPhone (Safari)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {iphoneSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-4">
              <div className="relative w-full aspect-[9/19] rounded-xl overflow-hidden border-4 border-foreground/10 shadow-lg">
                <Image
                  src={step.src}
                  alt={step.alt}
                  fill
                  className="object-contain bg-muted/20"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
                />
              </div>
              <p className='text-sm text-muted-foreground'>{`Passo ${index + 1}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
