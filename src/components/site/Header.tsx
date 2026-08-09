import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "من نحن" },
  { to: "/how-it-works", label: "كيف تعمل المنصة" },
  { to: "/faq", label: "الأسئلة الشائعة" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2.5 font-display font-bold text-primary shrink-0">
          <img 
            src="/logo.svg" 
            alt="شعار منصة شكاوى المستهلك" 
            width={40}
            height={40}
            className="h-10 w-auto shrink-0" 
            // @ts-ignore - fetchpriority is supported in modern browsers
            fetchpriority="high"
          />
          <span className="text-base md:text-lg font-extrabold text-foreground leading-tight">
            منصة شكاوى المستهلك
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="التنقل الرئيسي">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground font-bold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Action Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="/"
            hash="complaint-form"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md active:scale-95"
          >
            <span>تقديم شكوى</span>
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-border/80 bg-background md:hidden focus:outline-none focus:ring-2 focus:ring-primary/20"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5 shrink-0" /> : <Menu className="h-5 w-5 shrink-0" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div 
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-border/40 bg-background/95 backdrop-blur-lg", 
          open ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        )}
      >
        <div className="container-page flex flex-col gap-1.5">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/90 transition-colors hover:bg-secondary active:bg-secondary"
              activeProps={{ className: "bg-secondary text-primary font-bold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="complaint-form"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 active:scale-98"
          >
            <span>تقديم شكوى</span>
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}