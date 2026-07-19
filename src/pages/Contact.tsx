import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { appUrl } from '@/lib/domains';

export default function Contact() {
  useEffect(() => {
    if (!document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* STICKY HEADER — mirrors LegalLayout */}
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
              <a href={appUrl('/login')} target="_blank" rel="noopener noreferrer">Login</a>
            </Button>
            <Button asChild className="bg-primary px-3 text-white hover:bg-primary/90 sm:px-4">
              <a href={appUrl('/create-organization')} target="_blank" rel="noopener noreferrer">Get started free</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[700px] px-4 sm:px-6">
        {/* HEADLINE SECTION */}
        <section
          className="mt-10 rounded-2xl px-6 py-12 text-center sm:px-10 sm:py-16"
          style={{ backgroundColor: '#f9fafb' }}
        >
          <h1
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
            style={{ color: '#0f172a' }}
          >
            Let's Simplify Your Expense Management
          </h1>
          <p
            className="mx-auto mt-4 max-w-lg text-base sm:text-lg"
            style={{ color: '#475569' }}
          >
            Have a question or want to see Zeptra in action? Reach out — we'd love to help your team get started.
          </p>
        </section>

        {/* EMAIL + WHATSAPP BUTTONS */}
        <section className="mt-8 flex flex-col items-center gap-4 min-[480px]:flex-row min-[480px]:justify-center">
          <a
            href="mailto:hello@getzeptra.com"
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-md border px-6 text-sm font-medium transition-colors"
            style={{
              borderColor: '#0f172a',
              color: '#0f172a',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0f172a';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#0f172a';
            }}
          >
            <Mail className="h-4 w-4" />
            Email Us
          </a>

          <a
            href="https://wa.me/919473468003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md px-6 text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: '#25D366' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1da851';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#25D366';
            }}
          >
            {/* Official WhatsApp inline SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </section>

        {/* DIVIDER */}
        <hr className="my-10" style={{ borderColor: '#e2e8f0' }} />

        {/* TALLY FORM EMBED */}
        <section className="pb-16">
          <iframe
            data-tally-src="https://tally.so/r/KYN5Vk?transparentBackground=1"
            width="100%"
            height="520"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Let's Simplify Your Expense Management"
          />
        </section>
      </main>

      {/* FOOTER — mirrors LegalLayout */}
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
            <Link to="/contact" className="transition-colors hover:text-foreground">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
