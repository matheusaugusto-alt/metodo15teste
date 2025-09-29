"use client";

import Link from 'next/link';
import { ArrowLeft, PawPrint } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 items-center">
          <Button variant="ghost" size="icon" asChild className='h-10 w-10'>
            <Link href="/" aria-label="Voltar para a página inicial">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <Link href="/" className="flex items-center space-x-2">
            <PawPrint className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg hidden sm:inline-block">Bath Time Bliss</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
