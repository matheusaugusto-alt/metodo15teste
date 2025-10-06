import Link from 'next/link';
import Image from 'next/image';
import type { Step } from '@/lib/data';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type StepCardProps = {
  step: Step;
  index: number;
};

export default function StepCard({ step, index }: StepCardProps) {
  return (
    <Link href={`/steps/${step.id}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-200 ease-in-out bg-card hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-48 w-full bg-muted/30">
            <Image
                src={step.image.url}
                alt={step.title}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                data-ai-hint={step.image.hint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
        </div>
        <CardHeader>
          <Badge variant="secondary" className="w-fit mb-2 font-semibold">Passo {index + 1}</Badge>
          <h3 className="font-headline text-xl font-bold text-foreground">{step.title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">{step.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
