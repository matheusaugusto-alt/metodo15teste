'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { courseSteps } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Home } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      href: '/',
      icon: Home,
      label: 'Início',
    },
    ...courseSteps.map((step, index) => ({
      href: `/steps/${step.id}`,
      icon: step.icon,
      label: `${index + 1}º Passo`,
    })),
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 shadow-[0_-4px_16px_rgba(27,39,94,0.06)] backdrop-blur-sm md:hidden">
      <div className="container mx-auto flex h-16 max-w-md items-center justify-around px-2">
        {navItems.map((item) => {
          const isActive = (pathname === '/' && item.href === '/') || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group flex h-full flex-col items-center justify-center gap-1.5 px-3 pt-2 text-center text-xs font-medium',
                isActive ? 'text-primary' : 'text-muted-foreground transition-colors hover:text-primary'
              )}
            >
              <item.icon className={cn('h-5 w-5 flex-shrink-0', isActive ? "text-primary" : "text-muted-foreground/80 group-hover:text-primary")} aria-hidden="true" />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
