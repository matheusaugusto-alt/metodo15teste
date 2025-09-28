import Link from 'next/link';
import Image from 'next/image';
import type { Step } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type StepCardProps = {
  step: Step;
  index: number;
};

export default function StepCard({ step, index }: StepCardProps) {
  return (
    <Link href={`/steps/${step.id}`} className="group block">
      <Card className="h-full overflow-hidden transition-all group-hover:shadow-lg group-hover:-translate-y-1 group-hover:shadow-primary/20">
        <div className="relative h-40 w-full">
            <Image
                src={step.image.url}
                alt={step.title}
                fill
                className="object-cover"
                data-ai-hint={step.image.hint}
            />
        </div>
        <CardHeader>
          <Badge variant="secondary" className="w-fit mb-2 bg-accent/50 text-accent-foreground">Passo {index + 1}</Badge>
          <CardTitle className="font-headline text-xl">{step.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{step.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
