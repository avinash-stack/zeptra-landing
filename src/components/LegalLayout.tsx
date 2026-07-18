import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { appUrl } from '@/lib/domains';

type LegalLayoutProps = {
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center" aria-label="Zeptra home">
            <img
              src="/zeptra-logo.png"
              alt="Zeptra Logo"
              className="h-10 w-auto max-w-[140px] object-contain"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
                (event.currentTarget.nextElementSibling as HTMLElement)?.classList.remove('hidden');
              }}
            />
            <span className="hidden text-xl font-bold text-foreground">Zeptra</span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" asChild className="px-2 text-foreground sm:px-4">
              <a href={appUrl('/login')}>Login</a>
            </Button>
            <Button asChild className="bg-primary px-3 text-white hover:bg-primary/90 sm:px-4">
              <a href={appUrl('/create-organization')}>Get started free</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80">
          ← Back to home
        </Link>
        <article className="mt-8">
          <header className="border-b border-border pb-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">{title}</h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          </header>
          <div className="space-y-10 py-10 leading-7 text-muted-foreground">{children}</div>
        </article>
      </main>

      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
          <div className="flex items-center gap-2">
            <img
              src="/zeptra-logo.png"
              alt="Zeptra Logo"
              className="h-6 w-auto max-w-[100px] grayscale object-contain opacity-70"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
                (event.currentTarget.nextElementSibling as HTMLElement)?.classList.remove('hidden');
              }}
            />
            <span className="hidden text-sm font-semibold text-muted-foreground">Zeptra</span>
          </div>
          <div className="text-center text-sm text-muted-foreground md:text-left">© {new Date().getFullYear()} Zeptra. All rights reserved.</div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="transition-colors hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="transition-colors hover:text-foreground">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
